import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../../../infra/database/repositories/users/IUsersRepository'
import { ICreateUserDTO } from './CreateUserDTO'

type ICreateUserRequest = {
  name: string;
}


@injectable()
class CreateUser {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  async run({name}: ICreateUserRequest): Promise<ICreateUserDTO> {
    return this.usersRepository.save({name})
  }
}

export {CreateUser}