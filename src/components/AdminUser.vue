<template>
  <div id="admin-user">
    <AdminUserAdd v-on:refresh-users="getUsers"></AdminUserAdd>
    <div class="error">{{ errmsg }}</div>
    <!-- <div>{{tableData}}</div> -->
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Email" prop="email"></el-table-column>
      <el-table-column label="Role" prop="role" :formatter="displayRoleName"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.ID)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.ID, scope.$index)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import AdminUserAdd from "./AdminUserAdd";

export default {
  name: "AdminUser",
  components: {
    AdminUserAdd
  },
  data() {
    return {
      errmsg: "",
      search: "",
      tableData: []
    };
  },
  methods: {
    displayRoleName(row, column, val) {
      let roleName;
      switch (val) {
        case 0:
          roleName = "管理员";
          break;
        case 1:
          roleName = "普通用户";
          break;
        default:
          roleName = "来自未来";
          break;
      }
      return roleName;
    },
    getUsers() {
      let vm = this;
      this.$http({
        method: "GET",
        url: vm.HOST + "/users?sign=" + vm.$sign
      })
        .then(res => {
          vm.tableData = res.data.data;
        })
        .catch(error => {
          if (error.response) {
            this.errmsg = error.response.data.error.errmsg;
          } else if (error.request) {
            console.log(error.request);
          } else {
            vm.errmsg = error.message;
          }
        });
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(id, index) {
      this.$confirm("是否确认删除该信息", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            method: "DELETE",
            url: this.HOST + "/users/" + id + "?sign=" + this.$sign
          })
            .then(res => {
              //不需要再请求接口，直接在tableData里删除该数据
              this.tableData.splice(index, 1);
            })
            .catch(error => {
              if (error.response) {
                if (error.response.headers.location) {
                  this.router.push({ path: error.response.headers.location });
                }
                this.errmsg = error.response.data.error.errmsg;
              } else if (error.request) {
                console.log(error.request);
              } else {
              }
            });
        })
        .catch(() => {
          console.log("another");
        });
    }
  },
  computed: {},
  created() {
    let vm = this;
    this.$http({
      method: "GET",
      url: vm.HOST + "/users?sign=" + vm.$sign
    })
      .then(res => {
        console.log(res.data.data);
        vm.tableData = res.data.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
          if (error.response.headers.location) {
            this.router.push({ path: error.response.headers.location });
          }
          this.errmsg = error.response.data.error.errmsg;
        } else if (error.request) {
          console.log(error.request);
        } else {
          vm.errmsg = error.message;
        }
      });
  },
  watch: {}
};
</script>

<style>
#admin-user .error {
  color: firebrick;
}

#admin-user .el-table th,
#admin-user .el-table tr {
  background-color: paleturquoise;
}
</style>

