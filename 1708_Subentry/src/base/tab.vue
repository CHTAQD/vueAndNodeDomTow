<template>


  <div class="tab">

    <ul v-for="ul in routes" class="UlOne">
      <li v-for="li in ul.children">
         <router-link :to="{path:li.path}">
           <!-- //query:{id:data.id} -->
           
              {{li.name}}
            <!-- <i class="iconfont icon-liebiao"></i> -->
            <i :class=li.ios></i>
            
         </router-link>
      
      </li>
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      routes:this.$router.options.routes,
      
     
    }
  },
  beforeDestroy:()=>{
    //   this.$emit("listenEven",)
  }
}
</script>
<style scoped >

ul {
  list-style-type: none;
 
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #666;
  overflow: hidden;
  z-index: 99;
  display:flex;
  justify-content: space-between;
  
}
li {
  
  height: 80%;
  width: 20%;

  background: #ccc;
  margin-top: 5px;
  text-align: center;
}
a {
    display:block;
    color: #42b983;
    height: 100%;
    width:100%;
}
</style>
