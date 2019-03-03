<template>

<div>
    <!-- <div v-if="ifs">正在加载</div> -->
     <swiper :options="swiperOption"  id="Swi">
        <swiper-slide v-for="(slide, index) in Swips" :key="index">
            <img :src="slide" alt="">
        </swiper-slide>
        
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>

</div>
 
</template>

<script>
// import getHome from "@/api";
  export default {
    name: 'carrousel',
    props:['Swips'],
    data() {
      return {
        // ifs:true,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    
   
  }
</script>

<style lang="scss" scoped>

#Swi{
   
    height: 200px;
    margin-top: 50px;
    img{
       height: 100%;
       width: 100%;
    }
}

</style>
