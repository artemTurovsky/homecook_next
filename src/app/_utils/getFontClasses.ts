
import localFont from 'next/font/local'
import { Rubik } from 'next/font/google'

const inter = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})

const getFontClasses = () => {

}
