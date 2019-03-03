<template>
  <div class="home">
        <!-- <input type="text" v-model="mo" @input="inp"> v-model的使用 --> 
        <!-- <div>{{mo}}</div> -->
        <Head>首页 </Head>
        <Loading  v-if="ifs" class="ifs"></Loading>
        
        <template v-else>
            <div class="Swi" >
              <swiper :Swips="das"></swiper>
            </div>
            <div class="center" >
                <Center :CenData="NewData"></Center>
            </div>
        </template>
       
    
    
 
  </div>
</template>

<script>
import Head from "@/base/Head";
import Swiper from "@/base/Swiper";
import { getBaner, getNew, GetListData,getHome } from "@/api";
import Center from "@/base/center";
import Loading from "@/base/loading";
export default {
  data() {
    return {
      // mo:"",
      das: [],
      NewData: [],
      ifs:true
    };
  },
  created() {
    // this.getImgList();
    // this.getNewList();
    // console.log(this.mo)
  this.gethome();
  },
  methods: {
    // inp(){
    //   console.log(this.mo)
    // },
    // async getImgList() {
    //   this.das = await getBaner();
    // },
    // async getNewList() {
    //   this.NewData = await getNew();
    // }
    async gethome(){
       [this.das,this.NewData] = await getHome();
      //  console.log(this.das,this.NewData)
       this.ifs = false;
    }
  },
  name: "home",

  components: {
    Head: Head,
    Swiper: Swiper,
    Center: Center,
    Loading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.home {
  height: 630px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.home::-webkit-scrollbar {
  display: none;
}
.ifs{
 text-align: center;
  margin:200px auto;
}
</style>
