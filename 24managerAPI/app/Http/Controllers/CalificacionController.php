<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class CalificacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todas las calificaciones
        $calificaciones = \App\Calificacion::all();

        if(count($calificaciones) == 0){
            return response()->json(['error'=>'No existen calificaciones.'], 404);          
        }else{
            return response()->json(['status'=>'ok', 'calificaciones'=>$calificaciones], 200);
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
    public function store(Request $request, $pedido_id)
    {
        // Primero comprobaremos si estamos recibiendo todos los campos.
        if ( !$request->input('comentario') || !$request->input('puntaje'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Faltan datos necesarios para el proceso de alta.'],422);
        } 
        
        $pedido = \App\Pedido::find($pedido_id);
        if(count($pedido) == 0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'No existe el pedido que se quiere calificar.'], 409);
        }

        $aux = $pedido->calificacion;

        if (sizeof($aux) > 0 )
        {
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Este pedido ya está calificado.'], 409);
        }

        /*Primero creo una instancia en la tabla categorias*/
        $calificacion = new \App\Calificacion;
        $calificacion->comentario = $request->input('comentario');
        $calificacion->puntaje = $request->input('puntaje');
        $calificacion->pedido_id = $pedido->id;
        $calificacion->servicio_id = $pedido->servicio_id;

        if($calificacion->save()){
           return response()->json(['status'=>'ok', 'calificacion'=>$calificacion], 200);
        }else{
            return response()->json(['error'=>'Error al crear la calificacion.'], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($pedido_id)
    {
        // Comprobamos si el pedido que nos están pasando existe o no.
        $pedido=\App\Pedido::find($pedido_id);

        if (count($pedido)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el pedido con id '.$pedido_id], 404);
        } 

        $calificacion = $pedido->calificacion;

        if (sizeof($calificacion) > 0 )
        {
            return response()->json(['status'=>'ok','calificacion'=>$calificacion], 200);           
        }  
        else{
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'El pedido no posee calificación.'], 404);
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
    public function update(Request $request, $pedido_id)
    {
        // Comprobamos si el pedido que nos están pasando existe o no.
        $pedido = \App\Pedido::find($pedido_id);
        if(count($pedido) == 0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'No existe el pedido que se quiere recalificar.'], 409);
        }

        $calificacion = $pedido->calificacion;

        if (sizeof($calificacion) > 0 )
        {
            // Listado de campos recibidos teóricamente.
            $comentario=$request->input('comentario');
            $puntaje=$request->input('puntaje');

            // Creamos una bandera para controlar si se ha modificado algún dato.
            $bandera = false;

            // Actualización parcial de campos.
            if ($comentario != null && $comentario!='')
            {

                $calificacion->comentario = $comentario;
                $bandera=true;
            }

            if ($puntaje != null && $puntaje!='')
            {
                $calificacion->puntaje = $puntaje;
                $bandera=true;
            }

            if ($bandera)
            {
                // Almacenamos en la base de datos el registro.
                if ($calificacion->save()) {
                    return response()->json(['status'=>'ok','calificacion'=>$calificacion], 200);
                }else{
                    return response()->json(['error'=>'Error al actualizar la calificación.'], 500);
                }
                
            }
            else
            {
                // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
                // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
                return response()->json(['error'=>'No se ha modificado ningún dato a la la calificación.'],304);
            }            
        }  
        else{
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'El pedido no posee calificación.'], 404);
        }   


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($pedido_id)
    {
        // Comprobamos si el pedido que nos están pasando existe o no.
        $pedido=\App\Pedido::find($pedido_id);

        if (count($pedido)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el pedido con id '.$pedido_id], 404);
        } 

        $calificacion = $pedido->calificacion;

        if (sizeof($calificacion) > 0 )
        {
            // Eliminamos la calificacion del pedido.
            $calificacion->delete();

            return response()->json(['status'=>'ok', 'message'=>'Se ha eliminado correctamente la calificación.'], 200);           
        }  
        else{
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'El pedido no posee calificación.'], 404);
        }
    }

        public function destroy2($id)
    {
        // Comprobamos si el pedido que nos están pasando existe o no.
        $calificacion=\App\Calificacion::find($id);

        
            // Eliminamos la calificacion del pedido.
            $calificacion->delete();

            return response()->json(['status'=>'ok', 'message'=>'Se ha eliminado correctamente la calificación.'], 200);           
        
    }
}
