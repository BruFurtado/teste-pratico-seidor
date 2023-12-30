import { VehiclesRepository } from '@/repositories/vehicles-repository'
import { Vehicle } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetVehicleUseCaseRequest {
  id: string
}

interface GetVehicleUseCaseResponse {
  vehicle: Vehicle
}

export class GetVehicleByIdUseCase {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute({
    id,
  }: GetVehicleUseCaseRequest): Promise<GetVehicleUseCaseResponse> {
    const vehicle = await this.vehiclesRepository.findById(id)

    if (!vehicle) {
      throw new ResourceNotFoundError()
    }

    return {
      vehicle,
    }
  }
}
