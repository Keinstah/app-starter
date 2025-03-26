// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierRecommended from 'eslint-config-prettier'

export default withNuxt({
    ...prettierRecommended,
})
