<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: number | string
  name?: string
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
  <Card class="" :class="cn(props.class, 'tw-bg-white  tw-relative')">
    <div
      class="tw-px-5 lg:tw-px-16 tw-pt-10 tw-flex tw-justify-between tw-flex-col"
    >
      <div class="lg:tw-flex tw-justify-center tw-items-center tw-mb-1">
        <div
          class="tw-basis-auto tw-flex-shrink-0 tw-flex-grow-0 tw-flex tw-justify-center"
        >
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
        </div>
        <div class="lg:tw-pl-7 tw-py-5 tw-grow">
          <CardTitle class="tw-font-bold tw-text-center tw-text-xl tw-mb-1">
            {{ name }}
          </CardTitle>
          <p
            v-if="username"
            class="tw-text-lg tw-font-base tw-text-center tw-text-blue-500 tw-mb-5"
          >
            {{ username }}
          </p>

          <slot name="tag"></slot>
          <div class="tw-flex tw-justify-center">
            <Button type="button" class="tw-w-1/2 tw-text-center tw-mt-4">
              Ver perfil
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.img-container {
  @apply tw-rounded-full tw-bottom-0 tw-p-1 tw-h-28 tw-w-28 md:tw-h-36 md:tw-w-36;
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.15);

  & > div {
    @apply tw-w-full tw-h-full tw-bg-white tw-rounded-full;
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
