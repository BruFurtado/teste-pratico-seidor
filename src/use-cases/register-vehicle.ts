import { VehiclesRepository } from '@/repositories/vehicles-repository'
import { VehicleAlreadyExistsError } from './errors/vehicle-already-exists-error'
import { Vehicle } from '@prisma/client'

interface RegisterVehicleUseCaseRequest {
  plate: string
  color: string
  brand: string
}

interface RegisterVehicleUseCaseResponse {
  vehicle: Vehicle
}

export class RegisterVehicleUseCase {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute({
    plate,
    color,
    brand,
  }: RegisterVehicleUseCaseRequest): Promise<RegisterVehicleUseCaseResponse> {
    const vehicleWithSamePlate =
      await this.vehiclesRepository.findByPlate(plate)

    if (vehicleWithSamePlate) {
      throw new VehicleAlreadyExistsError()
    }

    const vehicle = await this.vehiclesRepository.create({
      plate,
      color,
      brand,
    })

    return {
      vehicle,
    }
  }
}
