<template>
  <div
    class="dark-layout-bg tw-min-h-screen tw-bg-secondary tw-text-gray-900 tw-flex tw-justify-center"
  >
    <AppbarSign />
    <div
      class="tw-max-w-screen-xl tw-m-0 sm:tw-m-10 sm:tw-rounded-lg tw-flex tw-justify-center tw-flex-1"
    >
      <slot />
    </div>
  </div>
</template>
