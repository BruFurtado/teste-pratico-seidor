import { DriversRepository } from '@/repositories/drivers-repository'
import { Driver } from '@prisma/client'

interface GetAllDriversUseCaseResponse {
  drivers: Driver[]
}

export class GetAllDriversUseCase {
  constructor(private driversRepository: DriversRepository) {}

  async execute(): Promise<GetAllDriversUseCaseResponse> {
    const drivers = await this.driversRepository.findAll()

    return {
      drivers,
    }
  }
}
