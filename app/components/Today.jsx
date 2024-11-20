// components/TransactionList.js
import { HiDotsHorizontal } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";
import { FaBusSimple } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import TransactionsList from "../layer/TransactionsList";


const Today =()=> {
    const transactions = [
      {
        icon: <HiShoppingCart />, // Using emojis to represent icons
        category: "Grocery",
        time: "5:12 PM",
        description: "Shopping at the market",
        amount: "-326.800",
        color: "bg-blue-400",
      },
      {
        icon: <FaBusSimple />,
        category: "Transportation",
        time: "5:12 PM",
        description: "Taking a public bus",
        amount: "-15.000",
        color: "bg-purple-500",
      },
      {
        icon: <MdHome />,
        category: "Housing",
        time: "5:12 PM",
        description: "Paying electricity bill",
        amount: "-185.750",
        color: "bg-orange-500",
      },
    ];
  
    return (
      <div>
       <div className='flex justify-between items-center border-b pb-5 border-[#979797]'>
          <h3 className='font-semibold text-3xl text-[#262A41]'>Today</h3>
          <HiDotsHorizontal className='text-3xl text-[#9c9c9c]'/>
          </div>
        <div className="space-y-4 pt-6">
          {transactions.map((item, index) => (
           <TransactionsList
            key={index}
            Bgcolor={item.color}
            icon={item.icon}
            category={item.category}
            time={item.time}
            description={item.description}
            amount={item.amount}
            />
          ))}
        </div>
      </div>
    );
  }

  export default Today
  