import { prisma } from '@/lib/prisma'
import { Prisma, Vehicle } from '@prisma/client'
import { VehiclesRepository } from '../vehicles-repository'

export class PrismaVehiclesRepository implements VehiclesRepository {
  async create(data: Prisma.VehicleCreateInput): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.create({
      data,
    })

    return vehicle
  }

  async findById(id: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id,
      },
    })

    return vehicle
  }

  async findByPlate(plate: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        plate,
      },
    })

    return vehicle
  }

  async findAll(): Promise<Vehicle[]> {
    const vehicles = await prisma.vehicle.findMany()

    return vehicles
  }

  async findByColorAndBrand(color: string, brand: string): Promise<Vehicle[]> {
    const vehicles = await prisma.vehicle.findMany({
      where: {
        color,
        brand,
      },
    })

    return vehicles
  }

  async save(
    id: string,
    plate: string,
    color: string,
    brand: string,
  ): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.update({
      where: {
        id,
      },
      data: {
        plate,
        color,
        brand,
      },
    })

    return vehicle
  }

  async delete(id: string): Promise<void> {
    await prisma.driver.delete({
      where: {
        id,
      },
    })
  }

  async updateAvailable(id: string, is_available: boolean): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.update({
      where: {
        id,
      },
      data: {
        is_available,
      },
    })

    return vehicle
  }
}
