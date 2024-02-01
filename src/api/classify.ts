import { request } from '@/utils/http'
import type { classifyItem } from '@/types/classify'
/**
 *
 *  @func 获得banner轮播图
 *  @param {TYPE} param
 *  @return {TYPE}
 **/
export const getClassifyListAPI = () => {
  return request<classifyItem[]>({
    url: '/category/top',
    method: 'GET'
  })
}
