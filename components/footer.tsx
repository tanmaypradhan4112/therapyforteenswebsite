import React from 'react'
import { Link } from '@nextui-org/link'
export const Footer = () => {
  return (
    <div className='py-5 z-10'>
      <div>
        <div className='w-full flex items-center justify-center'>
          <img width="10% " src="img/TFTlogo.png" alt="" />
        </div>
        <div className='w-full flex items-center justify-center'>
          <p>© 2021: Therapy for Teens</p>
        </div>
      </div>
      <footer className='w-full flex items-center justify-center'>
        <div>
          <p>Please get in touch with the authorities if you are in a position where your life is under danger. These resources allow you to</p>

        </div>
        <Link
          className="flex items-center gap-1 px-1 text-current"
          href="/needhelp"
          title="Emergency resources"
        >
          <p className="text-danger">receive assistance.</p>
        </Link>
      </footer>
    </div>
  )
}
