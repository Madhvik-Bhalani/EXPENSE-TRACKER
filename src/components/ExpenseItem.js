import React from 'react'
import '../App.css'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card  from './Card/Card'
export default function ExpenseItem(props) {
 

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description" style={{textTransform: "capitalize"}}><h2>{props.name}</h2></div>
            <div className="expense-item__price">&#x20B9;{props.amount}</div>
        </Card>
    )
}
