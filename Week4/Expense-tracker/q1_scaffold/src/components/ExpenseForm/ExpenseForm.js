import React from "react";
import styles from "./ExpenseForm.module.css";
import { useState } from "react";

export default function ExpenseForm () {
  // Create state or ref for the inputs here
  const [text,setText] = useState("");
  const [amount,setAmount] = useState("");
   
 const handleSubmit = (e)=>{
    e.preventDefault(); //prevent refresh
    console.log("Transaction added " , {text, amount});
    //clear input fields
    setText("");
    setAmount("");
  }

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          value={text} //controlled input
          onChange={(e)=>setText(e.target.value)} //here we are updating the state
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          value={amount} // Controlled input
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        {/* {added type="submit"} */}
        <button className={styles.submitBtn} type="submit">Add Transaction</button>
      </form>
    );
  }
