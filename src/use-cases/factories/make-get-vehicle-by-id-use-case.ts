import { PrismaVehiclesRepository } from '@/repositories/prisma/prisma-vehicles-repository'
import { GetVehicleByIdUseCase } from '../get-vehicle-by-id'

export function makeGetVehicleByIdUseCase() {
  const vehiclesRepository = new PrismaVehiclesRepository()
  const getVehicleByIdUseCase = new GetVehicleByIdUseCase(vehiclesRepository)

  return getVehicleByIdUseCase
}
