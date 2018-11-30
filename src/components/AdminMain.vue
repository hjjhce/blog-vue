<template>
  <div id="blackhole-main">
    <el-container>
      <el-aside>
        <AdminNavMenu/>
      </el-aside>
      <el-container>
        <el-header class="admin-main-header">{{this.$route.name}}</el-header>
        <el-main>
          <AdminUser v-show="this.$route.name == 'AdminUser'"></AdminUser>
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import AdminNavMenu from "./AdminNavMenu.vue";
import AdminUser from "./AdminUser.vue";

export default {
  name: "AdminMain",
  components: {
    AdminNavMenu,
    AdminUser
  },
  data() {
    return {      
      message:"",
    };
  },
};


</script>


<style>
#blackhole-main .el-container {
  background-color: #21eaff;
}

#blackhole-main .el-aside {
  width: auto !important;
}

#blackhole-main header.admin-main-header {
  height: 30px !important;
}

</style>
