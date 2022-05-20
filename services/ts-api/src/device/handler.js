import λ from 'ts-core/src/lambda'
import * as deviceService from './fetch-devices'

export const fetchDevices = λ(deviceService.fetchDevices)
