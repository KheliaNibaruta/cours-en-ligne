import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href={""}>
            <Image 
                className="space-y-0"
                src="/Sonitics.png"
                width={130}
                height={130}
                alt="logo"
            />
        </Link>
    </div>
  )
}

export default Logo