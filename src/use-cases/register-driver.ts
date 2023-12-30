import { DriversRepository } from '@/repositories/drivers-repository'
import { NameAlreadyExistsError } from './errors/name-already-exists-error'
import { Driver } from '@prisma/client'

interface RegisterDriverUseCaseRequest {
  name: string
}

interface RegisterDriverUseCaseResponse {
  driver: Driver
}

export class RegisterDriverUseCase {
  constructor(private driversRepository: DriversRepository) {}

  async execute({
    name,
  }: RegisterDriverUseCaseRequest): Promise<RegisterDriverUseCaseResponse> {
    const driverWithSameName = await this.driversRepository.findByName(name)

    if (driverWithSameName) {
      throw new NameAlreadyExistsError()
    }

    const driver = await this.driversRepository.create({
      name,
    })

    return {
      driver,
    }
  }
}
