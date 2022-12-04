import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoIgnite from '../assets/ignite_simbol.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <img src={logoIgnite.src} alt=""></img>
      </header>

      <Component {...pageProps} />
    </div>
  )
}
