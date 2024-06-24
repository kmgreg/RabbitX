import { useState } from "react"
import OrderEntry from "./orderentry";
import { OrderData, TableProps} from "../../../types";

export default function  OrderTable(props: TableProps) {
    let total = 0;
    props.orders.forEach(orderData => {
        total += orderData.size;
    })
    let sum = 0;

    // quick sort the prices
    function partition (arr : Array<OrderData>, low: number, high: number) {
        let pivot  = arr[high].price;
        let i = low - 1;
  
        for (let j = low; j <= high - 1; j++) {
            if (arr[j].price < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            }
        }
  
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    // The main function that implements QuickSort
    function quickSort(arr : Array<OrderData>, low: number, high: number) {
        if (low < high) {
            // pi is the partitioning index, arr[pi] is now at the right place
            let pi = partition(arr, low, high);
  
            // Separately sort elements before partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    quickSort(props.orders, 0, props.orders.length - 1);

    const formattedOrders = props.orders.map(order => {
        sum += order.size;
        return OrderEntry({
            colorOn: props.colorOn,
            colorOff: props.colorOff,
            colorText: props.colorText,
            sumUpTo: sum,
            totalAmount: total,
            price: order.price,
            amount: order.size
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