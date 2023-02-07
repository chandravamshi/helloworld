import { Service } from 'typedi';
import { prisma } from '../index';
import { Patients } from "../Classes/Patients";


@Service()
export class PatientsService {

    getAllRecords = async () => {
        const patients = await prisma.patients.findMany();
        return patients;
    };


    insertRecord = async (data:Patients) => {

        // const patient = await prisma.patients.create({
        //     data: {
        //         name: data.name,
        //         grafts: data.grafts,
        //         price: data.price
        //     }
        // });
        return 'patient';
    };


    getRecord = async (id:any) => {
        const patient = await prisma.patients.findUnique({
            where: {
              id: id,
            },
          });
        return patient;
    };

    deleteRecord = async (id:any) => {
        const patient = await prisma.patients.delete({
            where: {
              id: id,
            },
          });
        return patient;
    };

};