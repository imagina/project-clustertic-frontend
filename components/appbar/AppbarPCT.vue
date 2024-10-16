<script setup lang="ts">

import AppbarBtn from './AppbarBtn.vue';
</script>

<template>
  <div class="md:tw-bg-blue-50 tw-bg-red-500 tw-p-5">
    <div class="tw-container tw-flex">

      <div class="tw-flex tw-items-center tw-basis-auto">
        <img class="tw-h-14 tw-w-14" src="@/assets/images/logo.svg" alt="Mi SVG">
        <div class="tw-ml-1">
          <p class="tw-m-0 tw-leading-3">CLUSTER</p>
          <p class="tw-m-0 tw-leading-3">TECNOLÓGICO</p>
          <p class="tw-m-0 tw-leading-3">DEL TOLIMA</p>
        </div>
      </div>

      <div class="tw-flex  tw-basis-10/12">
        <AppbarBtn></AppbarBtn>
      </div>
    </div>
  </div>
</template>
