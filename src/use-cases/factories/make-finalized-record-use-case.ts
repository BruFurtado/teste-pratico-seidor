import { PrismaRecordsRepository } from '@/repositories/prisma/prisma-records-repository'
import { PrismaVehiclesRepository } from '@/repositories/prisma/prisma-vehicles-repository'
import { FinalizedRecordUseCase } from '../finalized-record'

export function makeFinalizedRecordUseCase() {
  const recordsRepository = new PrismaRecordsRepository()
  const vehiclesRepository = new PrismaVehiclesRepository()
  const finalizedRecordUseCase = new FinalizedRecordUseCase(recordsRepository, vehiclesRepository)

  return finalizedRecordUseCase
}
