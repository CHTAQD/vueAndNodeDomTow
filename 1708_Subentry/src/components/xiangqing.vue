<template>
  <div class="xianqging">
   详情数据：
   <ul v-for="(gidData,index) in gid" :key="index">
     <li>
       <span>
         {{gidData.name}}
       </span>
       <span>
         {{gidData.id}}
       </span>
       <span>
         {{gidData.price}}
       </span>

     </li>
    <button>购买</button>
   </ul>
      
    <div>买不买 不买滚 </div> 
 
  </div>
</template>

<script>
import {GetOne} from '@/api';

export default {
 created(){
  this.getGood()
 },
  name: 'Xqing',
  data () {
    return {
     gid:{},
    //  par:this.$route.params.id
    }
  },
  components: {
   
  },
  methods:{
    async getGood(){
      this.gid = await GetOne(this.$route.params.id)
    }
  }
}
</script>


<style scoped >

</style>
