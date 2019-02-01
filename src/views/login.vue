<template>
    <div login-warp>
    <div backgroundImg>
      <img src="../images/UgY18DW.jpg" alt="">
    </div>
    <div class="login">
      <div class="login-con">
        <div class="form-con">
          <Form ref="formInline" :model="formInline"  :rules="ruleInline">
            <FormItem prop="userName">
              <Input type="text" v-model="formInline.userName"  placeholder="请输入用户名">
              <span slot="prepend">
                <Icon :size="20" type="ios-person-outline"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="passWord">
              <Input type="password"  v-model="formInline.passWord" placeholder="请输入密码">
              <span slot="prepend">
                <Icon :size="16" type="ios-lock-outline"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="VerificationCode">
              <div class="vali-code-item">
                <Input type="text"  v-model="formInline.VerificationCode" autofocus class="vali-input" placeholder="请输入验证码"></Input>
                <img v-if="imgUrl" :src="imgUrl" alt="验证码"  style="height:32px;">
              </div>
            </FormItem>
            <FormItem>
              <Button class="btn-login"  @click="handleSubmit('formInline')"  type="primary" long>登录</Button>
              <span class="title-forget" >忘记密码</span>
              <span class="title-register" >账号注册</span>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    <div recordNumber>
      Copyright 2018 by 武汉思创易控科技有限公司 All rights Reserved. 
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    userName: '',
                    passWord: '',
                    VerificationCode: ''
                },
                ruleInline: {
                    userName: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    VerificationCode: [
                        { required: true, message: '验证码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登陆成功!');
                        this.$router.push('')
                    } else {
                        this.$Message.error('登陆失败!');
                    }
                })
            },
            home_index() {
              debugger;
				      this.$router.push({ name: 'home' });
			      }
        }
    }
</script>
<style lang="less">
  @import '../styles/login.less';

</style>


