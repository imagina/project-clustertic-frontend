<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  MessageSquareTextIcon,
  CircleDollarSignIcon,
  FlagIcon,
} from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: string
  name?: string
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
    <div class="tw-p-5">
      <div class="tw-flex tw-mb-1">
        <div class="img-container">
          <div class="tw-h-full tw-w-full tw-bg-white tw-rounded-md"></div>
          <Button
            type="button"
            variant="outline"
            class="tw-border-none profile-btn !tw-p-3"
          ></Button>
        </div>
        <div class="tw-pl-7 tw-py-5 tw-grow">
          <CardTitle class="tw-font-bold tw-text-lg tw-mb-4">
            {{props.name}}
            <span class="tw-ml-2 tw-font-light tw-text-blue-500">
              @{{props.username}}
            </span>
          </CardTitle>

          <div class="tw-flex tw-mb-3">
            <FlagIcon class="flag-icon tw-mr-2" :size="20" />
            <p>{{ props.location }}</p>
          </div>
          <p class="tw-text-base tw-font-semibold tw-mb-3">
            ${{ props.price }} por hora
          </p>
          <div class="tw-flex tw-gap-3 tw-mb-1">
            <div class="tw-flex">
              <RatingIndicator
                starClass="tw-text-base tw-mr-1"
                :rating="props.rating"
              />
              <p class="tw-mb-0 tw-ml-4 tw-text-sm">
                {{ props.rating?.toFixed(1) }} ({{ props.numberJobs }} trabajos)
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
    background-size: 100% 100%;
    background-image: url('@/assets/images/login-bg.png');
  }
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
