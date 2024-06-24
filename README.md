This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It was designed to be a running environment for the RabbitX Websocket Component. 
Write up/thoughts at the bottom.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Write Up

## Approach
For this, I decided upon a client side use of sockets as I feared a server side (e.g. there’s a GET Table endpoint that the client uses that the server constructs with its own socket client) would   potentially lead to an accidental DDOS attack (although looking back I maybe should have so it would only be 1 socket connection vs. a lot of them).

Otherwise, it’s a fairly bog standard example of useEffect using the Centrifuge SDK. Client connects to the channel, and starts building the table.

## Challenges
Main one was deciding whether to use client or server side socket connection. Looking back client side may have been the wrong decision.

## Improvements
    1. Investigate swapping to a server side connection to the orderbook
    2. Improve socket driver
    3. Better understand how to better use the sequence value