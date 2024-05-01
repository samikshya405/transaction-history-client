import React, { useEffect, useState } from 'react'
import AddExpense from '../Component/AddExpense'
import { getTransaction } from '../utilis/axioshelper'
import Transaction from '../Component/Transaction'

const Dashboard = () => {
  const [transactionList, settransactionList] = useState([])

  const getData=async()=>{
   const response= await getTransaction()
   console.log(response.data)
   settransactionList(response.data)
   

  }
  useEffect(()=>{
    getData()

  },[])
  return (
    <div className='container w-75 m-auto'>

      <AddExpense getData={getData}/>
      <Transaction transactionList={transactionList}  />
    </div>
  )
}

export default Dashboard