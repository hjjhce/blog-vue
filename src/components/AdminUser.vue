<template>
  <div id="admin-user">
    <AdminUserAdd></AdminUserAdd>
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
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  computed: {
    // tableData: function()
  },
  created() {
    this.$http({
      method: "GET",
      url: this.HOST + "/users?sign=" + this.$sign
    })
      .then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data;
      })
      .catch(error => {
        if (error.response) {
          this.errmsg = error.response.data.error.errmsg;
        } else if (error.request) {
          console.log(error.request);
        } else {
          this.errmsg = error.message;
        }
      });
  }
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

