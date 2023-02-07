import { Body, JsonController, Controller, Param, BodyParam, QueryParam, Get, Res, Req, Post, Delete, UseBefore } from 'routing-controllers';
import { Service } from 'typedi';
import { PatientsService } from "../Services/PatientsService";
import { Patients } from "../Classes/Patients";
import { MyMiddleware } from '../Middelwares/ValidationError';

@Service()
@JsonController('/patients')
export class PatientsController {

    constructor(private patientsService: PatientsService) {
    }

    // get all patients records
    @Get('/lists')
    async getAll(@Res() response: any): Promise<any> {

        try {
            const allPatients = await this.patientsService.getAllRecords()
            return response.status(200).send(allPatients);
        }
        catch (e) {
            // console.log(e)
        }

    }

    @UseBefore(MyMiddleware)
    @Post('/insert')
    async insertRecord(@Req() request: any, @Body({ validate: true }) data: Patients, @Res() response: any): Promise<any> {

        try {
            const allPatients = await this.patientsService.insertRecord(data)
            return response.status(200).send(allPatients);
        }
        catch (err) {
            console.log('/insert')
            // console.log(e.message);
            // return response.status(500).send(err);
        }

    }

    @Get('/getOne')
    async getOneRecord(@Res() response: any, @QueryParam('id') id: number) {
        try {
            const patient = await this.patientsService.getRecord(id);
            console.log(patient)
            return response.status(200).send(patient);
        }
        catch (e) {
            throw new Error()
        }
    }


    @Delete('/del')
    async remove(@Res() response: any, @QueryParam('id') id: number) {
        try {
            const patient = await this.patientsService.deleteRecord(id)
            return response.status(200).send(patient);
        }
        catch (e) {
            throw new Error()
        }
    }
}
