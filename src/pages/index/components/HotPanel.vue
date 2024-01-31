<!--
 * @Author: 微生
 * @Date: 2024-01-31 23:17:05
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 23:30:28
 * @FilePath: /demo-xtx/src/pages/index/components/HotPanel.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in hot_mutli_list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" url="/pages/hot/hot" class="cards">
        <image v-for="fItem in item.pictures" class="image" mode="aspectFit" :src="fItem"></image>
      </navigator>
    </view>
  </view>
</template>
<script setup lang="ts">
import type { HotMutliItem } from '@/types/home'
defineProps<{ hot_mutli_list: HotMutliItem[] }>()
</script>
<style lang="scss">
/* 热门推荐 */
.hot {
  display: flex;
  flex-wrap: wrap;
  min-height: 508rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    position: relative;
    .title-desc {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    .title {
      justify-content: start;
    }
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }
    .image {
      width: 150rpx;
      height: 150rpx;
    }
  }
  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
