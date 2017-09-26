<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subcategoria extends Model
{
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'subcategorias';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nombre', 'imagen', 'costo', 'categoria_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    //protected $hidden = [];

    // Relación de subcategoria con pedidos:
    public function pedidos()
    {
        // 1 subcategoria puede estar en varios(distintos) pedidos
        return $this->hasMany('App\Pedido', 'subcategoria_id');
    }

     // Relación de subcategoria con categorias:
    public function categoria()
    {
        // 1 subcategoria pertene a una categoria
        return $this->belongsTo('App\Categoria', 'categoria_id');
    }

    // Relación de subcategoria con servicios:
    public function servicios()
    {
        // de 1 subcategoria pueden existir muchos servicios
        return $this->hasMany('App\Servicio', 'subcategoria_id');
    }
}
