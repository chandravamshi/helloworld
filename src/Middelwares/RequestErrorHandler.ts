import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime";
import { ExpressErrorMiddlewareInterface, HttpError, Middleware, NotFoundError, ExpressMiddlewareInterface, BadRequestError } from "routing-controllers";
import { Service } from "typedi";

@Service()
@Middleware({ type: 'after', priority: 1 })
export class RequestErrorHandler implements ExpressErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next: (err?: any) => any): void {
        console.log('RequestErrorHandler')
        // console.log(error)
        if (error instanceof BadRequestError) {
            console.log('BadRequestError')
            response.status(400).send({
                status: 400,
                message: `${error.message}`,
                error:error
            })
        } else if (error instanceof PrismaClientValidationError) {
            response.status(400).send({
                status: 400,
                message: `${error.name}:${error.message}`
            })
        } else {
            console.log('else')
            response.status(400).send({
                status: 400,
                message: `${error.name}:${error.message}`,
                error: error
            })
        }
    }

}

@Service()
@Middleware({ type: 'after', priority: 2 })
export class NoEndPoint implements ExpressMiddlewareInterface {
    use(request: any, response: any, next: (err?: any) => any): any {
        console.log('noendpoint')
        if (!response.headersSent) {
            response.status(404).send({
                status: 404,
                message: 'unknown endpoint'
            })
        } else next();
    }
}
