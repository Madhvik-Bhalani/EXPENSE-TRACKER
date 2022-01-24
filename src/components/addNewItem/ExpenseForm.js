import React, { useState } from 'react'

import './ExpenseForm.css'
function ExpenseForm(props) {
    const [title, settitle] = useState("")
    const [amount, setamount] = useState("")
    const [date, setdate] = useState("")

    const titleHandler = (e) => {
        settitle(e.target.value)
    }
    const amountHandler = (e) => {
        setamount(e.target.value)
    }
    const dateHandler = (e) => {
        setdate(e.target.value)
    }

    // toggle button(cancel) for hide calender
    const [cancelstyle, setcancelstyle] = useState({ display: "none" })

    const toggle = () => {

        settogglecalender({ height: "0px", overflow: "hidden" })

        setcancelstyle({ display: "none" })
        setvisiable({ display: "none" })
        setvisabletwo({ display: "inline" })
    }

    const [togglecalender, settogglecalender] = useState({
        height: "0px",
        overflow: "hidden"
    })
    const submitHandler = (e) => {
        e.preventDefault();
        const addexpenseobj = {

            name: title,
            amount: +amount,
            date: new Date(date)
        }
        console.log(addexpenseobj.name);
        console.log(addexpenseobj.amount);
        console.log(addexpenseobj.date);
        props.onsave(addexpenseobj)
        setamount('')
        setdate('')
        settitle('')

        settogglecalender({ height: "0px", overflow: "hidden" })

        setvisiable({display:"none" })
        setcancelstyle({display:"none" })
        setvisabletwo({ display: "inline" })



    }

    // togglecal by addexpense button
    const togglecal = (e) => {
        e.preventDefault()
        settogglecalender({ height: "180px", overflow: "visible" })
        
        setcancelstyle({ display: "inline" })
        setvisiable({ display: " inline" })
        setvisabletwo({ display: "none" })
    }

    const [visiable, setvisiable] = useState({ display: "none" })
    const [visabletwo, setvisabletwo] = useState({})


    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls" style={togglecalender}>
                <div className="new-expense__control">
                    <label>title</label>
                    <input type="text" name="" value={title} id="" onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type="number" name="" id="" value={amount} onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" name="" id="" min="2019-01-01" max="2022-12-31" value={date} onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={toggle} style={cancelstyle}>Cancel</button>
                <button type='submit' style={visiable}>AddExpense</button>

                <button onClick={togglecal} style={visabletwo}>Click To Add</button>
            </div>
        </form>
    )
}
export default ExpenseForm
