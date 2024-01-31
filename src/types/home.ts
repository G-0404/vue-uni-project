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
