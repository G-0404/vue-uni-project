<!--
 * @Author: 微生
 * @Date: 2024-01-31 20:44:30
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 21:37:34
 * @FilePath: /demo-xtx/src/components/CommonGSwiper.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->
<template>
  <view class="carousel">
    <swiper :circular="true" @change="handleChanle" :autoplay="false" :interval="3000">
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image
            mode="aspectFill"
            class="image"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg"></image>
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image
            mode="aspectFill"
            class="image"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_2.jpg"></image>
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image
            mode="aspectFill"
            class="image"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_3.jpg"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text v-for="(item, index) in 3" :key="item" class="dot" :class="{ active: index === activeIndex }"></text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref(0)
// const swiper_banner_list = ref([])
const handleChanle: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail.current
}
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
