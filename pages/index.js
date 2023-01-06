
import { Inter } from '@next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:'center'}}>Welcome to My First Next App</h1>
    </>
  )
}
