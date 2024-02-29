import { Injectable, NestMiddleware, Redirect } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ProductsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // have to check if user credentials are present in the session or not else logout and go to the login page to login
    // fetch user credentials in the session and access it to authenticate /products route in the code 

    // if(! sessionStorage.getItem('user')) @Redirect("/",301)
    
    // else return to login page to login the user
    next();
  }
}
