<template>
  <div id="admin-user">
    <UserAdd v-on:refresh-users="getUsers"></UserAdd>
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
import request from "@/common/request";
import UserAdd from "./UserAdd";

export default {
  name: "User",
  components: {
    UserAdd
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
      let _this = this;
      request
        .get("/users")
        .then(
          function(res) {
            console.log(res.data);
            _this.tableData = res.data.data;
          },
          function(err) {
            _this.errmsg = err.response.data.msg;
          }
        )
        .catch(err => {
          console.log(err);
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
      }).then(() => {
        let _this = this;
        request
          .delete("/users/" + id, { id: id })
          .then(
            function(res) {
              _this.tableData.splice(index, 1);
            },
            function(err) {
              _this.errmsg = err.data.msg;
            }
          )
          .catch(console.log(err));
      });
    }
  },
  computed: {},
  created() {
    let _this = this;
    request
      .get("/users")
      .then(
        function(res) {
          _this.tableData = res.data.data;
        },
        function(err) {
          _this.errmsg = err.data.msg;
        }
      )
      .catch(err => {
        console.log(err);
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

