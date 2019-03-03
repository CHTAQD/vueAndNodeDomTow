<template>
  <div class="Head">
      <div class="nav">
          <!-- <swiper></swiper> -->
          <slot></slot>
      </div>  
   
  </div>
</template>

<script>
//  import Swiper from "@/base/Swiper"
export default {
    
  name: 'Head',
  props:["Pro"],
  data () {
    return {
   
    }
  },
   components: {
    //  Swiper:Swiper
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.nav{
    height: 50px;
    width: 100%;
    background: #c11;
    position: fixed;
    top: 0;
    z-index: 99;
}
a {
  color: #42b983;
}
</style>
