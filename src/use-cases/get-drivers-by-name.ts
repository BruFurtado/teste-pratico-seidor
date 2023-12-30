import { DriversRepository } from '@/repositories/drivers-repository'
import { Driver } from '@prisma/client'

interface GetDriversByNameUseCaseRequest {
  name: string
}

interface GetDriversByNameUseCaseResponse {
  driver: Driver[]
}

export class GetDriversByNameUseCase {
  constructor(private driversRepository: DriversRepository) {}

  async execute({
    name,
  }: GetDriversByNameUseCaseRequest): Promise<GetDriversByNameUseCaseResponse> {
    const driver = await this.driversRepository.filterByName(name)

    return {
      driver,
    }
  }
}
