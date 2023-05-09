import Image from 'next/image'
import Router from 'next/router'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav.js'
import { Menu } from '@/components/menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <Menu />
    </div>
  )
}
