<template>
    <div id="admin-login">
        <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
            
                <el-form-item label="Name" >            
                    <el-input v-model="form.name"></el-input>        
                </el-form-item>
            
                <el-form-item label="Password" >                    
                    <el-input v-model="form.name"></el-input>                
                </el-form-item>
                <div class="error">{{errmsg}}</div>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">LOGIN</el-button>                
            </el-form-item>
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
    onSubmit: function() {}
  },
  watch: {
    // onSubmit: function() {}
  }
};
</script>


<style>
#admin-login {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: 1px solid #21eaff;
  padding: 10px;
}

#admin-login .el-form-item {
  margin-bottom: 0px;
}

#admin-login .el-input {
  padding: 20px 0px;
}

#admin-login label {
  padding: 20px 0px;
}

#admin-login button {
  width: 120px;
}
</style>

