import { VehiclesRepository } from '@/repositories/vehicles-repository'
import { VehicleAlreadyExistsError } from './errors/vehicle-already-exists-error'
import { Vehicle } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UpdateVehicleUseCaseRequest {
  id: string
  plate: string
  color: string
  brand: string
}

interface UpdateVehicleUseCaseResponse {
  vehicle: Vehicle | null
}

export class UpdateVehicleUseCase {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute({
    id,
    plate,
    color,
    brand,
  }: UpdateVehicleUseCaseRequest): Promise<UpdateVehicleUseCaseResponse> {
    const vehicle = await this.vehiclesRepository.findById(id)

    if (!vehicle) {
      throw new ResourceNotFoundError()
    }
    
    const vehicleWithSamePlate =
      await this.vehiclesRepository.findByPlate(plate)

    if (vehicleWithSamePlate) {
      throw new VehicleAlreadyExistsError()
    }

    const updatedVehicle = await this.vehiclesRepository.save(id, plate, color, brand)

    return {
      vehicle: updatedVehicle,
    }
  }
}
