import { RecordsRepository } from '@/repositories/records-repository'
import { VehicleRecord } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { VehiclesRepository } from '@/repositories/vehicles-repository'

interface FinalizedRecordUseCaseRequest {
  id: string
}

interface FinalizedRecordUseCaseResponse {
  record: VehicleRecord
}

export class FinalizedRecordUseCase {
  constructor(
    private recordsRepository: RecordsRepository,
    private vehiclesRepository: VehiclesRepository,
  ) {}

  async execute({
    id,
  }: FinalizedRecordUseCaseRequest): Promise<FinalizedRecordUseCaseResponse> {
    const record = await this.recordsRepository.findById(id)

    if (!record) {
      throw new ResourceNotFoundError()
    }

    await this.recordsRepository.updateFinalizedDate(id)

    await this.vehiclesRepository.updateAvailable(record.vehicle_id, true)

    return {
      record,
    }
  }
}
