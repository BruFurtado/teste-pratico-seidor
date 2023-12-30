import { PrismaDriversRepository } from '@/repositories/prisma/prisma-drivers-repository'
import { DeleteDriverUseCase } from '../delete-driver'

export function makeDeleteDriverUseCase() {
  const driversRepository = new PrismaDriversRepository()
  const deleteDriverUseCase = new DeleteDriverUseCase(driversRepository)

  return deleteDriverUseCase
}
