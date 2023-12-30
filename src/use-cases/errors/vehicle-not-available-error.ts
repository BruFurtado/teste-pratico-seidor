export class VehicleNotAvailableError extends Error {
  constructor() {
    super('Vehicle not available')
  }
}
