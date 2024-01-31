import { useMemberStore } from '@/stores'

/*
 * @Author: 微生
 * @Date: 2024-01-31 13:38:33
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-01-31 15:59:18
 * @FilePath: /demo-xtx/src/utils/http.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  // request 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    console.log(1111, options)
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    // 设置token和请求头

    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
  success(options: UniApp.RequestOptions) {
    // 请求成功后
  },
  fail(err: UniApp.RequestOptions) {
    console.log('interceptor-fail', err)
  },
  complete(res: UniApp.RequestOptions) {
    console.log('interceptor-complete', res)
  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}
export const request = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        console.log('resresres', res)
        if (res.statusCode >= 200 && res.statusCode <= 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login'
          })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误'
          })
          reject(res)
        }
      },
      // 服务器挂了，网络出错才会走fail
      fail(res) {
        reject(res)
      }
    })
  })
}
