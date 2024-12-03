<script setup lang="ts">
const props = defineProps<{
  dark?: Boolean
}>()

const loadGoogleTranslate = () => {
  if (!window.googleTranslateElementInit) {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'en,es,pt', //fr,de,it,ja,ko,pt,ru,zh-CN
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element',
      )
    }
  }
  const script = document.createElement('script')
  script.src =
    '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  document.head.appendChild(script)
}
onMounted(() => {
  loadGoogleTranslate()
})
</script>

<template>
  <div :class="dark ? 'dark' : ''" id="google_translate_element"></div>
</template>

<style scoped>
:deep(.goog-te-gadget-simple) {
  border: none;
  background: transparent;
  font-weight: 700;
  span:last-child {
    @apply !tw-text-black;
  }
}
:deep(.goog-te-gadget-icon) {
  display: none !important;
}
:deep(a) {
  display: flex;
}
.dark :deep(.goog-te-gadget-simple) span {
  color: hsla(157, 100%, 63%, var(--tw-bg-opacity)) !important;
}
</style>
