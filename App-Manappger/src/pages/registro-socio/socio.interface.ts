export interface Socio {
    nombre: string;
    correo: string;
    telefono: string;
    ubicacion: string;
    servicios: Servicio[];
    horario: Horario[];
}

export interface Servicio{
    servicio: string;
    subcategoria_id: string;
    horario: Horario[];
}

export interface Horario{
	dia: string;
 	horaInicio: string;
 	horaFin: string;
}

