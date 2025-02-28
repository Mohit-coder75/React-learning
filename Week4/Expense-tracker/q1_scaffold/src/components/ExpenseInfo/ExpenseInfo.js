import React from "react";
import styles from "./ExpenseInfo.module.css";

//// It takes two props: income and expenses (as an array)
export default function ExpenseInfo ({income, expenses}) {
   // Calculate total expenses by summing negative values
   const totalExpense = expenses.filter(expense => expense.amount < 0) // Only negative values (expenses)
   .reduce((acc, expense) => acc + Math.abs(expense.amount), 0); // Get absolute sum

   const balance = income - totalExpense;

    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${balance.toFixed(2)}</h1>{/* Grand total should be displayed here */}
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${income.toFixed(2)}
            </p>{/*Total Profit Amount should be displayed here */}
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${totalExpense.toFixed(2)}
            </p>{/* Total expense amount should be displayed here */}
          </div>
        </div>
      </div>
    );
  }

