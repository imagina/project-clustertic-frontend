<script setup lang="ts">
const loadGoogleTranslate = () => {
  if (!window.googleTranslateElementInit) {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'en,es,fr,de,it,ja,ko,pt,ru,zh-CN,none',
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
  <div id="google_translate_element"></div>
</template>

<style scoped>
:deep(.goog-te-gadget-icon) {
  display: none !important;
}
:deep(a) {
  display: flex;
}
</style>
