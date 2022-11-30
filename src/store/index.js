// 使用的是 export const 而不是 export default （详见：命名导出和默认导出），这样在使用的时候可以和其他的 Vue 组合函数保持一致，都是通过 import { xxx } from 'xxx' 来导入。
import { defineStore } from 'pinia'
// 不论是哪种创建形式，都必须为 Store 指定一个唯一 ID 。
export const useStore = defineStore({
    id: 'main',
    state: () => {
        console.log('123')
        return{
            message: '我是store传来的数据',
        }
    }
})