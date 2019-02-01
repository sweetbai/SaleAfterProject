
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 1920px;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
    height: 1920px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider hide-trigger :style="{background: 'rgba(45,140,240,0.2)'}">
                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            我的工作台
                        </template>
                        <MenuItem name="1-1">工作台1</MenuItem>
                        <MenuItem name="1-2">工作台2</MenuItem>
                        <MenuItem name="1-3">工作台3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            客户档案
                        </template>
                        <MenuItem name="2-1">大客户</MenuItem>
                        <MenuItem name="2-2">大大大客户</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {

        },
        methods:{
            test(name) {
              
            },
            test2() {
              this.$router.push({path: "/register"});
            }
        }
    }
</script>