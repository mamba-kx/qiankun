import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

registerMicroApps([
  {
    name: "micro", // app name registered
    entry: "http://10.0.163.94:5176/micro",
    container: "#subapp",
    activeRule: "/micro"
  }
]);

start();
