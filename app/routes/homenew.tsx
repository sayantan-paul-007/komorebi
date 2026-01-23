import React from 'react'
import type { Route } from "./+types/homenew";
import Navbar from '~/components/Navbar';
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Komorebi: AI Resume Analyzer" },
    { name: "description", content: "Smart analysis for your future" },
  ];
}
const Homenew = () => {
  return (
    <main className='bg-komorebi-gradient min-h-screen pt-10'>
        <Navbar />
        <div>Homenew</div>
    </main>
  )
}

export default Homenew