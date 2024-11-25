<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  MessageSquareTextIcon,
  CircleDollarSignIcon,
  FlagIcon,
} from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const emits = defineEmits<{
  (event: 'onSelectProposal', value: number): void
}>()

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: number
  rating?: number
  amount?: number
  deliveryDays?: number
  selected?: boolean
}>()

function handleSelectProposal() {
  emits('onSelectProposal', props.id)
}
</script>

<!-- <template v-slot:before v-if="$slots.before">
  <slot name="before"></slot>
</template> -->
<template>
  <Card
    :class="
      cn(
        props.class,
        'tw-mb-2 tw-cursor-pointer proposal-card',
        props.selected ? 'proposal-selected' : '',
      )
    "
    @click="handleSelectProposal"
  >
    <div class="tw-p-5">
      <div class="tw-flex tw-mb-10">
        <div class="user-img tw-rounded tw-w-20 tw-h-20 tw-bg-secondary">
          img
        </div>
        <div class="tw-pl-7 tw-grow">
          <div class="tw-flex tw-mb-1">
            <CardTitle class="tw-font-bold tw-text-xl">
              <slot name="name">Titulo de ejemplo</slot>
              <span class="tw-ml-3 tw-font-light tw-text-blue-500">
                <slot name="username">@titulo_de_ejemplo</slot>
              </span>
            </CardTitle>
            <div class="tw-grow"></div>
            <p class="tw-font-bold tw-text-xl tw-mb-0">
              ${{ props.amount }} USD
            </p>
          </div>
          <div class="tw-flex tw-gap-3 tw-mb-1">
            <div class="tw-flex">
              <RatingIndicator
                starClass="tw-text-base tw-mr-1"
                :rating="props.rating"
              />
              <p class="tw-mb-0 tw-ml-3 tw-text-sm">
                {{ props.rating?.toFixed(1) }}
              </p>
            </div>
            <div class="tw-flex">
              <MessageSquareTextIcon class="comment-icon tw-mr-2" :size="20" />
              <p>50</p>
            </div>
            <div class="tw-flex">
              <CircleDollarSignIcon
                class="circle-dollar-icon tw-mr-2"
                :size="20"
              />
              <p>50</p>
            </div>
            <div class="tw-flex">
              <div
                class="comment-icon tw-rounded-full tw-border-dashed tw-border-blue-500 tw-border-spacing-80 tw-border-2 tw-h-5 tw-w-5 tw-mr-2"
                :size="20"
              />
              <p>50</p>
            </div>
            <div class="tw-flex">
              <FlagIcon class="flag-icon tw-mr-2" :size="20" />
              <p>50</p>
            </div>
            <div class="tw-grow"></div>
            <p>En {{ props.deliveryDays }} Dia(s)</p>
          </div>
          <p class="tw-text-base tw-font-semibold">
            <slot name="subtitle">
              We are a team that is passionate about technology!
            </slot>
          </p>
        </div>
      </div>
      <p class="lg:tw-w-2/3">
        <slot name="description"></slot>
      </p>
    </div>
    <CardFooter>
      <div class="tw-flex">
        <div class="tw-flex"></div>
      </div>
    </CardFooter>
  </Card>
</template>

<style lang="css" scoped>
.proposal-card:hover,
.proposal-selected {
  @apply tw-border-primary;
  & h3 {
    @apply tw-text-primary-dark;
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
