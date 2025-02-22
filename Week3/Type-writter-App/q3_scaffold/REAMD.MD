Overview

This project is a simple React-based name displayer that simulates a typewriter effect. Each character of the name is added to the UI every 0.5 seconds, giving the effect of typing. The project also includes a toggle button to start and stop the animation.

Features

Displays the name "Coding Ninjas" character by character.

A toggle button to start and stop the effect.

Utilizes React class components and lifecycle methods (componentDidMount, componentWillUnmount).

Implementation Details

App.js

Manages the showName state to control when the name should be displayed.

Has a toggle button that updates the state and conditionally renders the Name component.

Name.js

Uses typeWriterEffect() to update the state by adding characters every 500ms.

Implements componentDidMount() to start the effect when showName is true.

Implements componentWillUnmount() to stop the effect when showName is false.

How It Works

Initially, the name is hidden.

Clicking "Start" sets showName to true, which mounts the Name component.

componentDidMount() starts the typewriter effect using setInterval.

Each 500ms, typeWriterEffect() adds one character.

Clicking "Stop" unmounts Name.js and stops the effect.

Future Enhancements

Add a reset button to clear the name and restart the effect.

Allow users to input custom names.

Improve styling with animations.

Made with ❤️ by MOHIT