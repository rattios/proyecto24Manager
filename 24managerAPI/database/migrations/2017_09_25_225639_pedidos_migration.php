<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PedidosMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('direccion');
            $table->string('descripcion');
            $table->string('referencia');
            $table->float('lat')->nullable();
            $table->float('lng')->nullable();
            $table->float('total');
            $table->integer('estado');

            $table->integer('categoria_id')->unsigned();
            $table->foreign('categoria_id')->references('id')->on('categorias');

            $table->integer('subcategoria_id')->unsigned();
            $table->foreign('subcategoria_id')->references('id')->on('subcategorias');

            $table->integer('usuario_id')->unsigned();
            $table->foreign('usuario_id')->references('id')->on('usuarios');

            $table->integer('socio_id')->unsigned()->nullable();
            $table->foreign('socio_id')->references('id')->on('socios');

            $table->integer('servicio_id')->unsigned()->nullable();
            $table->foreign('servicio_id')->references('id')->on('servicios');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('pedidos');
    }
}
