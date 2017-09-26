<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Socio extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'socios';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['correo', 'nombre',
     'telefono', 'horario', 'ubicacion'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    //protected $hidden = [];

    // Relación de socio con pedidos:
    public function pedidos()
    {
        // Una socio puede tener asociados muchos pedidos
        return $this->hasMany('App\Pedido', 'socio_id');
    }

    // Relación de socio con servicios:
    public function servicios()
    {
        // Una socio puede ofrecer muchos servicios
        return $this->hasMany('App\Servicio', 'socio_id');
    }
}
