<!--
 * @Author: 微生
 * @Date: 2024-01-30 15:39:17
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 21:53:27
 * @FilePath: /demo-xtx/src/pages/index/index.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->

<template>
  <CustomNavbar></CustomNavbar>
  <CommonGSwiper></CommonGSwiper>
</template>
<script setup lang="ts">
// import CustomNavbar from './CustomNavbar.vue'
import { getHomeBannerAPI } from '@/api/home'
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'

const swiper_banner_list = ref<BannerItem[]>([])
onLoad(() => {
  getHomeBannerData()
})
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI({
    distributionSite: 1
  })
  console.log(12312312, res.result)
  swiper_banner_list.value = res.result
}
</script>
<style lang="scss">
//
</style>
