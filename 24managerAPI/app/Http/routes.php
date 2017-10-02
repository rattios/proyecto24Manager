<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    //return view('welcome');

//-------------------------------
    //Prueba de relacion de TecMarcaExtintor con TecExtintor
    //$tecextintores = \App\TecMarcaExtintor::find(4)->tecextintores()->where('serie', '=', '101953')->first();
    //$tecextintores = \App\TecMarcaExtintor::find(4)->tecextintores;
    //echo $tecextintores;

    //Prueba de relacion inversa
    //$tecmarcaextintor = \App\TecExtintor::find(10001)->tecmarcaextintor;
    //echo $tecmarcaextintor;

//-------------------------------
    //Prueba de Relación de TecUbicacion con TecExtintor
    //$tecextintores = \App\TecUbicacion::find(4)->tecextintores;
    //echo $tecextintores;

    //Prueba de relacion inversa
    //$tecubicacion = \App\TecExtintor::find(10001)->tecubicacion;
    //echo $tecubicacion;

//-------------------------------
    //Prueba de Relación de TecTipoExtintor con TecExtintor
    //$tecextintores = \App\TecTipoExtintor::find(4)->tecextintores;
    //echo $tecextintores;

    //Prueba de relacion inversa
    //$tectipoextintor = \App\TecExtintor::find(10001)->tectipoextintor;
    //echo $tectipoextintor;

//-------------------------------
    //Prueba de Relación de TecCapExtintor con TecExtintor
    //$tecextintores = \App\TecCapExtintor::find(1)->tecextintores;
    //echo $tecextintores;

    //Prueba de relacion inversa
    //$teccapextintor = \App\TecExtintor::find(10001)->teccapextintor;
    //echo $teccapextintor;

//-------------------------------
    //Prueba de Relación de TecLocalidad con TecExtintor
    //$tecextintores = \App\TecLocalidad::find(5)->tecextintores;
    //echo $tecextintores;

    //Prueba de relacion inversa
    //$teclocalidad = \App\TecExtintor::find(10001)->teclocalidad;
    //echo $teclocalidad;

//-------------------------------
    //Prueba de Relación de TecEmpresa con TecExtintor
    //$tecextintores = \App\TecEmpresa::find(5)->tecextintores;
    //echo $tecextintores;

    //Prueba de relacion inversa
    //$tecempresa = \App\TecExtintor::find(10001)->tecempresa;
    //echo $tecempresa;

//-------------------------------
    //Prueba de Relación de TecYacimiento con TecExtintor
    //$tecextintores = \App\TecYacimiento::find(5)->tecextintores;
    //echo $tecextintores;

    //Prueba de relacion inversa
    //$tecyacimiento = \App\TecExtintor::find(10001)->tecyacimiento;
    //echo $tecyacimiento;

//-------------------------------
    //Prueba de Relación de TecExtintor con InspInspeccion
    //$inspinspecciones = \App\TecExtintor::find(10009)->inspinspecciones;
    //echo $inspinspecciones;

    //Prueba de relacion inversa
    //$tecextintor = \App\InspInspeccion::find(1)->tecextintor;
    //echo $tecextintor;

        //Nota ->Esta prueba no pasa xq la tabla insp_innspecciones
                //actualmente esta vacia
            

//-------------------------------
    //Prueba de Relación de TecEmpresa con TecYacimiento
    //$tecyacimientos = \App\TecEmpresa::find(1)->tecyacimientos;
    //echo $tecyacimientos;

    //echo "<br><br>";

    //$auxyacimientos = \App\TecEmpresa::find(1)->auxyacimientos;
    //echo $auxyacimientos;

    //echo "<br><br>";

    //Prueba de relacion inversa
    //$tecempresas = \App\TecYacimiento::find(1)->tecempresas;
    //echo $tecempresas;

    //echo "<br><br>";

    //$auxempresas = \App\TecYacimiento::find(1)->auxempresas;
    //echo $auxempresas;

