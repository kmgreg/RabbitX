import { useState, useEffect } from "react"
import { Centrifuge } from 'centrifuge';


import OrderTable from './ordertable';
import { OrderData } from "../../../types";

type pubRes = [string, string];

export default function Buypage() {
    const [bidOrders, setBidOrders] = useState(new Map);
    const [askOrders, setAskOrders] = useState(new Map);
    const [doUpdate, setUpdate] = useState(false);
    const [sequence, setSequence] = useState(0);

    useEffect(() => {
        const centrifuge = new Centrifuge('wss://api.testnet.rabbitx.io/ws', {'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwIiwiZXhwIjo1MjYyNjUyMDEwfQ.x_245iYDEvTTbraw1gt4jmFRFfgMJb-GJ-hsU9HuDik", 'name': 'js'});
        const sub = centrifuge.newSubscription('orderbook:SOL-USD');

        sub.on('publication', function(ctx) {
            console.log(ctx.data);
            ctx.data.bids.forEach((bid : pubRes) => {
                if (bid[1] === '0') {
                    bidOrders.delete(bid[0]);
                } else {
                    bidOrders.set(bid[0], bid[1]);
                }
            });
            ctx.data.asks.forEach((ask : pubRes) => {
                if (ask[1] === '0') {
                    askOrders.delete(ask[0]);
                } else {
                    askOrders.set(ask[0], ask[1]);
                }
            });
            if (ctx.data.sequence != sequence + 1) {
                sub.unsubscribe();
                sub.subscribe();
            }
            setSequence(ctx.data.sequence);
            setBidOrders(bidOrders);
            setAskOrders(askOrders);
            setUpdate(!doUpdate);
        });

        // Trigger subscribe process.
        sub.subscribe();

        // Trigger actual connection establishement.
        centrifuge.connect();

        return () => {
            sub.unsubscribe();
            sub.removeAllListeners();
            centrifuge.disconnect();

        }
    })

    const bidOrderData : Array<OrderData> = [];
    bidOrders.forEach((val, key, map) => {
        bidOrderData.push({
            size: Number.parseFloat(val),
            price: Number.parseFloat(key)
        })
    })

    const askOrderData : Array<OrderData> = [];
    askOrders.forEach((val, key, map) => {
        askOrderData.push({
            size: Number.parseFloat(val),
            price: Number.parseFloat(key)
        })
    })


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <OrderTable colorOff='black' colorOn='red' colorText='black' orders={bidOrderData} reverseSum={false}></OrderTable>
        <OrderTable colorOff='black' colorOn='green' colorText='black' orders={askOrderData} reverseSum={true}></OrderTable>
        </main>
    )
  }