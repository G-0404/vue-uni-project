<!--
 * @Author: 微生
 * @Date: 2024-01-31 16:22:14
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-02-01 11:45:53
 * @FilePath: /demo-xtx/src/pages/index/components/CustomNavbar.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->

<template>
  <view class="navbar" :style="{ 'padding-top': statusBarHeight + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
const system_info: UniApp.GetSystemInfoResult = uni.getSystemInfoSync()
const statusBarHeight = ref(0)
statusBarHeight.value = system_info.statusBarHeight as number
</script>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  box-sizing: border-box;
  width: 100vw;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    padding-top: 20rpx;
    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }
  .icon-scan {
    font-size: 30rpx;
    padding: 15rpx;
  }
}
</style>
