<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SubcategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todas las subcat
        $subcategorias = \App\Subcategoria::all();

        if(count($subcategorias) == 0){
            return response()->json(['error'=>'No existen subcategorías.'], 404);          
        }else{
            return response()->json(['status'=>'ok', 'subcategorias'=>$subcategorias], 200);
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
        // Listado de campos recibidos teóricamente.
        /*$nombre=$request->input('nombre'); 
        $imagen=$request->input('imagen'); 
        $costo=$request->input('costo');
        $categoria_id=$request->input('categoria_id');*/

        // Primero comprobaremos si estamos recibiendo todos los campos.
        if ( !$request->input('nombre') || !$request->input('imagen') || !$request->input('costo') || !$request->input('categoria_id'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Faltan datos necesarios para el proceso de alta.'],422);
        }

        $aux = \App\Subcategoria::where('nombre', $request->input('nombre'))->get();
        if(count($aux)!=0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Ya existe una subcategoría con ese nombre.'], 409);
        }
        
        /*Primero creo una instancia en la tabla subcategorias*/
        /*$subcategoria = new \App\Subcategoria;
        $subcategoria->nombre = $nombre;
        $subcategoria->imagen = $imagen;
        $subcategoria->costo = $costo;
        $subcategoria->categoria_id = $categoria_id;

        
        if($subcategoria->save()){
           return response()->json(['status'=>'ok','subcategoria'=>$subcategoria], 200);
        }else{
            return response()->json(['error'=>'Error al crear la subcategoría.'], 500);
        } */

        if($nuevaSubcategoria=\App\Subcategoria::create($request->all())){
           return response()->json(['status'=>'ok', 'subcategoria'=>$nuevaSubcategoria], 200);
        }else{
            return response()->json(['error'=>'Error al crear la subcategoría.'], 500);
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
        //cargar una subcat
        $subcategoria = \App\Subcategoria::find($id);

        if(count($subcategoria)==0){
            return response()->json(['error'=>'No existe la subcategoría con id '.$id], 404);          
        }else{

            return response()->json(['status'=>'ok', 'subcategoria'=>$subcategoria], 200);
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
        // Comprobamos si la subcategoria que nos están pasando existe o no.
        $subcategoria=\App\Subcategoria::find($id);

        if (count($subcategoria)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe la subcategoría con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        $categoria_id=$request->input('categoria_id');
        $nombre=$request->input('nombre');
        $imagen=$request->input('imagen');
        $costo=$request->input('costo');


        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($categoria_id != null && $categoria_id!='')
        {
            $subcategoria->categoria_id = $categoria_id;
            $bandera=true;
        }

        if ($nombre != null && $nombre!='')
        {
            $subcategoria->nombre = $nombre;
            $bandera=true;
        }

        if ($imagen != null && $imagen!='')
        {
            $subcategoria->imagen = $imagen;
            $bandera=true;
        }

        if ($costo != null && $costo!='')
        {
            $subcategoria->costo = $costo;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($subcategoria->save()) {
                return response()->json(['status'=>'ok','subcategoria'=>$subcategoria], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar la subcategoría.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['errors'=>'No se ha modificado ningún dato de la subcategoría.'],304);
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
        // Comprobamos si la subcategoría existe o no.
        $subcategoria=\App\Subcategoria::find($id);

        if (count($subcategoria)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe la subcategoría con id '.$id], 404);
        }
        
        $categoria = $subcategoria->categoria;
        $pedidos = $subcategoria->pedidos;
        $servicios = $subcategoria->servicios;

        if (sizeof($categoria) > 0 || sizeof($pedidos) > 0 || sizeof($servicios) > 0)
        {
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Esta subcategoría posee relaciones y no puede ser eliminada.'], 409);
        }

        // Eliminamos la subcategoría si no tiene relaciones.
        $subcategoria->delete();

        return response()->json(['status'=>'ok', 'message'=>'Se ha eliminado correctamente la subcategoría.'], 200);
    }
}
