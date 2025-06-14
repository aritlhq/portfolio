import {defineConfig, presetUno} from 'unocss'

export default defineConfig({
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
    },
    presets: [
        presetUno(),
    ],
})
