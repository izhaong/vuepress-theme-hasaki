/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-10 00:57:54
 * @LastEditTime: 2022-04-10 02:00:21
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-theme-hasaki/hasaki/lib/index.ts
 */

import type { Page, Theme, ThemeConfig } from "@vuepress/core";
import { path } from "@vuepress/utils";

// 主题 API
export const hasakiTheme = (options, app) => {
  return {
    name: "vuepress-theme-foo",
    layouts: {
      Layout: path.resolve(__dirname, "layouts/Layout.vue"),
      404: path.resolve(__dirname, "layouts/404.vue"),
    },
    // clientAppEnhanceFiles Hook https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#extendspage
    // clientAppEnhanceFiles: path.resolve(
    //   __dirname,
    //   "client/clientAppEnhance.ts"
    // ),
  };
};
