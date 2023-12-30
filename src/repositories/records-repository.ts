import { Prisma, VehicleRecord } from '@prisma/client'

export interface RecordsRepository {
  create(data: Prisma.VehicleRecordUncheckedCreateInput): Promise<VehicleRecord>
  updateFinalizedDate(id: string): Promise<VehicleRecord | null>
  findById(id: string): Promise<VehicleRecord | null>
  findAll(): Promise<VehicleRecord[]>
  findByDriverId(id: string): Promise<VehicleRecord[]>
  findByCurrentDriverRecords(driverId: string): Promise<boolean>
}
