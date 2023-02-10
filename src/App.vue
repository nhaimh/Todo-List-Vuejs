<template>
  <div >

    <router-link to="/"> </router-link>
    <router-view />
    <!-- <Detail v-bind:users="users" ></Detail>
    <Helloworld  v-bind:users="users" />
    <editUsers v-bind:userss="userss" @save="clickSave" ></editUsers> -->
  </div>
</template>

<script>
// import Helloworld from './components/HelloWorld.vue'
// import Detail from './components/detail.vue'
import('./assets/style.css')
import('./assets/w3schools.css')
// import editUsers from './components/edit.vue'
export default {
  name: 'App',
  components: {
    // Detail,
    // Helloworld,
    // 'editUsers' : editUsers,
  },
  data() {
  return {
    
        
  }

    },
    // copyusers : this.users,
    methods: {
      
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
