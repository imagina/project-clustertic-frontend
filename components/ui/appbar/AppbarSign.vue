<script setup lang="ts">
import { ChevronsLeftIcon } from "lucide-vue-next";
const { locale } = useI18n()

</script>

<template>
  <div class="tw-p-4 tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-z-50">
    <div class="tw-px-10 tw-flex">
      <div class="tw-flex tw-grow-0 tw-items-center tw-basis-auto">
        <Button variant="outline">
          <ChevronsLeftIcon class="tw-text-primary"/>
        </Button>
      </div>

      <nav class="tw-flex-grow tw-flex tw-items-center tw-justify-end tw-mr-2 ">

      </nav>
      <div class="tw-flex tw-grow-0 tw-basis-auto tw-items-center">
        <select class="tw-bg-transparent tw-text-primary tw-border-0 tw-p-2" v-model="locale">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
