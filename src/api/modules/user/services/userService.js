import { PrismaClient } from '@prisma/client'
import UserRepository from '../repositories/userRepository'

export default class UserService {
    userRepository;
    PrismaClient;

    constructor(PrismaClient){
        this.prismaClient = PrismaClient;
        this.userRepository = new UserRepository(this.prismaClient);
    }

    async store(payload) {
        const user = await this.userRepository.save(payload)
        return { user }
    }
}