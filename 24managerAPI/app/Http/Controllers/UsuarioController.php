<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $user=$request->input('user'); 
        $password=$request->input('password'); 
        $correo=$request->input('correo'); 
        $nombre=$request->input('nombre');
        $telefono=$request->input('telefono');
        $sexo=$request->input('sexo');
        $tipo=$request->input('tipo');

        /*Primero creo una instancia en la tabla usuarios*/
        $usuario = new \App\Usuario;
        $usuario->user = $user;
        $usuario->password = $password;
        $usuario->correo = $correo;
        $usuario->nombre = $nombre;
        $usuario->telefono = $telefono;
        $usuario->sexo = $sexo;
        $usuario->tipo = $tipo;

        if($usuario->save()){
           return response()->json(['status'=>'ok'], 200);
        }else{
            return response()->json(['error'=>'Error al crear el usuario.'], 500);
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
