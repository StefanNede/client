// top level file that then renders all the other files
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}