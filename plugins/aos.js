// @/plugins/aos.js
// I've went ahead to declare all the config here so it is global
// Read up more here: https://github.com/michalsnik/aos

import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    offset: 5,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: false
  }); // or any other options you need
};
