import React from 'react'
import { BsDot } from "react-icons/bs";

const TransactionsList = ({key, icon, Bgcolor, time, description, amount , category}) => {
  return (
    <div>
         <div key={key} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md" >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 flex items-center justify-center text-white rounded-full ${Bgcolor}`}> 
                  {icon}
                </div>
                <div>
                  <p className="text-base font-medium text-[#273240] pb-1 capitalize">{category}</p>
                  <p className="text-xs text-[#404852] font-normal flex items-center gap-1">
                    {time} <BsDot className="text-xl text-gray-400"/> {description}
                  </p>
                </div>
              </div>
              <p className="text-base font-semibold text-[#273240]">{amount}</p>
            </div>
    </div>
  )
}

export default TransactionsList