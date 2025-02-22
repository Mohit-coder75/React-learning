
import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],   // State to store fetched photos
      loading: false   // State to manage loading status
    };
  }

  componentDidMount() {
    // Set loading state to true before fetching data
    this.setState({ loading: true });

    // Make API request to fetch images
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())  // Parse the response as JSON
      .then((data) => {
        // Update state with fetched photos and set loading to false
        this.setState({
          photos: data,
          loading: false
        });
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching images:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    // Display loading status if loading is true
    if (this.state.loading) {
      return <div className="App">Loading...</div>;
    }

    // Once loading is false, display images
    return (
      <div className="App">
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
