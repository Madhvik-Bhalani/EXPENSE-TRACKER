import React, { useState } from 'react'
// import Card from './components/Card/Card'
import Expenses from './components/Expenses'
import './components/Expenses.css'
import NewExpenseAdd from './components/addNewItem/NewExpenseAdd'

export default function App() {

  const edata = [
    {
      name: "medical",
      amount: 15000,
      date: new Date(2019,10,21)
    },
    {
      name: "entataintment",
      amount: 3700,
      date: new Date(2019,8,18)
    },
    {
      name: "hotel",
      amount: 5800,
      date: new Date(2019,6,5)
    },
    {
      name: "test",
      amount: 5800,
      date: new Date(2021,6,3)
    },
    {
      name: "test2",
      amount: 5200,
      date: new Date(2021,4,19)
    },
    {

      name: "education",
      amount: 5000,
      date: new Date(2020,8,16)
    },
    {

      name: "water",
      amount: 3550,
      date: new Date(2020,7,27)
    },
    {

      name: "food",
      amount: 2100,
      date: new Date(2020,2,24)
    },
    {

      name: "education",
      amount: 5000,
      date: new Date(2020,1,31)
    },
    {
      name: "travel",
      amount: 6500,
      date: new Date(2022,10,30)
    },
    {
      name: "hospital",
      amount: 4000,
      date: new Date(2022,7,8)
    },
    {
      name: "rent",
      amount: 3500,
      date: new Date(2022,8,1)
    },
    {
      name: "electricity",
      amount: 3800,
      date: new Date(2022,5,22)
    },
  ]


  
  const [data, setdata] = useState(edata)

  const savedata = (data) => { //function to save data
    setdata((prevdata) => {
      return ([data, ...prevdata])

    })

  }
  
  return (

    <div className='expenses'>
      <NewExpenseAdd catchtoapp={savedata}/>
      <Expenses edata={data}  />
    </div>

  )
}
