import React from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </Card>
  )
}

export default Expenses
