import { PrismaClient, User } from '@prisma/client'
import { RegisterUserDTO, UserUpdatePayload } from '../userDTO'
import bcrypt from 'bcrypt'

export default class UserRepository{
    client; 
    
    constructor(PrismaClient){
        this.client = PrismaClient;
    }

    async save(data) { 
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(data.password, salt)
        data.password = hashPassword;
        
        const payload = new RegisterUserDTO(data);
        return this.client.user.create({
            payload,
        })
    }
}