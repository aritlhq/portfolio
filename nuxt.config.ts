import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    build: {
        /**
         * Reference: https://github.com/tusen-ai/naive-ui/issues/6682#issuecomment-2688625916
         */
        transpile: ['naive-ui', 'vueuc']
    },
    content: {
        watch: {
            enabled: true,
        },
    },
    modules: ['@nuxt/content', 'nuxtjs-naive-ui', '@unocss/nuxt'],
    vite: {
        plugins: [
            AutoImport({
                imports: [
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar',
                            'useCard'
                        ]
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            })
        ]
    },
})