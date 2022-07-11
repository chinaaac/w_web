<template>
  <div>
    {{$store.state.username}}
    <p>
      {{$store.getters['newName']}}
    </p>
    <button @click="$store.commit('updateName')">modify</button>
  </div>
</template>

<script>
// 拿到仓库实例
import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'
export default {
  name: 'app',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)
    // console.log()
    const mutations = () => {
      store.dispatch('updateName', 'cl')
    }
    setTimeout(() => {
      mutations()
    }, 2000)
    return {
      mutations
    }
  }
}
</script>

<style>

</style>
