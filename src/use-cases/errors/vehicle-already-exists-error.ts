export class VehicleAlreadyExistsError extends Error {
  constructor() {
    super('Plate already exists')
  }
}
