import { Prisma, Driver } from '@prisma/client'

export interface DriversRepository {
  create(data: Prisma.DriverCreateInput): Promise<Driver>
  findById(id: string): Promise<Driver | null>
  findAll(): Promise<Driver[]>
  findByName(name: string): Promise<Driver | null>
  filterByName(name: string): Promise<Driver[]>
  save(id: string, name: string): Promise<Driver | null>
  delete(id: string): Promise<void>
}
