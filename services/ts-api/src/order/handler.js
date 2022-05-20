import λ from 'ts-core/src/lambda'
import createOrderService from './'

const orderService = createOrderService()

export const service = λ(orderService)
