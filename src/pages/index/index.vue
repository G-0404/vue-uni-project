<!--
 * @Author: 微生
 * @Date: 2024-01-30 15:39:17
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-02-01 19:39:39
 * @FilePath: /demo-xtx/src/pages/index/index.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->

<template>
  <view class="container-home-page" :style="{ 'padding-top': 80 + statusBarHeight + 'px' }">
    <!-- 顶部Navbar -->
    <CustomNavbar></CustomNavbar>
    <scroll-view
      @refresherrefresh="onRefreshStart"
      :refresher-enabled="true"
      :refresher-triggered="is_refresh"
      scroll-y
      @scrolltolower="onScrolltolower">
      <!-- 轮播组件 -->
      <CommonGSwiper :swiper_banner_list="swiper_banner_list"></CommonGSwiper>
      <!-- 分类 -->
      <CategoryPanel :category_mutli_list="category_mutli_list"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :hot_mutli_list="hot_mutli_list"></HotPanel>
      <!-- 猜你喜欢 -->
      <CommonGGuess ref="guessRef"></CommonGGuess>
    </scroll-view>
  </view>
</template>
<script setup lang="ts">
// import CustomNavbar from './CustomNavbar.vue'
import { getHomeBannerAPI, getCategoryMutliAPI, getHotMutliAPI } from '@/api/home'
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { ref } from 'vue'
import type { BannerItem, CategoryMutliItem, HotMutliItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import type { CommonGGuess } from '@/types/component'
onload
onLoad(async () => {
  pageInit()
})

const pageInit = async () => {
  await getHomeBannerData()
  await getCategoryMutliData()
  await getHotMutliData()
}

const system_info: UniApp.GetSystemInfoResult = uni.getSystemInfoSync()
const statusBarHeight = ref(0)
statusBarHeight.value = system_info.statusBarHeight as number

const swiper_banner_list = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI({
    distributionSite: 1
  })
  swiper_banner_list.value = res.result
  console.log('第一个调用')
}

const category_mutli_list = ref<CategoryMutliItem[]>([])
const getCategoryMutliData = async () => {
  const res = await getCategoryMutliAPI()
  category_mutli_list.value = res.result
  console.log('第二个调用')
}

const hot_mutli_list = ref<HotMutliItem[]>([])
const getHotMutliData = async () => {
  const res = await getHotMutliAPI()
  hot_mutli_list.value = res.result
  console.log('第三个调用')
}

// 获取猜你喜欢组件实例
const guessRef = ref<CommonGGuess>()

// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getGuessLikeListData()
}

const is_refresh = ref(false)
const onRefreshStart = async () => {
  is_refresh.value = true
  guessRef.value?.resetData()
  await Promise.all([await getHomeBannerData(), await getCategoryMutliData(), await getHotMutliData()])
  onRefreshStop()
}

const onRefreshStop = () => {
  is_refresh.value = false
}
</script>
<style lang="scss">
//
.container-home-page {
  background-color: #f7f7f7;
  height: 100vh;
  width: 100vw;
}
</style>
