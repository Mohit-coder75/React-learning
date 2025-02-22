import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount(){
    alert(`A person with email ${this.props.person.email} was removed from your network`);
  }

  render() {
    const { img, email } = this.props.person;
    //extract the props from the App passed to person
    const {removePerson, index} = this.props;
    return (
      <div className="person">
        {/* {add remove onclick event } */}
        <b onClick={()=>removePerson(index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
