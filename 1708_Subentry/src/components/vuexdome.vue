<template>
    <div class="dome">

      <button @click="increment">+</button>
      <span>{{count}}</span>
      
      <button >-</button>
        <!-- {{names}} -->
        <!-- {{username}} -->
  
    </div>
  
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex';

export default {
  name: 'dome',
  data () {
    return {
        // count:this.$store.state.count
        name:"dome",
        haha:'10'
    }
  },
  created(){
  
  },
  methods:{
      
      ...mapMutations([ //直接调用matation内的方法
        //  'INCREMENT',
        // 'DECREMENT'
      ]),   
     increment(){
        this.$store.dispatch("increment",this.haha)//传参方法
        // this.$store.commit('INCREMENT',{name:this.haha})

        // this.$store.commit({
        //     type:'increment',
        //     name:this.name,
            
        // })
        

     },
    //  decrement() {
    //     this.$store.dispatch("decrement")
    //  },
    //  ...mapActions({ //调用 action里的方法  
    //      increment: 'increment', 在调用中传参
    //      decrement:'decrement'
    //  }),
     
  },
  computed:{
      //获取数据1
    // count(){
    //     return this.$store.state.count
    // },
    // names(){
    //     return this.$store.state.name
    // },
    //获取数据2
    ...mapState({
        count:state=>state.count,
        // names:state=>state.name,
        // username:state=>state.user.username,
        
    }),
    //获取数据3
    // ...mapState(['count'])
  },
  components: {
    
     }
}
</script>

<style lang="scss" scoped >
  span{
      font-size:50px;
  }
</style>
