import { RecordsRepository } from '@/repositories/records-repository'
import { VehicleRecord } from '@prisma/client'

interface GetRecordsUseCaseResponse {
  records: VehicleRecord[]
}

export class GetRecordsUseCase {
  constructor(private recordsRepository: RecordsRepository) {}

  async execute(): Promise<GetRecordsUseCaseResponse> {
    const records = await this.recordsRepository.findAll()

    return {
      records,
    }
  }
}
