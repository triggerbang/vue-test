import request from '@/utils/request'

export default({
    getSearch(query,current=1,size=20){
        return request({
            url:'/article/category/search',
            method:'post',
            data:{
                ...query,
                //es6新语法 ...向query对象中追加属性 最后生成的object:{name:xx,status:xx,current:xx,size:xx}
                current,
                size
            }
            })
        }
        })
