import { useState } from "react"

import { entryProperties } from "../../../types";

export default function OrderEntry (props: entryProperties) {

    const percentageColors = {
        background: `linear-gradient(to right, ${props.colorOn} ${100 * (props.sumUpTo / props.totalAmount)}%, ${props.colorOff} ${100 * ((props.sumUpTo - props.totalAmount) / props.totalAmount)}%)`,
        color: props.colorText,
        width: '33%'
    }

    const leftTextStyle = {
        color: props.colorOn,
        width: '33%'
    }

    const middleTextStyle = {
        color: props.colorText,
        width: '33%'
    }

    return (
    <tr>
        <td style={leftTextStyle}>{props.price.toFixed(2)}</td>
        <td style={middleTextStyle}>{props.amount.toFixed(2)}</td>
        <td style={percentageColors}>{props.sumUpTo.toFixed(2)}</td>
    </tr>)
}