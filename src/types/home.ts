/*
 * @Author: 微生
 * @Date: 2024-01-31 21:29:20
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-02-01 19:50:56
 * @FilePath: /demo-xtx/src/types/home.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
export type BannerItem = {
  id: string
  hrefUrl: string
  imgUrl: string
  type: string
}
export type CategoryMutliItem = {
  id: string
  name: string
  icon: string
}
export type HotMutliItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}
export type GoodsItem = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}
export type GuessLikeItem = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: GoodsItem[]
}
