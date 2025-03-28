<template>
    <button 
        class="btn btn-outline"
        @click="appStore.toggleTheme()"
    >
        {{ appStore.isDark ? 'Light Mode' : 'Dark Mode' }}
    </button>
</template>

<script setup lang="ts">
const appStore = useAppStore();
</script>