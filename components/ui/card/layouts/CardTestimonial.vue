<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: number | string
  name?: string
  img?: string
  date?: string
  rating?: number
}>()
</script>

<!-- <template v-slot:before v-if="$slots.before">
  <slot name="before"></slot>
</template> -->
<template>
  <Card class="tw-mt-20" :class="cn(props.class, 'tw-bg-white  tw-relative')">
    <div class="tw-p-5 tw-h-full tw-flex tw-justify-between tw-flex-col">
      <div class="tw-flex tw-justify-center tw-items-center tw-mb-1">
        <div
          class="tw-h-full tw-w-14 md:tw-w-28 tw-flex-auto tw-flex-shrink-0 tw-flex-grow-0"
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
        <div class="tw-pl-7 tw-py-5 tw-grow">
          <CardTitle class="tw-font-bold tw-text-lg tw-mb-4">
            {{ name }}
          </CardTitle>

          <div class="tw-text-sm tw-font-light tw-mb-3">
            <slot name="description">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              viverra felis elit, eget sagittis mi lobortis sed. Mauris iaculis,
              sem ut tincidunt vulputate, dolor nulla imperdiet ex, id dignissim
              risus nisl sed diam. Duis ac dictum leo. Suspendisse luctus tortor
              nisl, quis imperdiet est suscipit nec. Ut tincidunt et ante et
              vehicula. orem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec viverra felis elit, eget sagittis mi lobortis sed. Mauris
              iaculis, sem ut tincidunt vulputate, dolor nulla imperdiet ex, id
              dignissim risus nisl sed diam. Duis ac dictum leo. Suspendisse
              luctus tortor nisl, quis imperdiet est suscipit nec. Ut tincidunt
              et ante et vehicula.
            </slot>
          </div>
          <div class="tw-flex tw-justify-between tw-gap-3 tw-mb-1">
            <div class="tw-flex tw-items-center">
              <CalendarIcon class="tw-mr-2" :size="16" />
              <p class="tw-mb-0">{{ date }}</p>
            </div>
            <div class="tw-flex">
              <!-- <StarSVG class="star filled !tw-h-full" />
              <p class="tw-mb-0 tw-ml-4 tw-text-sm">
                {{ rating?.toFixed(1) ?? '0.0' }}
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.img-container {
  @apply tw-rounded-full tw-bottom-0 tw-p-1 tw-h-14 tw-w-14 md:tw-h-28 md:tw-w-28 tw-absolute tw-top-0  -tw-translate-y-1/2 tw-bg-white;
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
