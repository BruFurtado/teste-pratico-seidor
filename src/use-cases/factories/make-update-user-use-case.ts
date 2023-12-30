import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UpdateUseCase } from '../update-user'

export function makeUpdateUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const updateUseCase = new UpdateUseCase(usersRepository)

  return updateUseCase
}
