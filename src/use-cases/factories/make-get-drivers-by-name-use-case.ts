import { PrismaDriversRepository } from '@/repositories/prisma/prisma-drivers-repository'
import { GetDriversByNameUseCase } from '../get-drivers-by-name'

export function makeGetDriverByNameUseCase() {
  const driversRepository = new PrismaDriversRepository()
  const getDriverByNameUseCase = new GetDriversByNameUseCase(driversRepository)

  return getDriverByNameUseCase
}
