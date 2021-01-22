export interface AppointmentPut {
    animalId: number;
    serviceId: number;
    statusId: number;
    doctorId: number;
    proceduresIds: number[];
    appointmentDate: Date;
    complaints: string;
    treatmentDescription: string;
}
