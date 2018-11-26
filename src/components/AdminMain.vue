<template>
<div id="blackhole-main">
    <el-container>
        <el-aside>
            <AdminNavMenu/>
        </el-aside>
        <el-container>
            <el-header>Admin</el-header>
            <el-main></el-main>
        </el-container>    
    </el-container>
</div>
</template>


<script>
import AdminNavMenu from "./AdminNavMenu.vue";

export default {
  name: "AdminMain",
  components: {
    AdminNavMenu
  },
  data() {
    return {
      message: ""
    };
  }
};
</script>


<style>
#blackhole-main .el-container {
  background-color: aquamarine;
}
</style>
