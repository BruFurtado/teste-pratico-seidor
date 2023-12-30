import { PrismaVehiclesRepository } from '@/repositories/prisma/prisma-vehicles-repository'
import { UpdateVehicleUseCase } from '../update-vehicle'

export function makeUpdateVehicleUseCase() {
  const vehiclesRepository = new PrismaVehiclesRepository()
  const updateVehicleUseCase = new UpdateVehicleUseCase(vehiclesRepository)

  return updateVehicleUseCase
}
