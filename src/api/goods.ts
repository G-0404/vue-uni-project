import { request } from '@/utils/http'
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
