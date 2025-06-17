'use client'

// import 'reflect-metadata'

import Header from './components/header'
import type { Metadata } from 'next'

import Link from 'next/link'
import Image from 'next/image'
import number1Cover from '@/assets/jpg/vignette-les-gniarfs-n1@600w.jpg'
import fragmentFanzine from '@/assets/jpg/fragments-fanzine.jpg'
import checkmark from '@/assets/svg/checkmark.svg'
import arrow from '@/assets/svg/ArrowRightCircleFill.svg'
import grilleInsta from '@/assets/jpg/grille-instagram.jpg'

const lgContainer = 'max-w-5xl mx-auto p-[20px]'
const ulGrid = 'grid grid-cols-[20px_1fr] gap-[10px]'

const Checkmark = () => (
  <Image src={checkmark} alt="Checkmark" className="w-full pt-[2px]" />
)
const Arrow = () => (
  <Image src={arrow} alt="Checkmark" className="w-full pt-[4px]" />
)

export const metadata: Metadata = {
  title: 'Les Gniarfs – La BD que vous devez lire à tout prix !',
  description:
    'Tout ce que vous vouliez savoir sur les Gniarfs sans oser le demander : où les lire ? quand les lire ? pourquoi les lire ?',
}

export default function Home() {
  return (
    <>
      <Header />
      <section className={`${lgContainer} `}>
        <div className="bg-lg-acid-yellow text-lg-dark-purple grid items-center overflow-hidden rounded-[32px] md:grid-cols-2 lg:grid-cols-[2fr_1fr]">
          <Image
            src={fragmentFanzine}
            alt="Fragments fanzine"
            className="aspect-[2/1] h-full w-full object-cover object-right md:order-1 md:aspect-square"
          />
          <div className="p-[16px]">
            <h2 className="uppercase">Ils sont dans Fragments...</h2>
            <h3>Le bon fanzine</h3>
            <ul className="my-[18px] grid gap-[18px]">
              <li className={ulGrid}>
                <Arrow />
                <p>
                  <Link
                    href="https://fragments-fanzine.fr/le-numero-2-est-enfin-disponible/"
                    target="_blank"
                    rel="nofollow"
                    className="hover:text-lg-medium-purple font-[600] underline"
                  >
                    Numéro 2, “20 ans plus tard” (2024)
                  </Link>
                </p>
              </li>
              <li className={ulGrid}>
                <Arrow />
                <p>
                  <Link
                    href="https://fragments-fanzine.fr/le-numero-3-a-enfin-pointe-le-bout-de-son-nez-pour-renifler/"
                    target="_blank"
                    rel="nofollow"
                    className="hover:text-lg-medium-purple font-[600] underline"
                  >
                    Numéro 3, “L’origine des odeurs” (2025)
                  </Link>
                </p>
              </li>
              <li className={ulGrid}>
                <Arrow />
                <p>
                  <Link
                    href="https://fragments-fanzine.fr/le-numero-4-parfait-pour-lete/"
                    target="_blank"
                    rel="nofollow"
                    className="hover:text-lg-medium-purple font-[600] underline"
                  >
                    Numéro 4, “De la douceur à la violence” (2025)
                  </Link>
                </p>
              </li>
            </ul>
            <h3 className="mb-[32px]">Trois ou quatre numéros par an</h3>
            <span className="bg-lg-dark-purple inline-block rounded-[10px] p-[0_0_16px] hover:mt-[-2px] hover:p-[0_0_18px]">
              <Link
                href="https://fragments-fanzine.fr/"
                target="_blank"
                rel="nofollow"
                className="bg-lg-night-blue font-heading text-lg-acid-yellow active:bg-lg-light-blue border-lg-dark-purple relative rounded-[10px] border-2 p-[8px_16px] text-[24px] active:top-[6px]"
              >
                Consulter le site
              </Link>
            </span>
          </div>
        </div>
      </section>
      <section className={`${lgContainer} `}>
        <div className="bg-lg-acid-yellow text-lg-dark-purple grid items-center overflow-hidden rounded-[32px] md:grid-cols-2 lg:grid-cols-[1fr_2fr]">
          <Image
            src={grilleInsta}
            alt="Page Instagram des Gniarfs"
            className="aspect-[2/1] h-full w-full object-cover md:aspect-square"
          />
          <div className="p-[16px]">
            <h2 className="uppercase">... mais aussi sur Insta</h2>
            <h3>Des strips à gogo&thinsp;!</h3>
            <ul className="my-[18px] grid gap-[18px]">
              <li className={ulGrid}>
                <Arrow />
                <p>
                  Des histoires de quatre cases à <em>scroller</em> dans le
                  métro, au boulot ou avant de faire dodo
                </p>
              </li>
              <li className={ulGrid}>
                <Arrow />
                <p>
                  Des nouvelles régulières du monde des Gniarfs tel qu’il va
                </p>
              </li>
              <li className={ulGrid}>
                <Arrow />
                <p>
                  Des vidéos et des croquis de Gniarfs à consommer sans compter
                </p>
              </li>
            </ul>

            <h3 className="mb-[32px]">
              <Link
                href="https://www.instagram.com/lesgniarfs.120.design/"
                target="_blank"
                rel="nofollow"
                className="hover:text-lg-medium-purple font-[600] underline"
              >
                @lesgniarfs.120.design
              </Link>
            </h3>
            <span className="bg-lg-dark-purple inline-block rounded-[10px] p-[0_0_16px] hover:mt-[-2px] hover:p-[0_0_18px]">
              <Link
                href="https://buy.stripe.com/14AdR9deX83VbPJe4B5EY00"
                target="_blank"
                rel="nofollow"
                className="bg-lg-night-blue font-heading text-lg-acid-yellow active:bg-lg-light-blue border-lg-dark-purple relative rounded-[10px] border-2 p-[8px_16px] text-[24px] active:top-[6px]"
              >
                Je m’abonne&thinsp;!
              </Link>
            </span>
          </div>
        </div>
      </section>
      <section className={`${lgContainer} `}>
        <div className="border-lg-acid-yellow bg-lg-medium-purple grid gap-[16px] rounded-[32px] border-16 p-[16px] sm:grid-cols-[2fr_3fr] lg:grid-cols-[5fr_7fr]">
          <Image
            src={number1Cover}
            alt="Détail de la couverture du numéro des Gniarfs"
            className="h-full w-full rounded-[8px]"
          />
          <div>
            <h2 className="mt-[-6px]">Les Gniarfs #1</h2>
            <h3 className="mb-[18px]">(2003)</h3>
            <ul className="mb-[18px] grid gap-[18px]">
              <li className={ulGrid}>
                <Checkmark />
                Toujours disponible, il suffit de le commander&thinsp;!
              </li>
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
            <h3 className="mb-[32px]">
              1&thinsp;€ + 3,50&thinsp;€ de frais de port
            </h3>
            <span className="bg-lg-dark-purple inline-block rounded-[10px] p-[0_0_16px] hover:mt-[-2px] hover:p-[0_0_18px]">
              <Link
                href="https://buy.stripe.com/14AdR9deX83VbPJe4B5EY00"
                target="_blank"
                rel="nofollow"
                className="bg-lg-acid-yellow font-heading text-lg-medium-purple border-lg-dark-purple active:bg-lg-light-blue relative rounded-[10px] border-2 p-[8px_16px] text-[24px] active:top-[6px]"
              >
                J’en veux un&thinsp;!
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
