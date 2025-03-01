import "./App.css";
import React from "react";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

//changed to functional component
export default function App(){
  // Create state for the expenses here
  // const [expenses, setExpenses] = useState([]);
  const [expenses, setExpenses] = useState([]); //  Used an array
  const [income,setIncome] = useState();

   // Dynamically calculate total income and total expense
   const totalIncome = expenses
   .filter((expense) => expense.amount > 0) // Only positive values (income)
   .reduce((acc, expense) => acc + expense.amount, 0); // Sum income

 const totalExpense = expenses
   .filter((expense) => expense.amount < 0) // Only negative values (expenses)
   .reduce((acc, expense) => acc + Math.abs(expense.amount), 0); // Sum absolute expenses

 const balance = totalIncome - totalExpense; // Calculate balance
   // Function to add a new transaction
   const addTransaction = (text, amount) => {
    const newTransaction = {
      id: expenses.length + 1,  // Unique ID
      text,
      amount: parseFloat(amount), // Ensure it's a number
    };

    setExpenses(prevExpenses => [...prevExpenses, newTransaction]); // ✅ Correct way to update state
  };
   // Function to delete a transaction
   const deleteTransaction = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
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
            <ExpenseInfo income={totalIncome} expenses={totalExpense}/>
            <ExpenseList transactions={expenses} onDelete={deleteTransaction}/> {/* Passing transactions */}
          </div>
        </div>
      </>
    );
  }

