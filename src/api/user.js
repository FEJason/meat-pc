import request from '@/request/request'

/* 查询用户列表 */
export const findUserPage = (query) => {
    return request({
        url: '/v1.0/UserController/findPage',
        method: 'get',
        params: query
    })
}
