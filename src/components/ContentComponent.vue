<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <header-component></header-component>
  <div>
    <slot></slot>
  </div>
  <footer-component></footer-component>
</template>
