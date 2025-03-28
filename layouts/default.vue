<template>
    <div :class="['app-container', theme]">
        <main class="main-content">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app';

const appStore = useAppStore();
const theme = computed(() => appStore.theme);

// Initialize app state
onMounted(() => {
    appStore.initializeApp();
});
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
    padding: 1rem;
}
</style>
