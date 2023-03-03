import tailwindTypography from '@tailwindcss/typography'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/content',
        '@nuxt/image-edge',
        '@nuxtjs/plausible',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt'
    ],

    content: {
        markdown: {
            tags: {
                h2: 'AppHeading2',
                h3: 'AppHeading3',
                h4: 'AppHeading4'
            }
        },

        highlight: {
            // OR
            theme: {
              // Default theme (same as single string)
              default: 'github-dark',
              // Theme used if `html.dark`
              dark: 'github-dark',
              // Theme used if `html.sepia`
              sepia: 'monokai'
            }
        }
    },

    colorMode: {
        classSuffix: ''
    },

    plausible: {
        apiHost: 'https://a.521dimensions.com'
    },

    tailwindcss: {
        config: {
            plugins: [tailwindTypography]
        },
        cssPath: '~/assets/css/tailwind.css',
    }
})
