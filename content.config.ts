import {defineCollection, defineContentConfig, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            // Specify the type of content in this collection
            type: 'page',
            /**
             * Reference: https://github.com/nuxt/content/issues/2991#issuecomment-2598201618
             */
            // Load every file inside the `content` directory
            source: '**/*',
            schema: z.object({
                date: z.string(),
            })
        })
    }
})
