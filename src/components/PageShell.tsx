import type { PropsWithChildren } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function PageShell({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
