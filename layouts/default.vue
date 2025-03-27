<template>
    <div :class="['app-container', theme]">
        <AppHeader />
        <main class="main-content">
            <slot />
        </main>
        <AppFooter />
        <AppNotifications />
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const theme = computed(() => appStore.theme)

// Initialize app state
onMounted(() => {
    appStore.initializeApp()
})
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

/* Theme variables */
.light {
    --bg-primary: #ffffff;
    --text-primary: #1a1a1a;
}

.dark {
    --bg-primary: #1a1a1a;
    --text-primary: #ffffff;
}
</style>