import { prisma } from '@/lib/prisma'
import { Prisma, VehicleRecord } from '@prisma/client'
import { RecordsRepository } from '../records-repository'

export class PrismaRecordsRepository implements RecordsRepository {
  async create(
    data: Prisma.VehicleRecordUncheckedCreateInput,
  ): Promise<VehicleRecord> {
    const record = await prisma.vehicleRecord.create({
      data,
    })

    return record
  }

  async updateFinalizedDate(id: string): Promise<VehicleRecord> {
    const record = await prisma.vehicleRecord.update({
      where: {
        id,
      },
      data: {
        finalized_at: new Date(),
      },
    })

    return record
  }

  async findById(id: string): Promise<VehicleRecord | null> {
    const record = await prisma.vehicleRecord.findUnique({
      where: {
        id,
      },
    })

    return record
  }

  async findAll(): Promise<VehicleRecord[]> {
    const records = await prisma.vehicleRecord.findMany({
      include: {
        driver: true,
        vehicle: true,
      },
    })

    return records
  }

  async findByDriverId(id: string): Promise<VehicleRecord[]> {
    const record = await prisma.vehicleRecord.findMany({
      where: {
        driver_id: id,
      },
    })

    return record
  }

  async findByCurrentDriverRecords(driverId: string): Promise<boolean> {
    const doesCurrentDriverRecords = await prisma.vehicleRecord.findFirst({
      where: {
        driver_id: driverId,
        finalized_at: null,
      },
    })

    if (doesCurrentDriverRecords) {
      return true
    }

    return false
  }
}
