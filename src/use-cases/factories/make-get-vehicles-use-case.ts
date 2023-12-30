import { PrismaVehiclesRepository } from '@/repositories/prisma/prisma-vehicles-repository'
import { GetAllVehiclesUseCase } from '../get-vehicles'

export function makeGetAllVehiclesUseCase() {
  const vehiclesRepository = new PrismaVehiclesRepository()
  const getAllVehiclesUseCase = new GetAllVehiclesUseCase(vehiclesRepository)

  return getAllVehiclesUseCase
}
