import * as components from "./components";

import { use, registerComponent } from "./utils/plugins";

const DsPackWeb = {
  install(Vue) {
    // Components
    for (let componentKey in components) {
      registerComponent(Vue, components[componentKey]);
    }
  },
};

use(DsPackWeb);

export default DsPackWeb;

// export all components as vue plugin
export * from "./components";
