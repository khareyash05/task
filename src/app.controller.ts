import { Body, Controller, Get, Post,Response } from '@nestjs/common';
import { AppService } from './app.service';
import * as Cookies from 'cookies'

// const cookies = Cookies()

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/login")
  async loginUser(
    @Body('email') userEmail:string,
    @Body('password') userPassword:string,
  ){
    const response = await this.appService.loginUser(userEmail,userPassword)
    return response
  }
  @Post("/register")
 async  registerUser(
    @Body('name') userName : string,
    @Body('email') userEmail:string,
    @Body('password') userPassword:string,
  ){
    const response = await this.appService.registerUser(userName,userEmail,userPassword)
    return response
  }
}
