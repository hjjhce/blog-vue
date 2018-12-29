<template>
  <div id="blackhole-main">
    <el-container>
      <el-aside>
        <AdminNavMenu/>
      </el-aside>
      <el-container>
        <el-header class="admin-main-header">
          {{this.$route.name}}
          <el-button type="warning" @click="logoutClick" class="logoutBtn">登出</el-button>
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
    logoutClick: function() {
      this.$confirm("确认退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.logoutHandle();
      });
    },

    logoutHandle: function() {
      this.$http({
        method: "delete",
        url: this.HOST + "/users?sign=" + this.$sign,
        data: {}
      })
        .then(res => {
          this.router.push({ name: "Login" });
        })
        .catch(err => {
          this.$message({
            type: "error",
            message: "系统错误"
          });
        });
    }
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
