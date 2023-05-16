import Link from 'next/link'
import React from 'react'

const NavComponent = () => {
  return (
    <>
    <nav className='m-5 h-16 sticky top-0'>
        <Link href='/#section-map'><button className='m-5'>Home</button></Link>
        <Link href='/#section-registrar'><button className='m-5'>Registrar</button></Link>
        <Link href='/#skaters'><button className='m-5'>Skaters</button></Link>
        <Link href='/#about'><button className='m-5'>About</button></Link> 
    </nav>
    </>
  )
}

export default NavComponent