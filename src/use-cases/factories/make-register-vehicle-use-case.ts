import { PrismaVehiclesRepository } from '@/repositories/prisma/prisma-vehicles-repository'
import { RegisterVehicleUseCase } from '../register-vehicle'

export function makeRegisterVehicleUseCase() {
  const vehiclesRepository = new PrismaVehiclesRepository()
  const registerVehicleUseCase = new RegisterVehicleUseCase(vehiclesRepository)

  return registerVehicleUseCase
}
