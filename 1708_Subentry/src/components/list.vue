<template>
  <div class="list">
      <Head>列表页</Head>
       <ul class="listData" ref="scroll" @scroll="slode">
          
            <router-link :to="{name:'Xqing',params:{id:data.id}}" v-for="(data,key) in ListData" :key="key" tag="li" >
                <div @click.stop="deleteGo(data.id,$event)">删除</div>
                
                <span>车名：{{data.name}}</span>
                <span>价钱：{{data.price}}</span>
                <div @click.stop="ADDARR(data)">加入购物车</div>
                
                <img v-lazy="data.img" alt="">
            </router-link>
        
        </ul>

        <!-- {{ListData}} -->
        
        <button class="but" @click="getListData">{{hasmoretext}}</button>
        <button class="butT" @click="getListData">添加</button>
        {{array}}
        <!-- {{ListData}} -->
  </div>
  
</template>

<script>
import Head from "@/base/Head";
import {getPage,GetListData} from '../api';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'list',
  data () {
    return {
        ListData:[],
        hasmore:true,
        page:1,
        hasmoretext:"加载更多",
        array:this.$store.state.arr
    }
  },
  created(){

      
      this.getListData();
  },
  methods:{
      ...mapMutations([
          'ADDARR'
      ]),
          






      deleteGo(index,event){
        //    event.stopPropagation();
        
          this.ListData.splice(index,1)
      },
      slode(){
          let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
           console.log(scrollTop);console.log(clientHeight);console.log(scrollHeight);
          if(scrollTop+clientHeight+50>=scrollHeight){
            //   this.getListData()
           
          }
      },
     async getListData(){
        // this.ListData = await GetListData();
        let {data:dp,hasemore} = await getPage(this.page);
        this.hasmore = hasemore;
        console.log(hasemore)
        // this.ListData = dp
        this.ListData=[...this.ListData,...dp];//合并数组 新值和旧值
       
        if(!this.hasmore){
            this.hasmoretext='没有更多了'
        }else{
            this.page+=1;
            this.hasmoretext = "加载更多"
        }

      },
      
  },
  computed:{
      
  },
  components: {
     Head:Head
     }
}
</script>

<style lang="scss" scoped >
    button{
        display: block;
        position: fixed;
        bottom: 50px;
    }
    .butT{
        bottom: 100px;
    }
    .listData{
        width: 100%;
        
    }
    .listData>li{
        // font-size: 5px;
        // text-align: center;
        // height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
       border-bottom: 1px solid #ccc;
    }
    .listData>li>span{
        display: block;
        height: 100%;
        width: 30%;
       
    }
    .listData>li>img{
        
        height: 100%;
        width: 30%;
       
    }
  .list{
    height: 600px;
    width: 100%;
    // overflow-x: hidden;
    // overflow-y: scroll;
    margin-top: 50px;
}
.list::-webkit-scrollbar {
        // display: none;
    }
</style>
