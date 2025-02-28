import "./App.css";
import React from "react";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import Transaction from "./components/Transaction/Transaction";
import ExpenseList from "./components/ExpenseList/ExpenseList";

//changed to functional component
export default function App(){
  // Create state for the expenses here
  // const [expenses, setExpenses] = useState([]);
  const [expenses, setExpenses] = useState([
    { id: 1, text: "Salary", amount: 5000 },
    { id: 2, text: "Groceries", amount: -200 },
    { id: 3, text: "Rent", amount: -15000 },
  ]); //  Used an array
  const [income,setIncome] = useState(75000);

   // Function to add a new transaction
   const addTransaction = (text, amount) => {
    const newTransaction = {
      id: expenses.length + 1,  // Unique ID
      text,
      amount: parseFloat(amount), // Ensure it's a number
    };

    setExpenses(prevExpenses => [...prevExpenses, newTransaction]); // ✅ Correct way to update state
  };
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm addTransaction={addTransaction}/>
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
            <ExpenseInfo income={income} expenses={expenses}/>
            <ExpenseList transactions={expenses}/> {/* Passing transactions */}
          </div>
        </div>
      </>
    );
  }

