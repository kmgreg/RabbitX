import { useState } from "react"
import OrderEntry from "./orderentry";
import { OrderData, TableProps} from "../../../types";

export default function  OrderTable(props: TableProps) {
    let sum = 0;
    const formattedOrders = props.orders.map(order => {
        sum += Number.parseFloat(order.size);
        return OrderEntry({
            colorOn: props.colorOn,
            colorOff: props.colorOff,
            sumUpTo: sum,
            totalAmount: 100,
            price: order.price,
            amount: Number.parseFloat(order.size)
        })
    });

    return <table>
        <tbody>
        <tr>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
        </tr>
        {formattedOrders}
        </tbody>
    </table>
}