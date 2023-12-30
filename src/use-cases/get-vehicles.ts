import { VehiclesRepository } from '@/repositories/vehicles-repository'
import { Vehicle } from '@prisma/client'

interface GetAllVehiclesUseCaseResponse {
  vehicles: Vehicle[]
}

export class GetAllVehiclesUseCase {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute(): Promise<GetAllVehiclesUseCaseResponse> {
    const vehicles = await this.vehiclesRepository.findAll()

    return {
      vehicles,
    }
  }
}
