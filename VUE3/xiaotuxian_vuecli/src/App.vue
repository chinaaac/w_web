<template>
  <div>
    <div>
      123
      {{$store.state.moduleA.username}}
      {{$store.state.moduleB.username}}
      <p>
        {{$store.getters.newName}}
      </p>
      <p>
         {{$store.getters['moduleB/newName']}}
      </p>

      <button @click="mutatonsFn">mutatonsFn</button>
      <button @click="actionsFn">actionsFn</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'app',
  setup () {
    const store = useStore()
    const mutatonsFn = () => {
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => store.dispatch('moduleB/updateName')
    return {
      mutatonsFn,
      actionsFn
    }
  }
}
</script>

<style>

</style>
