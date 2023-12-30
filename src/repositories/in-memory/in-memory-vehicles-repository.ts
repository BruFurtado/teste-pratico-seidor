import { Prisma, Vehicle } from '@prisma/client'
import { VehiclesRepository } from '../vehicles-repository'

export class InMemoryVehiclesRepository implements VehiclesRepository {
  public items: Vehicle[] = []

  async create(data: Prisma.VehicleCreateInput) {
    const vehicle = {
      id: 'vehicle-1',
      plate: data.plate,
      color: data.color,
      brand: data.brand,
      is_available: true,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(vehicle)

    return vehicle
  }

  async findById(id: string) {
    const vehicle = this.items.find((item) => item.id === id)

    if (!vehicle) {
      return null
    }

    return vehicle
  }

  async findByPlate(plate: string) {
    const vehicle = this.items.find((item) => item.plate === plate)

    if (!vehicle) {
      return null
    }

    return vehicle
  }

  async findAll() {
    return this.items
  }

  async findByColorAndBrand(color: string, brand: string) {
    const vehicles = this.items.filter(
      (item) => item.color === color && item.brand === brand,
    )

    return vehicles
  }

  async save(id: string, plate: string, color: string, brand: string) {
    const vehicle = this.items.find((item) => item.id === id)

    if (!vehicle) {
      return null
    }

    vehicle.plate = plate
    vehicle.color = color
    vehicle.brand = brand

    return vehicle
  }

  async delete(id: string) {
    const vehicleIndex = this.items.findIndex((item) => item.id === id)

    if (vehicleIndex !== -1) {
      this.items.splice(vehicleIndex, 1)
    }
  }

  async updateAvailable(id: string, is_available: boolean) {
    const vehicle = this.items.find((item) => item.id === id)

    if (!vehicle) {
      return null
    }

    vehicle.is_available = is_available

    return vehicle
  }
}
