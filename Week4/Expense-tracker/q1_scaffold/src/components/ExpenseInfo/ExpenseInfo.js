import React from "react";
import styles from "./ExpenseInfo.module.css";

//// It takes two props: income and expenses (as an array)
export default function ExpenseInfo ({income=0, expenses=0}) {
  //  // Calculate total expenses by summing negative values
  //  // Ensure all amounts are numbers before filtering
  //  const totalExpense = expenses
  //  .filter(expense => Number(expense.amount) < 0) // Convert to number
  //  .reduce((acc, expense) => acc + Math.abs(Number(expense.amount)), 0); 
  const balance = income - expenses; // Balance calculation is now correct
   console.log("Balance:", balance);
   console.log("Total Expense:", expenses);
   console.log("Income:", income);

    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${balance}</h1>{/* Grand total should be displayed here */}
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${income}
            </p>{/*Total Profit Amount should be displayed here */}
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${expenses}
            </p>{/* Total expense amount should be displayed here */}
          </div>
        </div>
      </div>
    );
  }

