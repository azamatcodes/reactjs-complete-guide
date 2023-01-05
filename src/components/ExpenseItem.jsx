import './ExpenseItem.css'

export const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>January 5th 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  )
}
