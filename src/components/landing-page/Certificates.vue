<script setup>
import certificateData from "../../assets/data/certificate-data.json"
import FileCertificate from "../../assets/icones/FileCertificate.vue";
</script>

<template>
  <div
      v-for="certificate in certificateData.data"
      :key="certificate.title"
      class="mt-8"
  >
    <h2 class="text-xl font-bold mb-4 lg:text-2xl">{{ certificate.title }}</h2>

    <div class="grid grid-cols-2 gap-3">
      <div
          v-for="detail in certificate.data"
          :key="detail.title"
          class="h-full"
      >
        <NCard :title="detail.title" size="small" class="h-full">
          <template #cover>
            <NImage
                class="h-40 w-full"
                object-fit="cover"
                :src="detail.image"
            />
          </template>

          <div class="flex flex-col justify-between h-full">
            <p>{{ detail.obtained }}</p>
            <div>
              <a :href="detail.proof" class="text-white hover:text-white">
                <NButton
                    class="mt-4 w-fit"
                    dashed
                    type="primary"
                >
                  <div class="flex items-center gap-2">
                    <span class="text-white font-bold">View Proof</span>
                    <NIcon class="text-white pb-[0.30rem]">
                      <FileCertificate class="text-lg"/>
                    </NIcon>
                  </div>
                </NButton>
              </a>
            </div>
          </div>
        </NCard>
      </div>
    </div>
  </div>
</template>