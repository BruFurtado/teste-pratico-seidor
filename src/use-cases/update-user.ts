import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UpdateUseCaseRequest {
  id: string
  name: string
  email: string
}

interface UpdateUseCaseResponse {
  user: User | null
}

export class UpdateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
    name,
    email,
  }: UpdateUseCaseRequest): Promise<UpdateUseCaseResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const updatedUser = await this.usersRepository.save(id, name, email)

    return {
      user: updatedUser,
    }
  }
}
