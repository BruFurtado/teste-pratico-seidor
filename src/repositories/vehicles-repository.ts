import { Prisma, Vehicle } from '@prisma/client'

export interface VehiclesRepository {
  create(data: Prisma.VehicleCreateInput): Promise<Vehicle>
  findById(id: string): Promise<Vehicle | null>
  findByPlate(plate: string): Promise<Vehicle | null>
  findAll(): Promise<Vehicle[]>
  findByColorAndBrand(color: string, brand: string): Promise<Vehicle[]>
  save(
    id: string,
    plate: string,
    color: string,
    brand: string,
  ): Promise<Vehicle | null>
  delete(id: string): Promise<void>
  updateAvailable(id: string, is_available: boolean): Promise<Vehicle | null>
}
