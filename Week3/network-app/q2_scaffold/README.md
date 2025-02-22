📌 Overview

This project is a simple network management application where users can view and remove people from their network. The app is built using React Class Components and utilizes state management to dynamically update the UI.

🎯 Features

✅ Display a list of people in the network.

✅ Remove a person from the network by clicking the ❌ button.

✅ Show an alert when a person is removed.

✅ Uses the show property to conditionally render each person.

🏗️ Project Structure & Explanation

App.js

Holds the network state containing an array of people.

Implements the removePerson function to update state when a person is removed.

Uses .map() to render the Person component conditionally.

Person.js

Renders each person's image, email, and delete button.

Calls removePerson when the ❌ button is clicked.

📝 Code Snippet

Rendering People in Network
{this.state.network.map((p, i) => {
  console.log(i); // ✅ Logging index outside JSX
  return p.show ? <Person key={p.id} person={p} index={i} removePerson={this.removePerson} /> : null;
})}

Removing a Person
removePerson = (index)=>{
    this.setState((prevState)=>{
      const updatedNetwork = prevState.network.map((p,i)=> i === index ? {...p, show:false} : p);
      return {network:updatedNetwork}
    });