<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'servicios';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['servicio', 'socio_id',
     'subcategoria_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    //protected $hidden = [];

    // Relación de servicio con socios:
    public function socio()
    {
        // 1 servicio es ofrecido por un socio
        return $this->belongsTo('App\Socio', 'socio_id');
    }

    // Relación de servicio con subcategoria:
    public function subcategoria()
    {
        // 1 servicio pertenece a una subcategoria
        return $this->belongsTo('App\Subcategoria', 'subcategoria_id');
    }

    // Relación de servicio con calificaiones:
    public function calificaciones()
    {
        // 1 servicio puede tener distintas calificaiones
        return $this->hasMany('App\Calificacion', 'servicio_id');
    }
}
