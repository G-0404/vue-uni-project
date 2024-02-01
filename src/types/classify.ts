/*
 * @Author: 微生
 * @Date: 2024-02-01 22:44:58
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-02-01 22:49:20
 * @FilePath: /demo-xtx/src/types/classify.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
import type { GoodsItem } from '@/types/home'
export type secondaryClassifyItem = {
  id: string
  name: string
  picture: string
  parentId: string
  parentName: string
  goods: GoodsItem[]
  categories: null
  brands: null
  saleProperties: null
}
export type classifyItem = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: secondaryClassifyItem[]
}
