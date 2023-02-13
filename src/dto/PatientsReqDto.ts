import { IsDate, IsNumber, IsString, Validate, IsNotEmpty, IsDefined } from "class-validator";
import 'reflect-metadata';

export class GetOneReq {

    @IsNumber({},{message:'parameter id should be int'})
    @IsNotEmpty({message:'parameter id is needed'})
    id: number;
}