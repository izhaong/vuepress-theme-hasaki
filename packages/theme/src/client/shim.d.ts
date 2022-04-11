/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-10 15:42:39
 * @LastEditTime: 2022-04-10 15:42:39
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 
 * @FilePath: /vuepress-theme-hasaki/packages/theme/src/client/shim.d.ts
 */
declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const comp: ComponentOptions;
  export default comp;
}
