import { PrismaVehiclesRepository } from '@/repositories/prisma/prisma-vehicles-repository'
import { GetByColorAndBrandVehiclesUseCase } from '../get-by-color-brand'

export function makeGetByColorAndBrandVehicleUseCase() {
  const vehiclesRepository = new PrismaVehiclesRepository()
  const getByColorAndBrandVehiclesUseCase = new GetByColorAndBrandVehiclesUseCase(vehiclesRepository)

  return getByColorAndBrandVehiclesUseCase
}
