import { ICreateUserDTO } from "../../../../domain/users/useCases/CreateUser/CreateUserDTO";

interface IUsersRepository {
  save(data: ICreateUserDTO): Promise<ICreateUserDTO>
  findByName(name: string): Promise<ICreateUserDTO | null>
}

export {IUsersRepository}