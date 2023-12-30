import { Prisma, Driver } from '@prisma/client'
import { DriversRepository } from '../drivers-repository'

export class InMemoryDriversRepository implements DriversRepository {
  public items: Driver[] = []

  async create(data: Prisma.DriverCreateInput) {
    const driver = {
      id: 'driver-1',
      name: data.name,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(driver)

    return driver
  }

  async findByName(name: string) {
    const driver = this.items.find((item) => item.name === name)

    if (!driver) {
      return null
    }

    return driver
  }

  async filterByName(name: string) {
    const drivers = this.items.filter((item) => item.name.includes(name))

    return drivers
  }

  async findById(id: string) {
    const driver = this.items.find((item) => item.id === id)

    if (!driver) {
      return null
    }

    return driver
  }

  async findAll() {
    return this.items
  }

  async save(id: string, name: string) {
    const driver = this.items.find((item) => item.id === id)

    if (!driver) {
      return null
    }

    driver.name = name

    return driver
  }

  async delete(id: string): Promise<void> {
    const driverIndex = this.items.findIndex((item) => item.id === id)

    if (driverIndex !== -1) {
      this.items.splice(driverIndex, 1)
    }
  }
}
