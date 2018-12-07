<template>
  <div id="blackhole-main">
    <el-container>
      <el-aside>
        <AdminNavMenu/>
      </el-aside>
      <el-container>
        <el-header class="admin-main-header">
          {{this.$route.name}}
          <el-button type="warning" size="small" @click="logout = true" class="logoutBtn">登出</el-button>
        </el-header>
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
      message: ""
    };
  },
  methods: {
    logout: function() {}
  }
};
</script>


<style>
#blackhole-main .el-container {
  margin: 0px 10px;
  background-color: paleturquoise;
}

#blackhole-main .el-aside {
  width: auto !important;
}

#blackhole-main header.admin-main-header {
  height: 30px !important;
}

#blackhole-main .logoutBtn {
  width: 60px;
  float: right;
  padding: 10px;
}
</style>
