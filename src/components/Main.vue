<template>
<div>
    <Banner/>
    <el-container>
        <el-main>
            <Content/>
        </el-main>
        <el-aside>
            <Rside/>
        </el-aside>
    </el-container>
    <el-footer></el-footer>
</div>
</template>


<script>
import Banner from "./Banner.vue";
import Content from "./Content.vue";
import Rside from "./Rside.vue";

export default {
  name: "Main",
  data() {
    return {
      message: ""
    };
  },
  components: {
    Banner,
    Content,
    Rside
  }
};
</script>


<style>
.el-main {
  padding: 0px;
  margin-right: 10px;
}

.el-aside {
  width: 390px !important;
}
</style>
