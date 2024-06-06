# PoseNet Glasses Overlay

This project uses the PoseNet model from the ml5.js library to capture poses from a webcam feed and overlay "thug life" glasses on detected faces in real-time.

## Features
- Real-time pose detection using PoseNet.
- Overlays "thug life" glasses on the face detected by PoseNet.
- Visualizes keypoints and skeletons on the captured video feed.

## Getting Started

### Prerequisites
- Node.js and npm installed on your local machine.
- A webcam connected to your computer.

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/vyshnaviK1/Position-Detector.git
    cd Position-Detector
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start a local server:
    ```sh
    npx live-server
    ```

### Running the Project
1. Open `index.html` in your web browser.
2. Allow the browser to access your webcam.
3. The application will start capturing video from your webcam and overlaying "thug life" glasses on your face in real-time.

## Project Structure
- `index.html`: The main HTML file that includes the canvas and video elements.
- `sketch.js`: The main JavaScript file containing the P5.js sketch and PoseNet logic.
- `thug-life-sunglasses.png`: The image of the "thug life" glasses to be overlaid on the face.

## Usage
- Ensure your face is clearly visible in the webcam feed for PoseNet to detect your pose accurately.
- The application will draw keypoints and skeletons on the video feed and overlay the glasses on your face.

## Acknowledgments
- [ml5.js](https://ml5js.org/) - A friendly machine learning library for the web.
- [P5.js](https://p5js.org/) - A JavaScript library for creative coding.
