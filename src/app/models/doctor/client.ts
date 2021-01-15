import { Animal } from "./animal";
import { Appointment } from "./appointment";
import { User } from "./user";

export interface Client{
    id:number | null;
    userId:string;
    user: User;
    appointments:Appointment[];
    animals:Animal[];
}