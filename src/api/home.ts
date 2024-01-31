import { request } from '@/utils/http'
import type { BannerItem } from '@/types/home'
export const getHomeBannerAPI = (data: { distributionSite: 1 }) => {
  return request<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data
  })
}
