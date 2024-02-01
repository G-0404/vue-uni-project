/*
 * @Author: 微生
 * @Date: 2024-02-01 00:05:39
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-02-01 19:47:49
 * @FilePath: /demo-xtx/src/types/global.d.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
/** 通用分页参数类型 */
export type PageParams = {
  /** 页码：默认值为 1 */
  page?: number
  /** 页大小：默认值为 10 */
  pageSize?: number
}

export type HotParams = PageParams & {
  /** Tab 项的 id，默认查询全部 Tab 项的第 1 页数据 */
  subType?: string
}
/**
 *
 *  @func 商品最小单位
 *  @param {TYPE} param
 *  @return {TYPE}
 **/
export type GoodsItem = {
  desc: string
  id: string
  name: string
  picture: string
  price: number
}
