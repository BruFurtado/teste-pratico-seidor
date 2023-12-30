import { RecordsRepository } from '@/repositories/records-repository'
import { VehicleRecord } from '@prisma/client'
import { UsersRepository } from '@/repositories/users-repository'
import { DriversRepository } from '@/repositories/drivers-repository'
import { VehiclesRepository } from '@/repositories/vehicles-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { VehicleNotAvailableError } from './errors/vehicle-not-available-error'
import { DriverNotAbleNewRecordsError } from './errors/driver-not-able-new-records-error'

interface RegisterRecordUseCaseRequest {
  user_id: string
  vehicle_id: string
  driver_id: string
  reason_use: string
}

interface RegisterRecordUseCaseResponse {
  record: VehicleRecord
}

export class RegisterRecordUseCase {
  constructor(
    private recordsRepository: RecordsRepository,
    private usersRepository: UsersRepository,
    private driversRepository: DriversRepository,
    private vehiclesRepository: VehiclesRepository,
  ) {}

  async execute({
    driver_id,
    user_id,
    vehicle_id,
    reason_use,
  }: RegisterRecordUseCaseRequest): Promise<RegisterRecordUseCaseResponse> {
    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    const driver = await this.driversRepository.findById(driver_id)

    if (!driver) {
      throw new ResourceNotFoundError()
    }

    const vehicle = await this.vehiclesRepository.findById(vehicle_id)

    if (!vehicle) {
      throw new ResourceNotFoundError()
    }

    if (!vehicle.is_available) {
      throw new VehicleNotAvailableError()
    }

    const doesCurrentDriverRecords =
      await this.recordsRepository.findByCurrentDriverRecords(driver_id)

    if (doesCurrentDriverRecords) {
      throw new DriverNotAbleNewRecordsError()
    }

    const record = await this.recordsRepository.create({
      started_at: new Date(),
      vehicle_id,
      user_id,
      driver_id,
      reason_use,
    })

    await this.vehiclesRepository.updateAvailable(vehicle_id, false)

    return {
      record,
    }
  }
}
