
<template>
    <div class="layout">
        <Layout>
            <Header :style="{background: '#111111'}">
                <Menu  mode="horizontal" theme="dark" active-name="1" :style="{height: '63px',background: '#1e2320'}">
                    <div class="layout-logo">
                        <img src="../images/logo-2.jpg" alt="">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="2">
                            <Icon type="ios-navigate"></Icon>
                            售后管理
                        </MenuItem>
                        <MenuItem name="3" >
                            <Icon type="ios-keypad"></Icon>
                            系统管理
                        </MenuItem>                        
                        <MenuItem name="4" @click.native="loginout" :style="{border:'1px,soild',background: '#495060'}">
                            <Icon type="backspace-outline"></Icon>
                            退出
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0',color: '#111111'}">
                    <BreadcrumbItem>首页</BreadcrumbItem>
                    <BreadcrumbItem>我的位置</BreadcrumbItem>
                    <BreadcrumbItem>你的位置</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '800px', background: '#57a3f3'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: 'rgba(45,140,240,0.2)'}">
                            <Menu active-name="1-2" theme="primary" width="auto" :open-names="['1']" >
                                <Submenu name="1" v-for="list in NavList">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        {{list.name}}
                                    </template>
                                    <MenuItem name="1-1">技术支持人员</MenuItem>
                                    <MenuItem name="1-2">Option 2</MenuItem>
                                    <MenuItem name="1-3">Option 3</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        产品管理
                                    </template>
                                    <MenuItem name="2-1">Cetron AP Series</MenuItem>
                                    <MenuItem name="2-2">Cetron AC Series</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        后台管理         
                                    </template>
                                    <MenuItem name="3-1">Case基础设置</MenuItem>
                                    <MenuItem name="3-2">其他设置</MenuItem>
                                </Submenu>
                                <Submenu name="4">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        客户市场管理
                                    </template>
                                    <MenuItem name="3-1">市场管理</MenuItem>
                                    <MenuItem name="3-2">客户属性</MenuItem>
                                </Submenu>
                                <Submenu name="5">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        销售人员管理
                                    </template>
                                    <MenuItem name="3-1">销售人员</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                                 <Submenu name="6">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        系统日志
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" >
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
                        <Content :style="{padding: '24px', minHeight: '750px', background: '#f8f8f9'}">
                            Content
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center" :style="{color: '#444', background: 'rgba(45,140,240,.2)'}">Copyright 2019 by 武汉思创易控科技有限公司 All rights Reserved.</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
           return {
            NavList: [
              { name: '首页', url: '/home'},
              { name: '产品', url: '/product'},
              { name: '服务', url: '/service'},
              { name: '关于', url: '/about'}
            ]
        }
        },
        methods:{
            changeList(name) {
              
            },
            loginout() {
              this.$router.push({path: "/"});
            }
        }
    }
</script>
<style scoped>
    @import '../styles/home.css';
</style>