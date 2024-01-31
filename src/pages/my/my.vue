<!--
 * @Author: 微生
 * @Date: 2024-01-30 15:39:17
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 15:35:41
 * @FilePath: /demo-xtx/src/pages/my/my.vue
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
-->
<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '测试名字',
          token: 'asdsajhadshkjdaskldsajklsda'
        })
      "
      size="mini"
      plain
      type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="handleClick">点击测试</button>
  </view>
</template>
<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { request } from '@/utils/http'
const memberStore = useMemberStore()
const handleClick = async () => {
  console.log(31223123)
  const res = await request<string[]>({
    url: '/home/banner',
    data: { distributionSite: 2 },
    method: 'GET'
  })
  // const res = await uni.request({
  //   url: '/home/banner',
  //   data: { distributionSite: 2 },
  //   method: 'GET'
  // })
  console.log(res)
}
</script>

<style lang="scss">
//
</style>
