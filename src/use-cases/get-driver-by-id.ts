import { DriversRepository } from '@/repositories/drivers-repository'
import { Driver } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetDriverUseCaseRequest {
  id: string
}

interface GetDriverUseCaseResponse {
  driver: Driver | null
}

export class GetDriverByIdUseCase {
  constructor(private driversRepository: DriversRepository) {}

  async execute({
    id,
  }: GetDriverUseCaseRequest): Promise<GetDriverUseCaseResponse> {
    const driver = await this.driversRepository.findById(id)

    if (!driver) {
      throw new ResourceNotFoundError()
    }

    return {
      driver,
    }
  }
}
