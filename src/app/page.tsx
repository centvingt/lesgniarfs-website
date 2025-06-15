'use client'

// import 'reflect-metadata'

import Header from './components/header'

import Image from 'next/image'
import number1Cover from '@/assets/jpg/vignette-les-gniarfs-n1@600w.jpg'
import checkmark from '@/assets/svg/checkmark.svg'
import Link from 'next/link'

const lgContainer = 'max-w-5xl mx-auto p-[20px]'
const ulGrid = 'grid grid-cols-[20px_1fr] gap-[10px]'

const Checkmark = () => (
  <Image src={checkmark} alt="Checkmark" className="pt-[2px]" />
)

export default function Home() {
  return (
    <>
      <Header />
      <section className={`${lgContainer} `}>
        <div className="border-lg-acid-yellow bg-lg-medium-purple grid gap-[16px] rounded-[32px] border-16 p-[16px] sm:grid-cols-[2fr_3fr] lg:grid-cols-[5fr_7fr]">
          <Image
            src={number1Cover}
            alt="Détail de la couverture du numéro des Gniarfs"
            className="w-full rounded-[8px]"
          />
          <div>
            <h2 className="mt-[-6px]">Les Gniarfs #1</h2>
            <h3 className="mb-[18px]">(2003)</h3>
            <ul className="mb-[18px] grid gap-[18px]">
              <li className={ulGrid}>
                <Checkmark />
                Couverture couleur pelliculée toute en couleur
              </li>
              <li className={ulGrid}>
                <Checkmark />
                16 pages d’histoires hilarantes
              </li>
              <li className={ulGrid}>
                <Checkmark />
                Un vrai plaisir des yeux et des zigomatiques
              </li>
            </ul>
            <p className="h3 mb-[32px]">
              1&thinsp;€ + 3,50&thinsp;€ de frais de port
            </p>
            <span className="bg-lg-dark-purple inline-block rounded-[10px] p-[0_0_16px] hover:mt-[-2px] hover:p-[0_0_18px]">
              <Link
                href="https://buy.stripe.com/test_4gw6ow4oVgtcdLW7ss"
                target="_blank"
                rel="nofollow"
                className="bg-lg-acid-yellow font-heading text-lg-medium-purple active:bg-lg-light-blue relative rounded-[10px] p-[8px_16px] text-[24px] active:top-[4px]"
              >
                J’en veux&thinsp;!
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
