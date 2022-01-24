import React, { useState } from 'react'

import Card from './Card/Card'
import ExpenseChart from './ExpenseChart'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
export default function Expenses(props) {
    // const edata = props.edata;

    const [year, setyear] = useState("2020")

    const selectedfun = (year) => {
        setyear(year)
        console.log(year);

    }
    const newfilter = props.edata.filter((elem) => {
        return elem.date.getFullYear().toString() === year;

    })

    const msgstyle = {
        color: "white",
        textTransform: "capitalize",
        textShadow: "1.5px 1.5px 1.5px blue"
    };

    // var afterif;
    // if(newfilter.length===0)
    // {
    //     afterif=<h1 style={msgstyle}>no item is availabel</h1> 
    // }

    return (
        <Card>
            <ExpensesFilter selectfun={selectedfun} yr={year} />
            <ExpenseChart datafilter={newfilter} />


            {/* //condition rendring(if not value avail) 1st METHOD:- */}
            {/* {newfilter.length === 0 ? <h1 style={msgstyle}>no item is availabel</h1> :
                newfilter.map((elem) => {

                    return (<ExpenseItem key={elem.id} name={elem.name} amount={elem.amount} date={elem.date} />);
                })
            } */}

            {/* //condition rendring(if not value avail) 2nd METHOD:- */}
            {newfilter.length === 0 && <h1 style={msgstyle}>no item is availabel</h1>}
            {newfilter.map((elem) => {
                return (<ExpenseItem key={elem.id} name={elem.name} amount={elem.amount} date={elem.date} />)
            })}

            {/* //condition rendring(if not value avail) 3rd METHOD:- */}
            {/* {afterif}
            {newfilter.map((elem) => {
                return (<ExpenseItem key={elem.id} name={elem.name} amount={elem.amount} date={elem.date} />)
            })} */}
        </Card>
    )
}
