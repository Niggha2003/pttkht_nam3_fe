<script setup>
import ContentComponent from '@/components/ContentComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex">
    <div class="" style="width: auto">
      <sidebar-component></sidebar-component>
    </div>
    <div class="flex-grow-1">
      <ContentComponent>
        <router-view></router-view>
      </ContentComponent>
    </div>
  </div>
</template>
