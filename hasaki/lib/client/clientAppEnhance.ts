/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-10 01:29:51
 * @LastEditTime: 2022-04-10 01:59:08
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-theme-hasaki/hasaki/lib/client/clientAppEnhance.ts
 */
import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  router.beforeEach((to) => {
    console.log("before navigation");
  });

  router.afterEach((to) => {
    console.log("after navigation");
  });
});

