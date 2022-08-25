<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img id='logo' src="../assets/logo.png" alt="">
      </div>
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="0px" class="login_in">
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" type="text" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" prefix-icon="el-icon-thumb"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {authenticate} from '../common/email-api.js'

export default {
  name: 'login',
  data () {
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('email不能为空'))
      } else if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
        return callback(new Error('email格式有误'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        password: 'ycdwceurvxombefe',
        email: '1053595189@qq.com'
      },
      rules: {
        password: [
          { validator: validatePass }
        ],
        email: [
          { validator: checkEmail }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.ruleForm.password = ''
          // this.ruleForm.email = ''
          const user = {
            email: this.ruleForm.email,
            password: this.ruleForm.password
          }
          authenticate(user).then(err => {
            // console.log('---------------------')
            if (!err) {
              this.$store.dispatch('saveUser', user).then(user => {
                this.$router.push({path: '/home'})
              })
            } else {
              this.$message.error(err)
            }
          })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped >
  .login_container {
    background-color: #42b983;
    height: 100%;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .btns {
    display: flex;
    justify-content: flex-end;

  }

  .login_in {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>