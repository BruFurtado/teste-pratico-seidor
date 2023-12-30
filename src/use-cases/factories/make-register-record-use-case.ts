import { PrismaDriversRepository } from '@/repositories/prisma/prisma-drivers-repository'
import { PrismaVehiclesRepository } from '@/repositories/prisma/prisma-vehicles-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { PrismaRecordsRepository } from '@/repositories/prisma/prisma-records-repository'
import { RegisterRecordUseCase } from '../register-record'

export function makeRegisterRecordUseCase() {
  const recordsRepository = new PrismaRecordsRepository()
  const usersRepository = new PrismaUsersRepository()
  const driversRepository = new PrismaDriversRepository()
  const vehiclesRepository = new PrismaVehiclesRepository()
  const registerRecordUseCase = new RegisterRecordUseCase(recordsRepository, usersRepository, driversRepository, vehiclesRepository)

  return registerRecordUseCase
}
