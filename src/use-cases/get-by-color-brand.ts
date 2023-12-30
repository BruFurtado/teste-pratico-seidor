import { VehiclesRepository } from '@/repositories/vehicles-repository'
import { Vehicle } from '@prisma/client'

interface GetByColorAndBrandVehiclesUseCaseRequest {
  color: string
  brand: string
}

interface GetByColorAndBrandVehiclesUseCaseResponse {
  vehicles: Vehicle[]
}

export class GetByColorAndBrandVehiclesUseCase {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute({
    color,
    brand,
  }: GetByColorAndBrandVehiclesUseCaseRequest): Promise<GetByColorAndBrandVehiclesUseCaseResponse> {
    const vehicles = await this.vehiclesRepository.findByColorAndBrand(
      color,
      brand,
    )

    return {
      vehicles,
    }
  }
}
