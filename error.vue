<script setup lang="ts">
defineProps({
    error: Object,
})

const handleError = () => {
    clearError()
    navigateTo('/')
}
</script>

<template>
    <div class="error-page">
        <h1>{{ error.statusCode }}</h1>
        <p>{{ error.message }}</p>
        <button @click="handleError">Return Home</button>
    </div>
</template>