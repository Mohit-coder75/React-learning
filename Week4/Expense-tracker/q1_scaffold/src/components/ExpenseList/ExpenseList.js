import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";


//accepts transactionList as props 
export default function ExpenseList ({transactions, onDelete}) {
    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {/* Display transactions here */}
          {transactions && transactions.length > 0 ? (
          transactions.map((expense, index) => (
            <Transaction key={expense.id} expense={expense} index={index} onDelete={onDelete}/>
          ))
        ) : (
          <p>No transactions available</p> // Handle empty transactions
        )}
        </ul>
      </div>
    );
  
}
