import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>404 - Página no encontrada</h1>
    <Link href="/">
      <a>
        Regresar
      </a>
    </Link>
  </>
}