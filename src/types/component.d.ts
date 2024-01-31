/*
 * @Author: 微生
 * @Date: 2024-01-30 15:39:17
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 21:05:19
 * @FilePath: /demo-xtx/src/types/component.d.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import CommonGSwiper from '@/components/CommonGSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    CommonGSwiper: typeof CommonGSwiper
  }
}