//-------------------------------
    //Prueba de Relación de TecEmpresa con TecOt
    //$tecot = \App\TecEmpresa::find(1)->tecot;
    //echo $tecot;

    //Prueba de relacion inversa
    //$tecempresa = \App\TecOt::find(1)->tecempresa;
    //echo $tecempresa;

//-------------------------------
    //Prueba de Relación de TecEmpresa con TecLocalidad
    //$auxlocalidades = \App\TecEmpresa::find(1)->auxlocalidades;
    //echo $auxlocalidades;

    //Prueba de relacion inversa
    //$auxempresas = \App\TecLocalidad::find(2)->auxempresas;
    //echo $auxempresas;

//-------------------------------
    //Prueba de Relación de TecExtintor con TecOTExtintor
    //$auxotextintores = \App\TecExtintor::find(10001)->auxotextintores;
    //echo $auxotextintores;

    //Prueba de relacion inversa
    //$auxextintores = \App\TecOTExtintor::find(1)->auxextintores;
    //echo $auxextintores;

//-------------------------------
    //Prueba de Relación de InspInspeccion con InspDetalleInspeccion
    //$inspdetalleinspeccion = \App\InspInspeccion::find(1)->inspdetalleinspeccion;
    //echo $inspdetalleinspeccion;

    //Prueba de relacion inversa
    //$inspinspeccion = \App\InspDetalleInspeccion::find(1)->inspinspeccion;
    //echo $inspinspeccion;

//-------------------------------
    //Prueba de Relación de TecExtintor con ViewExtUltMov
    //$viewextultmov = \App\TecExtintor::find(10001)->viewextultmov;
    //echo $viewextultmov;

    //Prueba de relacion inversa
    //$tecextintor = \App\ViewExtUltMov::find(10001)->tecextintor;
    //echo $tecextintor;

//-------------------------------
    //Prueba de Relación de InspDetalleInspeccion con InspInspeccion
    //$inspdetalleinspeccion = \App\InspInspeccion::find(1)->inspdetalleinspeccion;
    //echo $inspdetalleinspeccion;

    //Prueba de relacion inversa
    //$inspinspeccion = \App\InspDetalleInspeccion::find(1)->inspinspeccion;
    //echo $inspinspeccion;

    //Nota ->Esta prueba no pasa xq las tablas actualmente 
            //estan vacias

//-------------------------------
    //Prueba de Relación de ViewExtUltMov con InspInspeccion:
    //$inspeccion = \App\ViewExtUltMov::find(10083)->inspeccion;
    //echo $inspeccion;

    //Prueba de relacion inversa
    //$viewextultmov = \App\InspInspeccion::find(1)->viewextultmov;
    //echo $viewextultmov;

    /*$inspinspecciones = \App\InspInspeccion::
    with('tecextintor.teclocalidad.auxempresas')
    ->where('insp_estado', '=', 'P')
    ->find(1);*/
    //->get();

    //dd($inspinspecciones->toJson());
    //dd($inspinspecciones->toArray());

    //$tecuserinsp = \App\Tec_user::find(1)->tecuserinsp;
    //echo $tecuserinsp;


//--------------------------------------------------------
    //Pruebas relaciones 24 manger

    //Prueba de Relación de subcat con cat
    //$subcat = \App\Categoria::find(1)->subcategorias;
    //echo $subcat;

    //cargar una cat con sus subcat
    //$cat = App\Categoria::find(1)->with('subcategorias')->first();
    //echo $cat;

    //cargar todas las cat con sus subcat
    //$cat = App\Categoria::with('subcategorias')->get();
    //echo $cat;

    //$subcat = App\Categoria::find(1)->subcategorias()->get();
    //echo $subcat;

    //$cat = App\Categoria::find(3)->with('subcategorias')->get();
    //echo $cat;

    
});

