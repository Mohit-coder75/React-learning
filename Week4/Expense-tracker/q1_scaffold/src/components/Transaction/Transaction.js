import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

export default function Transaction ({expense,index}) {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentHoverIndex: null
  //   };
  // }
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
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
        {/* {similary make changes} */}
        <div>{expense.text}</div>
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
            <div className={styles.edit} onClick={() =>alert("Edit Clicked")}>
              <img src={EditImage} height="100%" alt="Edit" />
            </div>
            <div className={styles.delete} onClick={() => alert("Deleted Clicked")}>
              <img src={DeleteImage} height="100%" alt="Delete" />
            </div>
          </div>
        </div>
      </li>
    );
  
}
