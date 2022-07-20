<template>
  <div class="home">
      <el-container class="container_home">
        <el-header class="header">
          <div class="header_dev">
            <img src="../assets/logo.png" alt="">
            <span>电商物流管理系统</span>
          </div>

          <div class="header_right">
            <el-button>退出</el-button>
          </div>
        </el-header>
        <el-container >
          <el-aside width="200px" class="aside_home">
               <el-col :span="24">

              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                  </template>
                    <el-menu-item index="1-1">用户列表</el-menu-item>
                    <el-menu-item index="1-2">用户组</el-menu-item>
                </el-submenu>
              </el-menu>
          </el-col>
              
          </el-aside>
          <el-container>
            <el-main class="main">
                
            </el-main>
            <el-footer class="footer">Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  created(){
   
  }
  
}
</script>
<style scoped lang="scss">
  .container_home{
    height: 100%;
  }
  .header{
    background-color: rgb(21, 97, 97);
    display: flex;
    justify-content: space-between;
    .header_dev{
      color: aliceblue;
      font-size: 20px;
      display: flex;
      align-items: center;
    }
    .header_dev >img{
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }
    .header_right{
      display: flex;
      align-items: center;
      bottom{
        cursor: pointer;
      }
      
    }
  }
  .aside_home{
   
  }
  .main{
    background-color: aliceblue;
  }

  .footer{
    background-color: azure;
  }
</style>
