<!--<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">roles: <span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
!-->

<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      name: {{ name }}
      post_name:{{ postName }}
    </div>
  </div>
</template>

<script>
import api from '@/api/test'

export default {
  data() {
    return {
      name: {},
      postName: {}
    }
  },
  // created是页面要执行的方法
  created() {
    this.test()
    this.postTest()
  },
  methods: {
    // 设置data里面的数据this.name=response；
    // promise.then()里面用的es6的箭头函数：可以response=>{}或者(response)=>{}。
    // 箭头函数意思就是能在里面拿到外面的this,
    // 不然普通函数的this只是取的当前方法。
    test() {
      api.test().then((response) => {
        this.name = response
      })
    },
    postTest() {
      api.postTest().then((res) => {
        this.postName = res
      })
    }
  }

}
</script>

