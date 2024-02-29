import { Body, Injectable } from '@nestjs/common';
import { user } from './schema';
import { db } from './db/conn';
import { v4 as uuidv4 } from 'uuid';
import { eq } from 'drizzle-orm';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  constructor(
    private jwtService : JwtService
  ){}
  async registerUser(
    name:string,
    email:string,
    password:string
    ){
    const findUser = await db.select().from(user).where(eq(user.email,email))
    if(findUser.length !=0 ) return {"message":"failure while creating user. User already exists","status":500}
    const id:string  = uuidv4()
    const hashedPassword = await bcrypt.hash(password,10)
    await db.insert(user).values([
      {
        id,name,email,password:hashedPassword
      }
    ])
    return {"message":"success","userId":id}
  }

  async loginUser(
    email:string,
    password:string
  ){
    const findUser = await db.select().from(user).where(eq(user.email,email))
    if(findUser.length ==0) return {"message":"user doesnt exist","status":404}
    if(await bcrypt.compare(findUser[0].password ,password)) return {"message":"password is wrong retry","status":401}
    const payload = { user: findUser[0].id, email: findUser[0].email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
