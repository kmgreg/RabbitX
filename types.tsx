export interface OrderData {
    price: string,
    size: string
}

export type TableProps = {
    colorOn: string,
    colorOff: string,
    orders: Array<OrderData>,
    reverseSum: boolean
}

export type entryProperties = {
    colorOn: string,
    colorOff: string,
    price: string,
    amount: number,
    totalAmount: number,
    sumUpTo: number
}