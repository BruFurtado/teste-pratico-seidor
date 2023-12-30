import { PrismaDriversRepository } from '@/repositories/prisma/prisma-drivers-repository'
import { RegisterDriverUseCase } from '../register-driver'

export function makeRegisterDriverUseCase() {
  const driversRepository = new PrismaDriversRepository()
  const registerDriverUseCase = new RegisterDriverUseCase(driversRepository)

  return registerDriverUseCase
}
