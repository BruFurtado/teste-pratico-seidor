import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { VehiclesRepository } from '@/repositories/vehicles-repository'

interface DeleteVehicleUseCaseRequest {
  vehicleId: string
}

export class DeleteVehicleUseCase {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute({ vehicleId }: DeleteVehicleUseCaseRequest): Promise<void> {
    const vehicle = await this.vehiclesRepository.findById(vehicleId)

    if (!vehicle) {
      throw new ResourceNotFoundError()
    }

    await this.vehiclesRepository.delete(vehicleId)
  }
}
