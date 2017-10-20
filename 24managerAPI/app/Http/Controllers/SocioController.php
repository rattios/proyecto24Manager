<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SocioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los socios
        $socios = \App\Socio::all();

        if(count($socios) == 0){
            return response()->json(['error'=>'No existen socios.'], 404);          
        }else{
            return response()->json(['status'=>'ok', 'socios'=>$socios], 200);
        }
    }

    public function sociosServicios()
    {
        //cargar todos los socios con sus servicios
        $socios = \App\Socio::with('servicios.subcategoria')->get();

        if(count($socios) == 0){

            return response()->json(['error'=>'No existen socios.'], 404);          
        }else{
            for ($i=0; $i < count($socios); $i++) { 
                for ($j=0; $j < count($socios[$i]->servicios); $j++) { 
                    //return $socios[$i]->servicios[$j]->horario;
                    $socios[$i]->servicios[$j]->horario=json_decode($socios[$i]->servicios[$j]->horario);
                } 
            }
            return response()->json(['status'=>'ok', 'socios'=>$socios], 200);
        } 
    }

    public function sociosPedidos()
    {
        //cargar todos los socios con sus pedidos
        $socios = \App\Socio::with('pedidos')->get();

        if(count($socios) == 0){
            return response()->json(['error'=>'No existen socios.'], 404);          
        }else{
            return response()->json(['status'=>'ok', 'socios'=>$socios], 200);
        } 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Primero comprobaremos si estamos recibiendo todos los campos.
        if (!$request->input('correo') || !$request->input('nombre') ||
            !$request->input('telefono') || !$request->input('ubicacion') ||
            !$request->input('servicios'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['Faltan datos necesarios para el proceso de alta.'],422);
        } 
        
        $aux = \App\Socio::where('correo', $request->input('correo'))->get();
        if(count($aux)!=0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['Ya existe un socio con esas credenciales.'], 409);
        }

        //Verificar que todas las subcategorias que se estan pasando existen
        $servicios = json_decode($request->input('servicios'));
        for ($i=0; $i < count($servicios) ; $i++) { 
            $aux2 = \App\Subcategoria::find($servicios[$i]->subcategoria_id);
            if(count($aux2) == 0){
               // Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'No existe la subcategoría con id '.$servicios[$i]->subcategoria_id], 409);
            }   
        }

        if($nuevoSocio=\App\Socio::create($request->all())){
         //if (true) {
    
            $serviciosAux = [];
            $count=0;
            // return $servicios[0]->subcategoria_id;
            // return $servicios[1]->subcategoria_id;
            //Crear los servicios al socio
            
            for ($i=0; $i < count($servicios) ; $i++) {

                $nuevoServicio = new \App\Servicio;

                $nuevoServicio->servicio = $servicios[$i]->servicio;
                $nuevoServicio->socio_id = $nuevoSocio->id;
                $nuevoServicio->subcategoria_id = $servicios[$i]->subcategoria_id;
                $nuevoServicio->horario = json_encode($servicios[$i]->horario);
                //$nuevoServicio->dias = $servicios[$i]->dias;

                $nuevoServicio->save();
                $count++;

                array_push($serviciosAux, $nuevoServicio);
            }
            //return response()->json(['status'=>'ok', 'servicios'=>$serviciosAux, 'count'=>$count,'countS'=>count($servicios)], 200);
            return response()->json(['status'=>'ok', 'socio'=>$nuevoSocio, 'servicios'=>$serviciosAux, 'count'=>$count], 200);
        }else{
            return response()->json(['Error al crear el socio.'], 500);
        }
    }

    /*Nota: no esta en uso*/
    public function storePrimera(Request $request)
    {
        // Primero comprobaremos si estamos recibiendo todos los campos.
        if (!$request->input('correo') || !$request->input('nombre') ||
            !$request->input('telefono') || !$request->input('ubicacion') ||
            !$request->input('servicio') || !$request->input('horario') ||
            !$request->input('dias') || !$request->input('costo') ||
            !$request->input('subcategoria_id'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['Faltan datos necesarios para el proceso de alta.'],422);
        } 
        
        $aux = \App\Socio::where('correo', $request->input('correo'))->get();
        if(count($aux)!=0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['Ya existe un socio con esas credenciales.'], 409);
        }

        $aux2 = \App\Subcategoria::find($request->input('subcategoria_id'));
        if(count($aux2) == 0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['No existe la subcategoría a la cual se quiere asociar el servicio del socio.'], 409);
        }

        if($nuevoSocio=\App\Socio::create($request->all())){
            //Creamos el servicio al socio que se esta dando de alta
            $servicio = $nuevoSocio->servicios()->create($request->all());

            return response()->json(['status'=>'ok', 'socio'=>$nuevoSocio, 'servicio'=>$servicio], 200);
        }else{
            return response()->json(['Error al crear el socio.'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //cargar un socio
        $socio = \App\Socio::find($id);

        if(count($socio)==0){
            return response()->json(['error'=>'No existe el socio con id '.$id], 404);          
        }else{
            return response()->json(['status'=>'ok', 'socio'=>$socio], 200);
        } 
    }

    public function socioServicios($id)
    {
        //cargar un socio con sus servicios
        $socio = \App\Socio::find($id);

        if(count($socio)==0){
            return response()->json(['error'=>'No existe el socio con id '.$id], 404);          
        }else{

            //cargar los servicios del socio
            $servicios = $socio->servicios()->get();

            for ($i=0; $i < count($servicios) ; $i++) { 
                $servicios[$i]->horario=json_decode($servicios[$i]->horario);
            }

            $socio->servicios = $servicios;

            return response()->json(['status'=>'ok', 'socio'=>$socio], 200);
        } 
    }

    public function socioPedidos($id)
    {
        //cargar un socio con sus pedidos
        $socio = \App\Socio::find($id);

        if(count($socio)==0){
            return response()->json(['error'=>'No existe el socio con id '.$id], 404);          
        }else{

            //cargar los pedidos del socio
            $socio->pedidos = $socio->pedidos()->get();

            return response()->json(['status'=>'ok', 'socio'=>$socio], 200);
        } 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Comprobamos si el socio que nos están pasando existe o no.
        $socio = \App\Socio::find($id);

        if(count($socio)==0){
            return response()->json(['error'=>'No existe el socio con id '.$id], 404);          
        }      

        // Listado de campos recibidos teóricamente.
        $correo=$request->input('correo');
        $nombre=$request->input('nombre');
        $telefono=$request->input('telefono');
        $ubicacion=$request->input('ubicacion');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($correo != null && $correo!='')
        {
            $aux = \App\Socio::where('correo', $request->input('correo'))
            ->where('id', '<>', $socio->id)->get();

            if(count($aux)!=0){
               // Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'Ya existe otro socio con ese correo.'], 409);
            }

            $socio->correo = $correo;
            $bandera=true;
        }

        if ($nombre != null && $nombre!='')
        {
            $socio->nombre = $nombre;
            $bandera=true;
        }

        if ($telefono != null && $telefono!='')
        {
            $socio->telefono = $telefono;
            $bandera=true;
        }

        if ($ubicacion != null && $ubicacion!='')
        {
            $socio->ubicacion = $ubicacion;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($socio->save()) {
                return response()->json(['status'=>'ok','socio'=>$socio], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el socio.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato al socio.'],304);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Comprobamos si la categoria que nos están pasando existe o no.
        $socio = \App\Socio::find($id);

        if(count($socio)==0){
            return response()->json(['error'=>'No existe el socio con id '.$id], 404);          
        }
       
        $pedidos = $socio->pedidos;
        $servicios = $socio->servicios;

        if (sizeof($pedidos) > 0 || sizeof($servicios) > 0)
        {
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Este socio posee relaciones y no puede ser eliminado.'], 409);
        }

        // Eliminamos la socio si no tiene relaciones.
        $socio->delete();

        return response()->json(['status'=>'ok', 'message'=>'Se ha eliminado correctamente el socio.'], 200);
    }
}
