<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in items" :key="item.id" >        
      <h3><img v-bind:src="item.value" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "hello",
          value:
            "https://www.esrgear.com/wp-content/uploads/2018/11/banner-metal-frame-case1-1.jpg"
        },
        {
          id: 2,
          title: "hello",
          value:
            "https://www.esrgear.com/wp-content/uploads/2018/11/banner-metal-kickstand-case1.jpg"
        },
        { id: 3, title: "hello", value: "/x3.png" }
      ]
    };
  }
};
</script>


<style>
.el-carousel__container {
  height: 800px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item h3 img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>