Route::group(  ['middleware' =>'cors'], function(){

    //----Pruebas DocumentacionController
    Route::get('/documentacion','DocumentacionController@index');

    //----Pruebas LoginController
    Route::post('/login/web','LoginController@loginWeb');
    Route::post('/login/app','LoginController@loginApp');

    Route::group(['middleware' => 'jwt-auth'], function(){

        //----Pruebas UsuarioController
        Route::get('/usuarios','UsuarioController@index');
        Route::get('/usuarios/pedidos','UsuarioController@usuariosPedidos');
        Route::post('/usuarios','UsuarioController@store');
        Route::put('/usuarios/{id}','UsuarioController@update');
        Route::delete('/usuarios/{id}','UsuarioController@destroy');
        Route::get('/usuarios/{id}','UsuarioController@show');
        Route::get('/usuarios/{id}/pedidos','UsuarioController@usuarioPedidos');

        //----Pruebas SocioController
        Route::get('/socios','SocioController@index');
        Route::get('/socios/servicios','SocioController@sociosServicios');
        Route::get('/socios/pedidos','SocioController@sociosPedidos');
        Route::post('/socios','SocioController@store');
        Route::put('/socios/{id}','SocioController@update');
        Route::delete('/socios/{id}','SocioController@destroy');
        Route::get('/socios/{id}','SocioController@show');
        Route::get('/socios/{id}/servicios','SocioController@socioServicios');
        Route::get('/socios/{id}/pedidos','SocioController@socioPedidos');

        //----Pruebas CategoriaController
        Route::get('/categorias','CategoriaController@index');
        Route::get('/categorias/subcategorias','CategoriaController@categoriasSubcategorias');
        Route::post('/categorias','CategoriaController@store');
        Route::put('/categorias/{id}','CategoriaController@update');
        Route::delete('/categorias/{id}','CategoriaController@destroy');
        Route::get('/categorias/{id}','CategoriaController@show');
        Route::get('/categorias/{id}/subcategorias','CategoriaController@categoriaSubcategorias');

        //----Pruebas SubcategoriaController
        Route::get('/subcategorias','SubcategoriaController@index');
        Route::post('/subcategorias','SubcategoriaController@store');
        Route::put('/subcategorias/{id}','SubcategoriaController@update');
        Route::delete('/subcategorias/{id}','SubcategoriaController@destroy');
        Route::get('/subcategorias/{id}','SubcategoriaController@show');

        //----Pruebas ServicioController
        Route::get('/servicios','ServicioController@index');
        Route::get('/servicios/socio','ServicioController@serviciosSocio');
        Route::post('/servicios/{socio_id}','ServicioController@store');
        Route::put('/servicios/{id}','ServicioController@update');
        Route::delete('/servicios/{id}','ServicioController@destroy');
        Route::get('/servicios/{id}','ServicioController@show');
        Route::get('/servicios/{id}/socio','ServicioController@servicioSocio');
        
        //----Pruebas PedidoController
        Route::get('/pedidos','PedidoController@index');
        Route::get('/pedidos/informacion','PedidoController@pedidosInformacion');
        Route::post('/pedidos','PedidoController@store');
        Route::put('/pedidos/{id}','PedidoController@update');
        Route::delete('/pedidos/{id}','PedidoController@destroy');
        Route::get('/pedidos/{id}','PedidoController@show');
        Route::get('/pedidos/{id}/informacion','PedidoController@pedidoInformacion');

        //----Pruebas CalificacionController
        Route::get('/calificaciones','CalificacionController@index');
        Route::post('/calificaciones/{pedido_id}','CalificacionController@store');
        Route::put('/calificaciones/{pedido_id}','CalificacionController@update');
        Route::delete('/calificaciones/{pedido_id}','CalificacionController@destroy');
        Route::get('/calificaciones/{pedido_id}','CalificacionController@show');
    
    });
});
