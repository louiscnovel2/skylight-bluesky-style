import "spectre.css";
import "./style.css";
import "../serviceworker.js";
import "../public/manifest.json";
import "../public/192.png";
import "../public/512.png";
import "bootstrap-icons/font/bootstrap-icons.css";

import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import App from "@/App.vue";
import { tryResumeSession } from "@/lib/bsky";
import { queryClient } from "@/lib/query";
import { router } from "@/router";

createApp(App).use(VueQueryPlugin, { queryClient }).use(router).mount("#app");

tryResumeSession().then(({ success }) => {
  if (!success) {
    router.replace({ name: "login" });
  }
});
