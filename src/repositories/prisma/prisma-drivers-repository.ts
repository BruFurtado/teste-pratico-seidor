import { prisma } from '@/lib/prisma'
import { Prisma, Driver } from '@prisma/client'
import { DriversRepository } from '../drivers-repository'

export class PrismaDriversRepository implements DriversRepository {
  async findAll(): Promise<Driver[]> {
    const drivers = await prisma.driver.findMany()

    return drivers
  }

  async save(id: string, name: string): Promise<Driver> {
    const driver = await prisma.driver.update({
      where: {
        id,
      },
      data: {
        name,
      },
    })

    return driver
  }

  async delete(id: string): Promise<void> {
    await prisma.driver.delete({
      where: {
        id,
      },
    })
  }

  async create(data: Prisma.DriverCreateInput) {
    const driver = await prisma.driver.create({
      data,
    })

    return driver
  }

  async findByName(name: string): Promise<Driver | null> {
    const driver = await prisma.driver.findUnique({
      where: {
        name,
      },
    })

    return driver
  }

  async filterByName(name: string): Promise<Driver[]> {
    const driver = await prisma.driver.findMany({
      where: {
        name: {
          contains: name
        },
      },
    })

    return driver
  }

  async findById(id: string): Promise<Driver | null> {
    const driver = await prisma.driver.findUnique({
      where: {
        id,
      },
    })

    return driver
  }
}
