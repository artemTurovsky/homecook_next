
import localFont from 'next/font/local'
import { Rubik } from 'next/font/google'

const rubikFont = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap'
})

const blox2Font = localFont({
  src: '../assets/fonts/Blox2.ttf',
  variable: '--font-blox2',
  display: 'swap'

})

const FONTS_CLASS_NAME = `${rubikFont.variable} ${blox2Font.variable}`

export { FONTS_CLASS_NAME }
