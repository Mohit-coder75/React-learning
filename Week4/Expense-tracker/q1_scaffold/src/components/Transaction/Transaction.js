import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";



export default function Transaction ({expense,index,onEdit, onDelete}) {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentHoverIndex: null
  //   };
  // }
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);           // Toggle edit mode
  const [editedText, setEditedText] = useState(expense.text);  // For text update
  const [editedAmount, setEditedAmount] = useState(expense.amount); // For amount update

  const handleSave = () => {
    if (editedText.trim() === "" || isNaN(editedAmount)) return;
    onEdit(expense.id, editedText, editedAmount);
    setIsEditing(false);
  };
    return (
      <li
        // key={this.props.expense.id}
        key={expense.id}
        // className={`${styles.transaction} ${
        //   this.props.expense.amount > 0 ? styles.profit : styles.loss
        // }`}
        className={`${styles.transaction} ${expense.amount > 0 ? styles.profit : styles.loss}`}
        onMouseOver={() => setCurrentHoverIndex(index)}
        onMouseLeave={() => setCurrentHoverIndex(null)}
      >
        {/* //edit sectoin*/}
        <div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              placeholder="Description"
            />
            <input
              type="number"
              value={editedAmount}
              onChange={(e) => setEditedAmount(e.target.value)}
              placeholder="Amount"
            />
          </>
        ) : (
          <>{expense.text}</>
        )}
        </div>
        {/* {similary make changes} */}
        {/* <div>{expense.text}</div> */}
        <div className={styles.transactionOptions}>
          <div
            className={`${styles.amount} ${
              currentHoverIndex === index &&
              styles.movePrice
            }`}
          >
            ${expense.amount}
          </div>
          <div
            className={`${styles.btnContainer} ${
             currentHoverIndex === index && styles.active
            }`}
          >

            {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <>
              <div
                className={styles.edit}
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                <img src={EditImage} height="100%" alt="Edit" />
              </div>
              <div
                className={styles.delete}
                onClick={() => onDelete(expense.id)}
              >
                <img src={DeleteImage} height="100%" alt="Delete" />
              </div>
            </>
          )}
        </div>
        </div>
      </li>
    );
  
}
