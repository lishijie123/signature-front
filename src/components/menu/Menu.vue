<script setup>
  import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
  import { reactive, ref} from 'vue';
  const collapsed = ref(false)
  const selectedKeys = ref(['1'])
  const isCollapsed = ref(true)
  const onOpenChange = ()=>{
    console.log('11111111111')
  }
</script>

<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @openChange="onOpenChange" :inlineCollapsed="isCollapsed">
      <a-menu-item key="1">
        <pie-chart-outlined />
        <span>业务首页</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>签署管理</span>
          </span>
        </template>
        <a-menu-item key="3"><span>文件发起</span></a-menu-item>
        <a-menu-item key="4"><span>模板发起</span></a-menu-item>
        <a-menu-item key="5"><span>签署任务</span></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>印章管理</span>
          </span>
        </template>
        <a-menu-item key="6">企业印章管理</a-menu-item>
        <a-menu-item key="8">个人印章管理</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<style scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
</style>