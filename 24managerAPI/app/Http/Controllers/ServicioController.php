<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ServicioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los servicios
        $servicios = \App\Servicio::all();

        if(count($servicios) == 0){
            return response()->json(['error'=>'No existen servicios.'], 404);          
        }else{

            for ($i=0; $i < count($servicios) ; $i++) { 
                $servicios[$i]->horario=json_decode($servicios[$i]->horario);
            }

            return response()->json(['status'=>'ok', 'servicios'=>$servicios], 200);
        } 
    }

    public function serviciosSocio()
    {
        //cargar todos los servicios con su socio
        $servicios = \App\Servicio::with('socio')->get();

        if(count($servicios) == 0){
            return response()->json(['error'=>'No existen servicios.'], 404);          
        }else{

            for ($i=0; $i < count($servicios) ; $i++) { 
                $servicios[$i]->horario=json_decode($servicios[$i]->horario);
            }

            return response()->json(['status'=>'ok', 'servicios'=>$servicios], 200);
        } 
        
    }

    public function serviciosSocioSubcat($subcategoria_id)
    {
        //validar si existe la subcategoria
        $subcategoria = \App\Subcategoria::find($subcategoria_id);

        if(count($subcategoria)==0){
            return response()->json(['error'=>'No existe la subcategoría con id '.$subcategoria_id], 404);          
        }

        //cargar todos los servicios con su socio que pertenescan a la misma subcategoria
        $serviciosAux = \App\Servicio::where('subcategoria_id', $subcategoria_id)
            ->with('socio')->get();

        if(count($serviciosAux) == 0){
            return response()->json(['error'=>'No existen servicios en esa subcategoría.'], 404);          
        }else{

            for ($i=0; $i < count($serviciosAux) ; $i++) { 
                $serviciosAux[$i]->horario=json_decode($serviciosAux[$i]->horario);
            }

            //G Formato de 24 horas de una hora sin ceros iniciales 0 hasta 23
            //H Formato de 24 horas de una hora con ceros iniciales 00 hasta 23
            $horaActual = date('G');

            //w Representación numérica del día de la semana 0 (para domingo) hasta 6 (para sábado)
            $diaActualSem = date('w');

            switch ($diaActualSem) {
                case 0:
                    $hoy = 'Domingo';
                    break;
                case 1:
                    $hoy = 'Lunes';
                    break;
                case 2:
                    $hoy = 'Martes';
                    break;
                case 3:
                    $hoy = 'Miercoles';
                    break;
                case 4:
                    $hoy = 'Jueves';
                    break;
                case 5:
                    $hoy = 'Viernes';
                    break;
                case 6:
                    $hoy = 'Sabado';
                    break;
            }

            $servicios = [];

            for ($i=0; $i < count($serviciosAux) ; $i++) { 
                for ($j=0; $j <count($serviciosAux[$i]->horario) ; $j++) { 
                    if ($serviciosAux[$i]->horario[$j]->dia == $hoy &&
                         $serviciosAux[$i]->horario[$j]->horaInicio <= intval($horaActual) &&
                          $serviciosAux[$i]->horario[$j]->horaFin >= intval($horaActual)) {

                        array_push($servicios, $serviciosAux[$i]);
                    }
                }
            }

            return response()->json(['status'=>'ok', 'horaActual'=>$horaActual,
             'serviciosFiltrados'=>$servicios, 'servicios'=>$serviciosAux], 200);
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
    //Crear un servicio asociado a un socio
    public function store(Request $request, $socio_id)
    {
        // Comprobamos si el socio que nos están pasando existe o no.
        $socio = \App\Socio::find($socio_id);

        if(count($socio)==0){
            return response()->json(['error'=>'No existe el socio con id '.$socio_id], 404);          
        } 

        // Primero comprobaremos si estamos recibiendo todos los campos.
        if ( !$request->input('servicio') || !$request->input('horario') ||
            /*!$request->input('dias') || !$request->input('costo') ||*/
            !$request->input('subcategoria_id'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Faltan datos necesarios para el proceso de alta.'],422);
        } 
        
        $aux = \App\Servicio::where('servicio', $request->input('servicio'))
        ->where('socio_id', $socio->id)->get();
        if(count($aux)!=0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Este servicio ya está asociado al socio.'], 409);
        }

        $aux2 = \App\Subcategoria::find($request->input('subcategoria_id'));
        if(count($aux2) == 0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'No existe la subcategoría a la cual se quiere asociar el servicio del socio.'], 409);
        }

        //Creamos el servicio al socio que se paso por parametro
        //$servicio = $socio->servicios()->create($request->all());

        $nuevoServicio->servicio = $request->input('servicio');
        $nuevoServicio->socio_id = $socio->id;
        $nuevoServicio->subcategoria_id = $request->input('subcategoria_id');
        $nuevoServicio->horario = json_encode($request->input('horario'));

        return response()->json(['status'=>'ok', 'servicio'=>$nuevoServicio], 200);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //cargar un servicio
        $servicio = \App\Servicio::find($id);

        if(count($servicio)==0){
            return response()->json(['error'=>'No existe el servicio con id '.$id], 404);          
        }else{
            $servicio->horario = json_decode($servicio->horario);
            return response()->json(['status'=>'ok', 'servicio'=>$servicio], 200);
        } 
    }

    public function servicioSocio($id)
    {
        //cargar un servicio con su socio
        $servicio = \App\Servicio::find($id);

        if(count($servicio)==0){
            return response()->json(['error'=>'No existe el servicio con id '.$id], 404);          
        }else{
            $servicio->horario = json_decode($servicio->horario);

            //cargar los servicios del socio
            $servicio->socio = $servicio->socio()->get();

            return response()->json(['status'=>'ok', 'servicio'=>$servicio], 200);
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
        // Comprobamos si el servicio que nos están pasando existe o no.
        $servicio = \App\Servicio::find($id);

        if(count($servicio)==0){
            return response()->json(['error'=>'No existe el servicio con id '.$id], 404);          
        }   

        // Listado de campos recibidos teóricamente.
        $serv=$request->input('servicio');
        $horario=$request->input('horario');
        $dias=$request->input('dias');
        //$costo=$request->input('costo');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($serv != null && $serv!='')
        {
            $servicio->servicio = $serv;
            $bandera=true;
        }

        if ($horario != null && $horario!='')
        {
            $servicio->horario = json_encode($horario);
            $bandera=true;
        }

        if ($dias != null && $dias!='')
        {
            $servicio->dias = $dias;
            $bandera=true;
        }

        /*if ($costo != null && $costo!='')
        {
            $servicio->costo = $costo;
            $bandera=true;
        }*/

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($servicio->save()) {
                return response()->json(['status'=>'ok','servicio'=>$servicio], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el servicio.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato al servicio.'],304);
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
        // Comprobamos si el servicio que nos están pasando existe o no.
        $servicio = \App\Servicio::find($id);

        if(count($servicio)==0){
            return response()->json(['error'=>'No existe el servicio con id '.$id], 404);          
        } 
       
        $pedidos = $servicio->pedidos;

        if ( sizeof($pedidos) > 0)
        {
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Este servicio posee relaciones y no puede ser eliminado.'], 409);
        }

        // Eliminamos el servicio si no tiene relaciones.
        $servicio->delete();

        return response()->json(['status'=>'ok', 'message'=>'Se ha eliminado correctamente el servicio.'], 200);
    }
}
