export interface OrderData {
    price: number,
    size: number
}

export type TableProps = {
    colorOn: string,
    colorOff: string,
    colorText: string,
    orders: Array<OrderData>,
    reverseSum: boolean
}

export type entryProperties = {
    colorOn: string,
    colorOff: string,
    colorText: string,
    price: number,
    amount: number,
    totalAmount: number,
    sumUpTo: number
}