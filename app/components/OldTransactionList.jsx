import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { IoFastFood } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import TransactionsList from '../layer/TransactionsList';

const OldTransactionList = () => {

    const transactions = [
        {
            id : 1,
            icon :<IoFastFood />,
            category : "Food and Drink",
            time : "7:30 PM",
            description : " Makan Steak",
            amount : "-156.000",
            color : "bg-[#DC3434]",
        },
        {
            id : 2,
            icon :<IoPlayCircle />,
            category : "Entertainment",
            time : "7:32 PM",
            description : " Nonton Bioskop",
            amount : "-35.200",
            color : "bg-[#4BA83D]",
        }
    ]

  return (
    <div className='py-14'>
        <div className='flex justify-between items-center border-b pb-5 border-[#979797]'>
          <h3 className='font-semibold text-3xl text-[#262A41]'>Monday, 23 March 2020</h3>
          <HiDotsHorizontal className='text-3xl text-[#9c9c9c]'/>
          </div>
          <div>
            {transactions.map((item, index)=>(
                <TransactionsList
                key={index}
                icon={item.icon}
                Bgcolor={item.color}
                time={item.time}
                description={item.description}
                amount={item.amount}
                category={item.category}
                />
            ))}
          </div>
    </div>
  )
}

export default OldTransactionList