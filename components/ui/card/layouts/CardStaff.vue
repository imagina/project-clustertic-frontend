<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import StarSVG from '@/assets/svg/star.svg'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: number | string
  img?: string
  username?: string
  rating?: number
  numberJobs?: number | string
  location?: string
  price?: number | string
}>()
</script>

<!-- <template v-slot:before v-if="$slots.before">
  <slot name="before"></slot>
</template> -->
<template>
  <Card
    class="tw-p-5 tw-h-full !tw-rounded-2xl tw-flex tw-justify-between tw-flex-col tw-mt-16"
    :class="cn(props.class, 'tw-bg-white tw-relative')"
  >
    <div class="tw-justify-center tw-items-center tw-mb-1">
      <div class="img-container">
        <div
          :style="
            img
              ? {
                  backgroundImage: `url(${img})`,
                }
              : {}
          "
        ></div>
      </div>
      <div class="tw-px-3 tw-py-5 tw-grow tw-mt-16">
        <CardTitle class="tw-font-bold tw-text-center tw-text-xl tw-mb-1">
          <slot name="name"></slot>
        </CardTitle>
        <p
          class="tw-text-lg tw-font-base tw-text-center tw-text-blue-500 tw-mb-5"
        >
          {{ username }}
        </p>

        <slot name="tag"></slot>
      </div>
    </div>
    <!-- <Button type="button" class="tw-w-full tw-bg-primary-alt tw-mt-2">Ver perfil</Button> -->
  </Card>
</template>

<style lang="css" scoped>
.img-container {
  @apply tw-rounded-full tw-bottom-0  tw-h-14 tw-w-14 md:tw-h-28 md:tw-w-28 tw-p-1 tw-absolute tw-bg-white tw-top-0 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2;
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.15);

  & > div {
    @apply tw-h-full tw-w-full tw-bg-white tw-rounded-full;
    background-size: 100% 100%;
    background-image: url('@/assets/images/login-bg.png');
  }
}
.star.filled {
  color: hsla(40, 95%, 52%, 1);
}
.more-info {
  transform: translateX(-50%);
}
.user-img {
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.15);
}
.comment-icon {
  color: hsla(40, 95%, 52%, 1);
}
.circle-dollar-icon {
  color: hsla(157, 94%, 41%, 1);
}
</style>
