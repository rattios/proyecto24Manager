<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Calificacion extends Model
{
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'calificaciones';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['comentario', 'puntaje', 'servicio_id', 'pedido_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    //protected $hidden = [];

    // Relación de calificacion con pedidos:
    public function pedido()
    {
        // 1 calificacion pertenece a un pedido
        return $this->belongsTo('App\Pedido', 'pedido_id');
    }

    // Relación de calificacion con servicios:
    public function servicio()
    {
        // 1 calificacion pertenece a un servicio
        return $this->belongsTo('App\Servicio', 'servicio_id');
    }


}
