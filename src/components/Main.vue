<template>
    <el-container>
        <el-main>
            <Content/>
        </el-main>
        <el-aside>
            <Rside/>
        </el-aside>
    </el-container>
</template>


<script>
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
  width: 350px !important;
}
</style>
