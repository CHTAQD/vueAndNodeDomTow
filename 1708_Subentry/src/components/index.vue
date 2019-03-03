<template>
  <div class="hello">
   
      
    <keep-alive>
      <router-view v-if="$route.meta.keppAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keppAlive"></router-view>
  <div>
     <Tab></Tab>
  </div>
 
  </div>
</template>

<script>
import Tab from '@/base/tab';
  
export default {
 created(){
  
 },
  name: 'inde',
  data () {
    return {
     
    }
  },
  components: {
    Tab:Tab,
  }
}
</script>


<style scoped >

</style>
