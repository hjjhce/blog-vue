<template>
    <div>
        <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="search">
        </el-input>
    </div>
</template>


<script>
export default {
  name: "Rside",
  data() {
    return {
      search: "hello"
    };
  }
};
</script>

<style>
.el-input {
  width: 90%;
  padding: 30px 0px;
}
</style>

