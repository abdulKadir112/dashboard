import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black px-20 pt-16'>
      <div>
        <div className='relative w-[72px] h-[72px]'>
          <div className='w-[72px] h-[72px] rounded-xl overflow-hidden'>
            <Image src={profile} alt="profile" />
          </div>
          <div className='w-7 h-7 bg-red-600 text-white flex items-center justify-center text-sm rounded-full absolute -top-[15px] -right-[15px]'>4</div>
        </div>
        <h2 className='font-semibold text-3xl text-white pt-5 pb-1'>Samantha</h2>
        <p className='text-[#bebebe] text-lg font-normal'>samantha@email.com</p>
      </div>
      <ul className='pt-[117px] flex flex-col gap-[30px]'>
        <li><Link href={'/dashboard'} className='text-[#bebebe] text-[25px] leading-[35px] font-semibold hover:text-white transition-all duration-300'>Dashboard</Link></li>
        <li><Link href={'/expenses'} className='text-[#bebebe] text-[25px] leading-[35px] font-semibold hover:text-white transition-all duration-300'>Expenses</Link></li>
        <li><Link href={'/wallets'} className='text-[#bebebe] text-[25px] leading-[35px] font-semibold hover:text-white transition-all duration-300'>Wallets</Link></li>
        <li><Link href={'/summary'} className='text-[#bebebe] text-[25px] leading-[35px] font-semibold hover:text-white transition-all duration-300'>Summary</Link></li>
        <li><Link href={'/accounts'} className='text-[#bebebe] text-[25px] leading-[35px] font-semibold hover:text-white transition-all duration-300'>Accounts</Link></li>
        <li><Link href={'/settings'} className='text-[#bebebe] text-[25px] leading-[35px] font-semibold hover:text-white transition-all duration-300'>Settings</Link></li>
      </ul>
    </div>
  )
}

export default Navbar