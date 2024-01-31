<!--
 * @Author: 微生
 * @Date: 2024-01-31 23:02:37
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 23:13:48
 * @FilePath: /demo-xtx/src/pages/index/components/CategoryPanel.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->
<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in category_mutli_list"
      :key="item.id">
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>
<script setup lang="ts">
import type { CategoryMutliItem } from '@/types/home'
defineProps<{
  category_mutli_list: CategoryMutliItem[]
}>()
</script>
<style lang="scss">
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
