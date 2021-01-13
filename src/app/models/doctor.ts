import { Appointment } from "./appointment";
import { User } from "./user";

export interface Doctor{
    id:number | null;
    userId:string;
    user: User;
    education:string;
    biography:string;
    experience:string;
    photo:string;
    positionId:number;
    positionName:string;    
    appointments:Appointment[];
}