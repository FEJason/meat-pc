import request from '@/request/request'

/* 获取趋势数据 */
export const getTrend = (query) => {
    return request({
        url: '/market/btc/trend',
        method: 'get',
        params: query
    })
}
