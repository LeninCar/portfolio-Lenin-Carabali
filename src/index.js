import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import gsap from 'gsap'

const root = createRoot(document.getElementById("root"));

const text = document.getElementsByClassName('title');
const range = 30;

function updateShadow(event) {
    const x = Math.round(event.pageX * range / window.innerWidth) - range / 2;
    const y = Math.round(event.pageY * range / window.innerHeight) - range / 2;
    gsap.to(text, {
      '--x': x,
      '--y': y,
    });
  }
  
  document.body.addEventListener('mousemove', updateShadow);

root.render(
    <App />
)