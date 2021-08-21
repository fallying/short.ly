import { ICreateUserDTO } from "../../../../../domain/users/useCases/CreateUser/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

class UsersRepository implements IUsersRepository {
  async save({name}: ICreateUserDTO): Promise<ICreateUserDTO> {
    return prisma.user.create({
      data: {
        name
      }
    })
  }

  async findByName(name: string): Promise<ICreateUserDTO | null> {
    return prisma.user.findFirst({
      where: {name}
    })
  }
}

export {UsersRepository}