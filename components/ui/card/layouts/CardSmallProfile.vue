<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import StarSVG from '@/assets/svg/star.svg'
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
  <Card :class="cn(props.class, 'tw-bg-white')">
    <div class="tw-p-5 tw-h-full">
      <div class="tw-flex tw-justify-center tw-items-center tw-mb-1">
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
        <div class="tw-pl-7 tw-py-5 tw-grow">
          <CardTitle class="tw-font-bold tw-text-lg tw-mb-4">
            {{ name }}
            <span
              v-if="username"
              class="tw-ml-2 tw-font-light tw-text-blue-500"
            >
              @{{ username }}
            </span>
          </CardTitle>

          <slot name="tag"></slot>
          <p class="tw-text-base tw-font-semibold tw-mb-3">
            ${{ price }} por hora
          </p>
          <div class="tw-flex tw-gap-3 tw-mb-1">
            <div class="tw-flex">
              <StarSVG class="star filled !tw-h-full" />
              <p class="tw-mb-0 tw-ml-4 tw-text-sm">
                {{ rating?.toFixed(1) }} ({{ numberJobs }} trabajos)
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button type="button" class="tw-w-full">Ver perfil</Button>
      <div></div>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.img-container {
  @apply tw-rounded-md tw-bottom-0  tw-h-14 tw-w-14 md:tw-h-28 md:tw-w-28 tw-p-2;
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.15);

  & > div {
    @apply tw-h-full tw-w-full tw-bg-white tw-rounded-md;
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
