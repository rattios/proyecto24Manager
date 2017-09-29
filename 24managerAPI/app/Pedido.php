<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pedidos';

    //public $timestamps = false;

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['direccion', 'descripcion', 'referencia', 'lat',
     'lng', 'costo', 'estado', 'categoria_id', 'subcategoria_id', 
     'usuario_id', 'socio_id', 'servicio_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    //protected $hidden = [];

    // Relación de pedidos con usuarios:
	public function usuario()
	{
		// 1 pedido pertenece a un usuario
		return $this->belongsTo('App\Usuario', 'usuario_id');
	}

	// Relación de pedidos con socios:
	public function socio()
	{
		// 1 pedido pertenece a un socio
		return $this->belongsTo('App\Socio', 'socio_id');
	}

    // Relación de pedidos con categorias:
    public function categoria()
    {
        // 1 pedido pertenece a una categoria
        return $this->belongsTo('App\Categoria', 'categoria_id');
    }

    // Relación de pedidos con subcategorias:
    public function subcategoria()
    {
        // 1 pedido pertenece a una subcategoria
        return $this->belongsTo('App\Subategoria', 'subcategoria_id');
    }

    // Relación de pedidos con calificaciones:
    public function calificacion()
    {
        // 1 pedido tiene una calificacion
        return $this->hasOne('App\Calificacion', 'pedido_id');
    }

    // Relación de pedidos con servicios:
    public function servicio()
    {
        // 1 pedido solicita un servicio
        return $this->belongsTo('App\Servicio', 'servicio_id');
    }
}
