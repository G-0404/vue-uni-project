/*
 * @Author: 微生
 * @Date: 2024-02-01 19:49:31
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-02-01 19:55:43
 * @FilePath: /demo-xtx/src/types/hot.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */

import type { GoodsItem } from '@/types/global'
export type GoodsItems = {
  items: GoodsItem[]
  counts: string
  pages: string
  page: string
  pageSize: string
}
export type SubType = {
  id: string
  title: string
  goodsItems: GoodsItems[]
}

export type HotItem = {
  title: string
  id: string
  bannerPicture: string
  subTypes: SubType[]
}
