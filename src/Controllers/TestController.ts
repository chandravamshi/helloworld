import { Body, JsonController, Controller,Param,BodyParam, QueryParam,Get, Res } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@JsonController()
export class TestController {
  @Get('/')
  async getHome( @Res() response: any):Promise<any> {

    try{
      return response.status(200).send('hello world');
    }
    catch(e){
        throw new Error()
    }
   
  }

  @Get('/users/mul')
  getOne(@QueryParam("ids", { isArray: true}) ids: string[]) {
    console.log(typeof(ids))
    return `the user id is  + ${ids}`;
  }


  @Get('/post')
  show() {
  return `Showing post`
  // (real app would return a blog post data)
  }

  // ...
  @Get('/bodyTest')
  store(@BodyParam('referenceIds') message: any) {
    console.log(message)
    return message
  }

//   @Post('/users')
//   post(@Body() user: any) {
//     return 'Saving user...';
//   }

//   @Put('/users/:id')
//   put(@Param('id') id: number, @Body() user: any) {
//     return 'Updating a user...';
//   }

//   @Delete('/users/:id')
//   remove(@Param('id') id: number) {
//     return 'Removing user...';
//   }
}