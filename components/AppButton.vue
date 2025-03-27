<template>
    <button
        :class="[
            'app-button',
            `app-button--${variant}`,
            { 'app-button--loading': loading }
        ]"
        :disabled="disabled || loading"
        @click="$emit('click')"
    >
        <span v-if="loading" class="loader" />
        <slot v-else />
    </button>
</template>

<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary' | 'danger'
    loading?: boolean
    disabled?: boolean
}

defineProps<Props>()
defineEmits<{
    (e: 'click'): void
}>()
</script>

<style scoped>
.app-button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: 500;
    transition: all 0.2s;
}

.app-button--primary {
    background-color: var(--primary-color);
    color: white;
}

/* Add other styles */
</style>