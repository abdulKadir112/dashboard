import React from 'react'
import Container from '../layer/Container'
import AvatarGroup from './AvatarGroup'
import Image from 'next/image'
import graph from '../../public/graph.png'
import Today from './Today'
import OldTransactionList from './OldTransactionList'
import ExpenseChart from './ExpenseChart '

const ExpensesContent = () => {
  return (
    <div>
      <Container className={"flex gap-[100px] pt-[60px] pl-[100px]"}>
        <div>
          <div className='w-[510px] flex justify-between '>
            <div>
              <h2 className='font-semibold text-[40px] leading-[50px] text-[#979797]'>Expenses</h2>
              <p className='font-normal text-[#262A41] text-base pt-2.5'>01 - 25 March, 2020</p>
            </div>
            <AvatarGroup />
          </div>
          <Image src={graph} alt="graph" className='py-12' />
          <Today/>
          <OldTransactionList/>
        </div>
        <ExpenseChart/>
      </Container>

    </div>
  )
}

export default ExpensesContent