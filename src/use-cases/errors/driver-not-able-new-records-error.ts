export class DriverNotAbleNewRecordsError extends Error {
  constructor() {
    super('This driver is already using a vehicle')
  }
}
