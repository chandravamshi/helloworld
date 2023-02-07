import { ValidationError } from 'class-validator';
import { ExpressMiddlewareInterface, ExpressErrorMiddlewareInterface, HttpError, Middleware } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@Middleware({ type: "after" })
export class MyMiddleware implements ExpressErrorMiddlewareInterface {
    // interface implementation is optional

    // use(request: any, response: any, next: (err: any) => any): void {
    //     console.log('count: %d')
    //     next();
    // }

    error(error: any, request: any, res: any, next: (err: any) => any) {

        // console.log( error)
        // if (error instanceof HttpError) {
        //     response.status(error.httpCode).json(error);
        // }

        // next(error);


        const responseObject = {} as any;

        // if its an array of ValidationError
        // console.log(error);
        // console.log(Array.isArray(error));
        // res.status(422);

        responseObject.message = "You have an error in your request's body. Check 'errors' field for more details!";
        // responseObject.errors = error;
        responseObject.status = 0;
        responseObject.data = {};
        responseObject.data.message = [];
        error.errors.forEach((element: ValidationError) => {
            // Object.keys(element.constraints).forEach((type) => {
            //     responseObject.data.message.push(`property ${element.constraints[type]}`);
            // });
        });
        console.log(error.errors)
        return res.json(responseObject);
       
        // console.log(error.errors[0].constraints)
        next(error.errors)
        // next(responseObject)
    }
}