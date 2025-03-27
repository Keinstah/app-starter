import withNuxt from './.nuxt/eslint.config.mjs'
import prettierRecommended from 'eslint-config-prettier'

export default withNuxt({
    ...prettierRecommended,
    rules: {
        'vue/multi-word-component-names': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/define-macros-order': ['error', {
            order: ['defineProps', 'defineEmits', 'defineExpose', 'withDefaults'],
        }],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/no-unused-refs': 'error',
        'vue/no-useless-v-bind': 'error',
    },
})