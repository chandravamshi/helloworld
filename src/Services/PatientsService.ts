import { Service } from 'typedi';
import { prisma } from '../index';
import { Patients } from "../Classes/Patients";
import { Prisma } from '@prisma/client';


@Service()
export class PatientsService {

  getAllRecords = async () => {
    const patients = await prisma.patients.findMany();
    return patients;
  };


  insertRecord = async (data: Patients) => {

    // const patient = await prisma.patients.create({
    //     data: {
    //         name: data.name,
    //         grafts: data.grafts,
    //         price: data.price
    //     }
    // });
    return 'patient';
  };


  async getRecord(id: number) {
    try {
      const patient = await prisma.patients.findUnique({
        where: {
          id:id,
        },
      });

      return patient;

    } catch (e) {
      throw e
    }

  };




  deleteRecord = async (id: any) => {
    const patient = await prisma.patients.delete({
      where: {
        id: id,
      },
    });
    return patient;
  };

};