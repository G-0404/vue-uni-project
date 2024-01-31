import { request } from '@/utils/http'
import type { BannerItem, CategoryMutliItem, HotMutliItem, GuessLikeItem } from '@/types/home'
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
    data
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
    method: 'GET'
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
    method: 'GET'
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
    data
  })
}
