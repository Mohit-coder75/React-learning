import "./App.css";
import React from "react";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";

//changed to functional component
export default function App(){
  // Create state for the expenses here
  // const [expenses, setExpenses] = useState([]);
  const [expenses, setExpenses] = useState(500);
  const [income,setIncome] = useState(75000);
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm />
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
            <ExpenseInfo income={income} expenses={expenses}/>
          </div>
        </div>
      </>
    );
  }

