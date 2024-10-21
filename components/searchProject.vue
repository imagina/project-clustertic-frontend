<script setup lang="ts">
import { CompassIcon } from "lucide-vue-next";

const search = ref("");

</script>

<template>
    <div class="search-project-bg tw-bg-black">
        <div class="tw-container tw-flex  tw-justify-center tw-py-16">
            <div class="tw-basis-2/3 lg:tw-basis-3/6">

                <h3 class="tw-font-extralight tw-text-white tw-text-center tw-text-[30px] tw-mb-14">¿Que estas buscando?</h3>
                <InputCPA 
                  outlined
                  class="input-dark input-custom-outline tw-mb-3 search-input-border"
                  v-model="search"
                  label="Explorar proyectos de..."
                >
                  <template v-slot:prepend>
                    <CompassIcon class="!tw-text-primary" />
                  </template>
                </InputCPA>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-project-bg{
    background-image: url("@/assets/images/search-project-bg.png");
    background-size: 100% 100%;
    background-position: center center;
}
:deep(.q-field__control) {
  @apply !tw-border-primary !tw-border;
}
</style>