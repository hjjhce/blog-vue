<template>
  <div id="blackhole-main">
    <el-container>
      <el-aside>
        <NavMenu/>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          {{this.$route.name}}
          <el-button type="warning" @click="logoutClick" class="logoutBtn">登出</el-button>
        </el-header>
        <el-main>
          <User v-show="this.$route.name == 'AdminUser'"></User>
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import NavMenu from "./NavMenu.vue";
import User from "./user/User.vue";
import request from "@/common/request.js";

export default {
  name: "AdminMain",
  components: {
    NavMenu,
    User
  },
  data() {
    return {
      errmsg: ""
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
      let _this = this;
      request.get("/users/logout", {}).then(
        function(res) {
          _this.router.push({ name: "Login" });
        },
        function(err) {
          console.log(err);
          this.errmsg = err.data.msg;
        }
      );
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

#blackhole-main header.main-header {
  height: 30px !important;
}

#blackhole-main .logoutBtn {
  width: 60px;
  float: right;
  padding: 10px;
}
</style>
