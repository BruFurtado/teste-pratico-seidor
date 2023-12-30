import { Prisma, VehicleRecord } from '@prisma/client'
import { RecordsRepository } from '../records-repository'

export class InMemoryRecordsRepository implements RecordsRepository {
  public items: VehicleRecord[] = []

  async create(data: Prisma.VehicleRecordUncheckedCreateInput) {
    const record = {
      id: 'record-1',
      started_at: new Date(),
      finalized_at: null,
      user_id: data.user_id,
      driver_id: data.driver_id,
      vehicle_id: data.vehicle_id,
      reason_use: data.reason_use,
    }

    this.items.push(record)

    return record
  }

  async findById(id: string) {
    const record = this.items.find((item) => item.id === id)

    if (!record) {
      return null
    }

    return record
  }

  async findAll() {
    return this.items
  }

  async findByDriverId(id: string) {
    const records = this.items.filter((item) => item.driver_id === id)

    return records
  }

  async findByCurrentDriverRecords(driverId: string) {
    const doesCurrentDriverRecords = this.items.find(
      (item) => item.driver_id === driverId && item.finalized_at === null,
    )

    if (doesCurrentDriverRecords) {
      return true
    }

    return false
  }

  async updateFinalizedDate(id: string) {
    const record = this.items.find((item) => item.id === id)

    if (!record) {
      return null
    }

    record.finalized_at = new Date()

    return record
  }
}
