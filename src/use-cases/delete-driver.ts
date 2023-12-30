import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { DriversRepository } from '@/repositories/drivers-repository'

interface DeleteDriverUseCaseRequest {
  driverId: string
}

export class DeleteDriverUseCase {
  constructor(private driversRepository: DriversRepository) {}

  async execute({ driverId }: DeleteDriverUseCaseRequest): Promise<void> {
    const driver = await this.driversRepository.findById(driverId)

    if (!driver) {
      throw new ResourceNotFoundError()
    }

    await this.driversRepository.delete(driverId)
  }
}
