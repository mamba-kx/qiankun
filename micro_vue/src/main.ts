import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/index";

import {
  renderWithQiankun,
  qiankunWindow
} from "vite-plugin-qiankun/dist/helper";

const { VITE_APP_ENV } = import.meta.env;

console.log("env", VITE_APP_ENV);

let app: any;

const render = (container?: any) => {
  console.log("__POWERED_BY_QIANKUN__", qiankunWindow.__POWERED_BY_QIANKUN__);

  app = createApp(App);
  app
    .use(router)
    .mount(container ? container.querySelector("#micro") : "#micro");
};

const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      console.log("props", props);

      const { container } = props;
      render(container);
    },
    bootstrap() {},
    unmount() {
      app.unmount();
    }
  } as any);
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
