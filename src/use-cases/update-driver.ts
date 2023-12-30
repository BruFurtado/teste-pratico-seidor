import { DriversRepository } from '@/repositories/drivers-repository'
import { NameAlreadyExistsError } from './errors/name-already-exists-error'
import { Driver } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UpdateDriverUseCaseRequest {
  id: string
  name: string
}

interface UpdateDriverUseCaseResponse {
  driver: Driver | null
}

export class UpdateDriverUseCase {
  constructor(private driversRepository: DriversRepository) {}

  async execute({
    id,
    name,
  }: UpdateDriverUseCaseRequest): Promise<UpdateDriverUseCaseResponse> {
    const driver = await this.driversRepository.findById(id)

    if (!driver) {
      throw new ResourceNotFoundError()
    }

    const driverWithSameName = await this.driversRepository.findByName(name)

    if (driverWithSameName) {
      throw new NameAlreadyExistsError()
    }

    const updatedDriver = await this.driversRepository.save(id, name)

    return {
      driver: updatedDriver,
    }
  }
}
