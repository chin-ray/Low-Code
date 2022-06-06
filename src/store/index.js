// import { createStore } from 'vuex'
// import getters from './getters'
// //简单的方式
// const modulesFiles = import.meta.globEager('./modules/*.js')
// const modules = {}
// // console.log(modulesFiles);
// for (const path in modulesFiles) {
//   const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
//   modules[moduleName] = modulesFiles[path].default
// }

// //复杂的方式
// // const modulesFiles = import.meta.globEager('./modules/*.js')
// // console.log(Object.keys(modulesFiles));
// // const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
// //   // const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
// //   const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/gi, '$2')
// //   const value = modulesFiles[modulePath]
// //   modules[moduleName] = value.default
// //   return modules
// // }, {})
// // console.log(modules);
// export default createStore({
//   modules,
//   getters
// })

import { defineStore } from "pinia";
// 1.定义容器
// 参数1： 容器的ID，必须唯一，将来pinia会把所有容器挂载到根容器
// 参数2： 选项对象
export const mainStore = defineStore("main", {
  /**
   * 类似于组件的data， 用来存储全局状态
   * 1. 必须是函数，这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
   * 2. 必须是箭头函数，这样是为了更好的 TS 类型推导
   * @returns  一个函数，调用得到容器实例
   */
  state: () => {
    return {
      msg: "第一个状态数据 Pinia",
    };
  },
  /**
   * 类似于组件的computed，用来封装计算属性，有缓存的功能
   */
  getters: getters,
  /**
   * 类似于组件的methods，封装业务逻辑（同步，异步都可以），修改state
   */
  actions: {},
});
