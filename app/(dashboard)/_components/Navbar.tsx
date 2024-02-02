import React from 'react'
import MobileSidebar from './MobileSidebar'
import NavbarRoutes from '@/components/NavbarRoutes'

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bbg-white shadow-xl'>
        <MobileSidebar />
        <NavbarRoutes />
    </div>
  )
}

export default Navbar