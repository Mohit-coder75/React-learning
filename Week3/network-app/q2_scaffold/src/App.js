import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
          email: "john@gmail.com",
          show: true
        },
        {
          id: 2,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
          email: "stephen@gmail.com",
          show: true
        },
        {
          id: 3,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
          email: "alex@gmail.com",
          show: true
        }
      ]
    };
  }

  // Create function to remove person from your network here

  removePerson = (index)=>{
    this.setState((prevState)=>{
      const updatedNetwork = prevState.network.map((p,i)=> i === index ? {...p, show:false} : p);
      return {network:updatedNetwork}
    });
       };

  render() {
    return (
      <div className="App">
        <h1>My Network</h1>
        <div className="list">
        {this.state.network.map((p, i) => {
      console.log(i); // ✅ Logging index outside JSX
      return p.show ? <Person key={p.id} person={p} index={i} removePerson={this.removePerson} /> : null;
    })}
        </div>
      </div>
    );
  }
}

export default App;
