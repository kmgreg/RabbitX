import { useState } from "react"

import { entryProperties } from "../../../types";

export default function OrderEntry (props: entryProperties) {

    const percentageColors = {
        background: `linear-gradient(to right, ${props.colorOn} ${props.sumUpTo / props.totalAmount}%, ${props.colorOff} ${(props.sumUpTo - props.totalAmount) / props.totalAmount}%)`
    }

    return (
    <tr>
        <td>{props.price}</td>
        <td>{props.amount}</td>
        <td style={percentageColors}>{props.sumUpTo}</td>
    </tr>)
}