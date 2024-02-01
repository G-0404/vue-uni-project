/*
 * @Author: 微生
 * @Date: 2024-01-31 21:27:13
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-02-01 19:57:03
 * @FilePath: /demo-xtx/src/api/home.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved. test
 */
import { request } from '@/utils/http'
import type { BannerItem, CategoryMutliItem, HotMutliItem, GuessLikeItem } from '@/types/home'
import type { HotParams } from '@/types/global'
import type { HotItem } from '@/types/hot'
/**
 *
 *  @func 获得banner轮播图
 *  @param {TYPE} param
 *  @return {TYPE}
 **/
export const getHomeBannerAPI = (data = { distributionSite: 1 }) => {
  return request<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data,
  })
}
/**
 *
 *  @func 获得首页前台分类
 *  @param {TYPE} param
 *  @return {TYPE}
 **/
export const getCategoryMutliAPI = () => {
  return request<CategoryMutliItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}
/**
 *
 *  @func 获得首页热门推荐
 *  @param {TYPE} param
 *  @return {TYPE}
 **/
export const getHotMutliAPI = () => {
  return request<HotMutliItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
/**
 *
 *  @func 获得猜你喜欢列表
 *  @param {TYPE} param
 *  @return {TYPE}
 **/
export const getGuessLikeListAPI = (data = { page: 1, pageSize: 10 }) => {
  return request<GuessLikeItem>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}

/**
 *
 *  @func 获得热门推荐详情页模块数据
 *  @param {TYPE} param
 *  @return {TYPE}
 **/
export const getHotrecommendAPI = (url: string, data: HotParams) => {
  return request<HotItem>({
    url,
    method: 'GET',
    data,
  })
}
