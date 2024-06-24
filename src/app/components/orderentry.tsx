import { useState } from "react"

import { entryProperties } from "../../../types";

export default function OrderEntry (props: entryProperties) {

    const percentageColors = {
        background: `linear-gradient(to right, ${props.colorOn} ${100 * (props.sumUpTo / props.totalAmount)}%, ${props.colorOff} ${100 * ((props.sumUpTo - props.totalAmount) / props.totalAmount)}%)`,
        color: props.colorText
    }

    const leftTextStyle = {
        color: props.colorOn
    }

    const middleTextStyle = {
        color: props.colorText
    }

    return (
    <tr>
        <td style={leftTextStyle}>{props.price}</td>
        <td style={middleTextStyle}>{props.amount}</td>
        <td style={percentageColors}>{props.sumUpTo}</td>
    </tr>)
}