import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { onError, onSuccess } from '../../../helpers/responseHandler';
import UserService from '../services/userService'

export default class UserController {
    service;
    prismaClient;
    
    constructor(PrismaClient){
        this.prismaClient = PrismaClient;
        this.service = UserService(this.prismaClient);
    }

    async store(request = Request, response = Response) {
        try {
          const user = await this.service.store(request.body)
          
          return onSuccess(response, 200, user)
        } catch (error) {
          return onError(response, error)
        }
      }
}