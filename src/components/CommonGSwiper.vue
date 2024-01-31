<!--
 * @Author: 微生
 * @Date: 2024-01-31 20:44:30
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 22:47:56
 * @FilePath: /demo-xtx/src/components/CommonGSwiper.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->
<template>
  <view class="carousel">
    <swiper :circular="true" @change="handleChanle" :autoplay="true" :interval="3000">
      <swiper-item v-for="(item, index) in swiper_banner_list">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in swiper_banner_list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"></text>
    </view>
  </view>
</template>
<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
const activeIndex = ref(0)
const handleChanle: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail.current
}
defineProps<{
  swiper_banner_list: BannerItem[]
}>()
</script>
<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}
/* 轮播图 */
.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
