/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-10 15:09:53
 * @LastEditTime: 2022-04-10 15:38:44
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 
 * @FilePath: /vuepress-theme-hasaki/packages/theme/src/node/hasakiTheme.ts
 */
import type { Page, Theme, ThemeConfig } from "@vuepress/core";
import { fs, path } from "@vuepress/utils";
import { createPage } from "@vuepress/core";
// 主题 API
export const hasakiTheme = (options, app) => {
  return {
    name: "vuepress-theme-hasaki",
    layouts: {
      Layout: path.resolve(__dirname, "../client/layouts/Layout.vue"),
      404: path.resolve(__dirname, "../client/layouts/404.vue"),
    },
    // clientAppEnhanceFiles Hook https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#extendspage
    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.ts"
    ),
    // use alias to make all components replaceable
    alias: Object.fromEntries(
      fs
        .readdirSync(path.resolve(__dirname, "../client/components"))
        .filter((file) => file.endsWith(".vue"))
        .map((file) => [
          `@theme/${file}`,
          path.resolve(__dirname, "../client/components", file)
        ])
    ),
    async onInitialized(app) {
      // console.log(app)
    },
  };
};
