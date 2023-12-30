import { PrismaRecordsRepository } from '@/repositories/prisma/prisma-records-repository'
import { GetRecordsUseCase } from '../get-records'

export function makeGetRecordsUseCase() {
  const recordsRepository = new PrismaRecordsRepository()
  const getRecordsUseCase = new GetRecordsUseCase(recordsRepository)

  return getRecordsUseCase
}
