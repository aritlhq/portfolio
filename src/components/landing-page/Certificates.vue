<script setup>
import {ref} from 'vue'
import certificateData from "../../assets/data/certificate-data.json"
import FileCertificate from "../../assets/icones/FileCertificate.vue";
import CloseRound from "../../assets/icones/CloseRound.vue";

const showModal = ref(false)
const selectedDetail = ref(null)

function openModal(detail) {
  selectedDetail.value = detail
  showModal.value = true
}
</script>


<template>
  <div
      v-for="certificate in certificateData.data"
      :key="certificate.title"
      class="mt-8"
  >
    <h2 class="text-xl font-bold mb-4 lg:text-2xl">{{ certificate.title }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div
          v-for="detail in certificate.data"
          :key="detail.title"
          class="h-full"
      >
        <NCard :title="detail.title" size="small" class="h-full">
          <template #cover>
            <NImage
                lazy
                class="h-38 w-full"
                object-fit="cover"
                :src="detail.image"
            />
          </template>

          <div class="flex flex-col justify-between h-full">
            <p>{{ detail.obtained }}</p>
            <div class="flex justify-between items-center gap-2 mt-2">
              <a :href="detail.proof" class="text-emerald no-underline">
                <NButton dashed color="#f3ecd5">
                  <div class="flex gap-2 items-center">
                    <p class="text-white font-semibold text-md md:text-lg">View Proof</p>
                    <NIcon class="mb-2 text-white">
                      <FileCertificate class="text-lg"/>
                    </NIcon>
                  </div>
                </NButton>
              </a>

              <NButton @click="openModal(detail)" color="#f3ecd5" class="font-semibold text-md md:text-lg">
                See Details
              </NButton>
            </div>
          </div>
        </NCard>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <NModal v-model:show="showModal" transform-origin="center">
    <NCard
        :title="selectedDetail?.title"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        class="w-[500px]"
        :style="{
    '--n-color-modal': '#18181c',
    '--n-text-color': 'white'
  }"
    >
      <template #header-extra>
        <NIcon @click="showModal = false">
          <CloseRound class="text-xl"/>
        </NIcon>
      </template>

      <div v-if="selectedDetail">
        <p class="mb-4">{{ selectedDetail.description }}</p>
      </div>

    </NCard>
  </NModal>

</template>
