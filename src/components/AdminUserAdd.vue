<template>
  <div id="admin-user-add">
    <el-button type="primary" size="small" @click="dialogFormVisible = true">新增用户</el-button>
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules">
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="form.email" autocomplete="off" class="user-add-input"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.username" autocomplete="off" :span="6"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.mobile" autocomplete="off" :span="6"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="pwd">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.checkpwd" autocomplete="off" prop="checkpwd"></el-input>
        </el-form-item>
        <el-form-item label="权限" :label-width="formLabelWidth">
          <el-select v-model="form.role" placeholder="请选择用户权限">
            <el-option label="管理员" value="0"></el-option>
            <el-option label="普通用户" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
      <div class="error">{{errmsg}}</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AdminUserAdd",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        email: "",
        password: "",
        role: ""
      },
      rules: {},
      errmsg: "",
      formLabelWidth: "80px"
    };
  },
  methods: {
    onSubmit: function() {
      this.$http({
        method: "POST",
        url: this.HOST + "/users?sign=" +this.$sign,
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded"
        // },
        data: {
          name: this.form.username,
          email: this.form.email,
          mobile: this.form.mobile,
          password: this.form.password,
          checkpwd: this.form.checkpwd,
          Role: parseInt(this.form.role)
        }
        // transformRequest: [
        //   function(data) {
        //     let ret = "";
        //     for (let it in data) {
        //       ret +=
        //         encodeURIComponent(it) +
        //         "=" +
        //         encodeURIComponent(data[it]) +
        //         "&";
        //     }
        //     return ret;
        //   }
        // ]
      })
        .then(res => {
          this.dialogFormVisible = false;
          console.log(res.data);
        })
        .catch(error => {
          if (error.response) {
            this.errmsg = error.response.data.error.errmsg;
            console.log(error.response);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
        });
    }
  }
};
</script>


<style>
#admin-user-add {
  text-align: left;
  margin-bottom: 5px;
}

#admin-user-add .el-dialog {
  width: 40%;
}

#admin-user-add .el-dialog__body form {
  width: 60%;
  margin-left: 20%;
}

#admin-user-add .error {
  color: firebrick;
}
</style>


