export default defineNuxtPlugin(() => {
    let lastMod = Date.now()

    if (process.dev) {
        setInterval(async () => {
            const res = await fetch('/api/_content/files')
            const file = await res.json()
            const newMod = file.lastModified

            if (newMod > lastMod) {
                lastMod = newMod
                reloadNuxtApp()
            }
        }, 2000)
    }
})