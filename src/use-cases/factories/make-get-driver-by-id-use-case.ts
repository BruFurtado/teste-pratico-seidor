import { PrismaDriversRepository } from '@/repositories/prisma/prisma-drivers-repository'
import { GetDriverByIdUseCase } from '../get-driver-by-id'

export function makeGetDriverByIdUseCase() {
  const driversRepository = new PrismaDriversRepository()
  const getDriverByIdUseCase = new GetDriverByIdUseCase(driversRepository)

  return getDriverByIdUseCase
}
