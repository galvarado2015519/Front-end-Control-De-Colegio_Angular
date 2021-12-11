import { Alumno } from "../alumnos/alumno";
import { Clase } from "../home/clase";

export class AsignacionesAlumno {
    alumno?:          Alumno;
    clase?:           Clase;
    carne?:           string;
    asignacionId?:    string;
    fechaAsignacion?: string;
}

