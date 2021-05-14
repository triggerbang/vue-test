import request from '@/utils/request'

export default ({
  test() {
    return request({
      url: '/test',
      method: 'get'
    })
  },
  postTest() {
    return request({
      url: '/test',
      method: 'post',
      data: {
        'name': '瓦大喜'
      }
    })
  }

})

// 注意post方法设置之后由于还是用的mock-server.js，
// 请求外部接口的时候会报错5000毫秒超时，
// 这是由于node的express中的body-parser中间件导致的，
// 所以要在mock-server.js中设置一下
