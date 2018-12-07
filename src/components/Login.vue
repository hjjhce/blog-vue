<template>
  <div id="admin-login">
    <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
      <h3>Admin</h3>
      <!-- <el-form-item label="Email"> -->
      <el-input v-model="form.email" placeholder="Email"></el-input>
      <!-- </el-form-item> -->
      <!-- <el-form-item label="Password"> -->
      <el-input type="password" v-model="form.password" placeholder="Password"></el-input>
      <!-- </el-form-item> -->
      <!-- <el-form-item> -->
      <div class="error">{{errmsg}}</div>
      <el-button type="primary" @click="onSubmit">LOGIN</el-button>
      <!-- </el-form-item> -->
    </el-form>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      labelPosition: "right",
      form: {
        name: "",
        password: ""
      },
      errmsg: ""
    };
  },
  methods: {
    onSubmit: function() {
      this.$http({
        method: "POST",
        url: this.HOST + "/login?sign=" + this.$sign,
        data: {
          sign: this.$sign,
          email: this.form.email,
          password: this.form.password
        }
      })
        .then(res => {
          this.router.push({ name: "AdminMain" });
        })
        .catch(error => {
          if (error.response) {
            this.errmsg = error.response.data.error.errmsg;
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
        });
    }
  },
  watch: {}
};
</script>


<style>
#admin-login {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  /* border: 1px solid #21eaff; */
  padding: 10px;
}

#admin-login .el-form-item {
  margin-bottom: 0px;
}

#admin-login .el-input {
  padding: 10px 0px;
  margin-right: 20px;
}

#admin-login label {
  padding: 20px 10px;
}

#admin-login button {
  width: 300px;
  margin-top: 20px;
}

#admin-login .error {
  color: firebrick;
}
</style>

