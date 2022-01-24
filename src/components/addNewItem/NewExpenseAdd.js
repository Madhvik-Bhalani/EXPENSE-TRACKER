import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenseAdd.css'

function NewExpenseAdd(props) {

    const savetofirstparent = (data) => {  //fun
        const passapp = {
            ...data,
            id: Math.round(Math.random() * 10000)

        }
        props.catchtoapp(passapp)

    }
    return (
        <div className='new-expense'>
            <ExpenseForm onsave={savetofirstparent} />

        </div>
    )
}

export default NewExpenseAdd
