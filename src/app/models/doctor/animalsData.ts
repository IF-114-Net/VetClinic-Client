import { Animal } from "./animal";

export interface AnimalsData{
    data:Animal[];
    pageNumber:number;
    pageSize:number;
}