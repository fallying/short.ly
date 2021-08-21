import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../../../infra/database/repositories/users/IUsersRepository'
import { ICreateUserDTO } from '../CreateUser/CreateUserDTO'

@injectable()
class GetUser {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  async run(name: string): Promise<ICreateUserDTO | null> {
    return this.usersRepository.findByName(name)
  }
}

export {GetUser}