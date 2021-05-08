import Head from 'next/head'
import React from 'react'
import { CardFuel } from '../../components/CardFuel';
import { DashNavbar } from '../../components/DashNavbar';

export default function Fuel() {
  return (
    <div>

      <Head>
        <title>Fuel | Vruum</title>
      </Head>

      <DashNavbar color="var(--green)"/>
      <CardFuel />

    </div>
  );
}