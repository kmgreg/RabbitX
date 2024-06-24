'use client';

import { useState, useEffect } from 'react'

import Image from "next/image";
import Buypage from "./components/buypage";

export default function Home() {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);

  // NextJS workaround for using state
  return isClient ? <Buypage/> : 'Prerendered';
}
