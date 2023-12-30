import { PrismaDriversRepository } from '@/repositories/prisma/prisma-drivers-repository'
import { GetAllDriversUseCase } from '../get-drivers'

export function makeGetDriverByNameUseCase() {
  const driversRepository = new PrismaDriversRepository()
  const getAllDriversUseCase = new GetAllDriversUseCase(driversRepository)

  return getAllDriversUseCase
}
