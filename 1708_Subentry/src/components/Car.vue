
<template>
  <div>
    <input type="checkbox" @change="TS(t)" v-model="t">
      
    <ul class="ul_array">
      <li v-for="(item,index) in arr" :key="index">
          <!-- <label class="check-box" for="check"> -->
            
            <input type="checkbox" v-model="item.trs" @change="CHANGEON(item.trs)">
           {{item.trs}}
          <!-- </label> -->
         <!-- <div> -->
           <p>{{item.name}}</p>
           <p>{{item.info}}</p>
           <p>{{item.price}}</p>
           <p>{{item.count}}</p>
        <!-- </div> -->
         <img :src="item.img" alt="">
         
      </li>
    </ul>
  </div>
</template>
<script>
//将数据发送给store 修改 state arr.trs对应的数据 通过find判断如果他们都是false||true 就改变全选的true||false
import { mapState, mapMutations } from 'vuex';
export default {
    data(){
        return{
            t:this.T,
            // trus:this.$store.state.T
        }
    },
    computed:{
        ...mapState({
            count:'count',
            arr:'arr',
            T:'T'
        })
    },
    template:{

    },
    created(){
        this.TS
    },
     methods:{
         
         ...mapMutations({
             TS:'TS',
             CHANGEON:'CHANGEON'
         }),
    
  }
}
</script>
<style scoped>
     .ul_array{
        width: 100%;
        
    }
    .ul_array>li{
        
        width: 100%;
        display: flex;
        justify-content: flex-end;
       border-bottom: 1px solid #ccc;
    }
    .ul_array>li>span{
        display: block;
        height: 100%;
        width: 30%;
       
    }
    .ul_array>li>img{
        
        height: 100%;
        width: 30%;
       
    }
</style>
