import { PrismaDriversRepository } from '@/repositories/prisma/prisma-drivers-repository'
import { UpdateDriverUseCase } from '../update-driver'

export function makeUpdateDriverUseCase() {
  const driversRepository = new PrismaDriversRepository()
  const updateDriverUseCase = new UpdateDriverUseCase(driversRepository)

  return updateDriverUseCase
}
