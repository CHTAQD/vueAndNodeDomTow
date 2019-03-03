<template>

<div class="center">

    
        <ul class="listData">
            <!-- <li v-for="data in CenData">  -->
                <router-link to=""  v-for="(data,index) in CenData"  tag="li" :key="index">
                    <span>车名：{{data.name}}</span>
                    <span>价钱：{{data.price}}</span>
                    <img :src="data.img" alt="">
                
               </router-link>
            <!-- </li> -->
        </ul>

</div>
</template>

<script>
export default {
  name: 'tab',
  props:["CenData"],
  data () {
    return {
       
    }
  },
    methods:{
        
    },
    computed:{


    }
 
}
</script>
<style lang="scss" scoped >
    .listData{
        width: 100%;
        
    }
    .listData>li{
        // height: 100%;
        width: 100%;
        height: 100px;
       border-bottom: 1px solid #ccc;
    }
    .listData>li{
     
        // height: 100%;
    //     width: 100%;
    //     height: 100%;
    //    display: block;
         display: flex;
        justify-content: flex-end;
    //    margin-top: -5%;
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
    // .listData{
      
    //     width: 100%;
    //     background: #FAFAFA;
        
    //     li{
    //         height: 100px;
           
    //         border-bottom: 1px solid #ccc;

           
            
    //     }
    // }
    //  a{
    //             display: block;
    //             height: 100%;
    //             width: 100%;
    //             // display: flex;
    //             // justify-content:flex-start;
    //             span{
    //                 height: 50%;
    //                 // width: 35%;
    //                 display:block;
    //                 float: right;
    //                 // line-height: 100px;
    //             }
    //             img{
                    
    //                 height: 100%;
    //                 width: 30%;
    //                 // display: block;

    //             }
    //         }

</style>
