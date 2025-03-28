<script setup lang="ts">
interface ErrorProps {
    error: {
        statusCode: number;
        statusMessage?: string;
        message: string;
    }
}

const props = defineProps<ErrorProps>();

const handleError = () => {
    // Clear the error state using Nuxt's built-in composable
    clearError();
    // Navigate back to home page
    navigateTo('/', { replace: true });
};

// Compute a user-friendly error message
const errorMessage = computed(() => {
    switch (props.error.statusCode) {
        case 404:
            return 'Page not found';
        case 403:
            return 'Access denied';
        case 500:
            return 'Internal server error';
        default:
            return props.error.message || 'An error occurred';
    }
});

// Set page meta
useHead({
    title: `Error ${props.error.statusCode}`,
    meta: [
        { name: 'robots', content: 'noindex' }
    ]
});
</script>

<template>
    <main class="error-page">
        <div class="error-content">
            <h1 class="error-code">{{ error.statusCode }}</h1>
            <p class="error-message">{{ errorMessage }}</p>
            <p v-if="error.statusMessage" class="error-details">
                {{ error.statusMessage }}
            </p>
            <AppButton
                variant="primary"
                class="error-action"
                @click="handleError"
            >
                Return Home
            </AppButton>
        </div>
    </main>
</template>

<style scoped>
.error-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    background-color: var(--bg-primary);
    color: var(--text-primary);
}

.error-content {
    max-width: 32rem;
}

.error-code {
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 1rem;
}

.error-message {
    font-size: 1.5rem;
    margin: 0 0 1.5rem;
}

.error-details {
    color: var(--text-secondary);
    margin: 0 0 2rem;
}

.error-action {
    min-width: 10rem;
}
</style>
