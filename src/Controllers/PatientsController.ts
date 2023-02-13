import { Body, JsonController, Controller, Param, BodyParam, QueryParam, QueryParams, Get, Res, Req, Post, Delete, UseBefore, UseAfter, BadRequestError } from 'routing-controllers';
import { Service } from 'typedi';
import { PatientsService } from "../Services/PatientsService";
import { Patients } from "../Classes/Patients";
import { ValidationErrors } from '../Middelwares/ValidationErrors';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime';
import { GetOneReq } from '../dto/PatientsReqDto';
// import { MyMiddleware } from '../Middelwares/ValidationError';

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

    // 
    @Post('/insert')
    @UseAfter(ValidationErrors)
    async insertRecord(@Req() request: any, @Body({ validate: { whitelist: true, forbidNonWhitelisted: true } }) data: Patients, @Res() response: any): Promise<any> {

        try {
            const allPatients = await this.patientsService.insertRecord(data)
            return response.status(200).send(allPatients);
        }
        catch (err) {
            console.log('/insert')
            // console.log(e.message);
            return response.status(500).send(err);
        }

    }

    @Get('/getOne')
    @UseAfter(ValidationErrors)
    async getOneRecord(@Res() response: any, @QueryParams() params: GetOneReq) {
        // ,{required:true} { validate: { stopAtFirstError: true } }
        // stopAtFirstError: true, validationError: {
        //     target: true,
        //     value: true
        // }
        // if(id && typeof id === "number" ) {
        //     const patient = await this.patientsService.getRecord(id);
        //      response.status(200).send(patient);
        // }
        // else  {
        //     if(typeof id !== "number"){
        //         throw new BadRequestError('parameter id should be number')
        //     }
        //     else{
        //         throw new BadRequestError('parameter id is required')
        //     }

        // }

        try {

            const patient = await this.patientsService.getRecord(params.id);
            response.status(200).send(patient);

        } catch (error) {
            throw error;

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
