<template>
  <div class="hello">
      <!-- <Head><button @click="but">返回</button></Head> -->
      <ul>
        <li v-for="(dele,index) in msg" :key="index">
          <span>{{dele}}</span>
          <button @click="deletes(index)">删除</button>
        </li>
      </ul>
   
  </div>
</template>

<script>
import Head from "@/base/Head";
export default {
  name: "my",
  data() {
    return {
      msg: ["第一列表", "第二列表", "第三列表", "第四列表", "第五列表", "第六列表"]
    };
  },

  //  components: {

  //    Head:Head
  //    },
  methods: {
    deletes(index) {
      this.msg.splice(index, 1);
    }
  }
};
</script>

<style scoped>
ul {
  width: 200px;
  background: #666;

  margin: 0 auto;
}
li {
  height: 70px;
  width: 200px;
  text-decoration: none;
  list-style: none;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  /* display: flex; */
  position: relative;
}
li:hover{
  border-bottom:1px solid #000;
}
button {

  margin-top: 10px;
  width: 40%;
  height: 50px;
  /* margin-top: 10px; */
  /* height: 100px; */
  /* display: inline-block; */
  margin-left: 20px;
  color:#000;
  background: #fff;
  border-radius:50%;
  outline: none; 
}
span {
  /* height: 50px; */
  width: 40%;
  color: #fff;
  text-align: center;
  /* margin:0 auto; */
  display: inline-block;
}
</style>


