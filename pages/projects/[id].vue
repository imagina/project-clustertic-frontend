<script setup lang="ts">
import { Paperclip } from 'lucide-vue-next'

const project = ref({
  id: '154687623',
  title: 'Modern Minimalistic Restaurant Website Design',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum autem fuga maiores? Dolorum sapiente perspiciatis possimus! <br/>Perspiciatis quod ut natus eveniet soluta provident itaque beatae, laudantium quia inventore autem.',
  open: true,
  skills: ['PHP', 'HTML', 'Diseño de sitios web', 'Diseño gráfico', 'MySQL'],
  currency: 'USD',
})
const tab = ref('details')
const refForm: any = ref()

const proposalData = reactive<{
  amount: number
  days: number
  description: string
  files: any
}>({
  amount: 0,
  days: 7,
  description: '',
  files: null,
})

async function sendProposal() {
  try {
    const validateRegister = await refForm.value.validate()
    if (!validateRegister) return
    // await store.login(auth);
  } catch (erro) {
    console.log(erro)
  }
}
</script>

<template>
  <SearchProject class="tw-mt-20" />
  <div class="tw-container tw-px-20 tw-mt-10">
    <div class="tw-flex tw-mb-5">
      <Card class="tw-basis-full lg:tw-flex-1">
        <CardHeader class="tw-h-full tw-justify-center">
          <CardTitle class="!tw-leading-normal tw-font-bold">
            <span class="tw-mr-5">{{ project.title }}</span>
            <span
              class="tw-bg-primary tw-bg-opacity-50 tw-px-5 tw-py-1 tw-font-normal tw-rounded-md"
            >
              {{ project.open ? 'Abierto' : 'Cerrado' }}
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
      <div class="tw-basis-full lg:tw-basis-80">
        <Card class="tw-flex-1 tw-ml-5">
          <div class="tw-flex tw-justify-between tw-py-4 tw-px-12">
            <div class="">
              <p class="tw-font-normal tw-text-sm tw-mb-2 tw-text-center">
                Ofertas
              </p>
              <p class="tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center">
                146
              </p>
            </div>
            <div class="">
              <p class="tw-font-normal tw-text-sm tw-mb-2 tw-text-center">
                Ofertas media
              </p>
              <p class="tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center">
                $ 146 USD
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
    <q-tabs
      v-model="tab"
      dense
      class="project-tabs text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab class="tw-flex-initial" name="details" label="Detalles" />
      <q-tab class="tw-flex-initial" name="proposal" label="Propuesta" />
    </q-tabs>

    <q-separator />
    <div class="tw-flex tw-mb-5 tw-mt-10">
      <div class="tw-basis-full lg:tw-flex-1 tw-w-full">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel class="tw-p-0" name="details">
            <Card class="tw-overflow-scroll md:tw-overflow-hidden">
              <CardHeader>
                <CardTitle>Detalles de proyecto</CardTitle>
              </CardHeader>
              <CardContent class="tw-px-6 tw-pb-10">
                <p class="text-h6 tw-text-base">{{ project.description }}</p>

                <CardTitle class="tw-mt-10 tw-mb-7">
                  Habilidades necesarias
                </CardTitle>
                <ul class="tw-flex tw-flex-wrap">
                  <li
                    v-for="(item, index) in project.skills"
                    :key="`skill_${index}`"
                    class="tw-border tw-border-secondary tw-rounded-md tw-flex tw-px-10 tw-py-2 tw-h-min tw-mr-3 tw-mb-1"
                  >
                    {{ item }}
                  </li>
                </ul>
                <p class="tw-mb-0 tw-text-xs tw-mt-5">
                  ID del proyecto: {{ project.id }}
                </p>
              </CardContent>
            </Card>
            <Card class="tw-mt-10">
              <CardHeader>
                <CardTitle>Detalles de proyecto</CardTitle>
              </CardHeader>
              <CardContent class="tw-px-6 tw-pb-10">
                <q-form @submit.prevent.stop="sendProposal" ref="refForm">
                  <p class="text-h6 tw-text-base tw-mb-10">
                    Podrás editar tu oferta hasta que el proyecto sea adjudicado
                    a alguien.
                  </p>
                  <div class="tw-flex tw-flex-wrap">
                    <div
                      class="tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5"
                    >
                      <label
                        class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base"
                      >
                        Monto de la oferta*
                      </label>
                      <InputCPA
                        outlined
                        type="number"
                        size="sm"
                        class="tw-mb-3 tw-mt-2"
                        v-model="proposalData.amount"
                        mask="##0.00"
                        fill-mask
                        reverse-fill-mask
                        :rules="[(val) => !!val || 'El valor es requerido']"
                      >
                        <template v-slot:prepend>$</template>
                        <template v-slot:append>
                          <span class="tw-text-sm">
                            {{ project.currency }}
                          </span>
                        </template>
                        <template v-slot:hint>
                          <p
                            class="tw-text-sm tw-text-black tw-whitespace-nowrap"
                          >
                            Pagado a usted: ${{ proposalData.amount }} - ${{
                              ((proposalData.amount ?? 0) * 0.05).toFixed(2)
                            }}
                            tarifa = ${{
                              ((proposalData.amount ?? 0) * 1.95).toFixed(2)
                            }}
                          </p>
                        </template>
                      </InputCPA>
                    </div>
                    <div
                      class="tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5"
                    >
                      <label
                        class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap"
                      >
                        Este proyecto se entregará en*
                      </label>
                      <InputCPA
                        outlined
                        size="sm"
                        type="number"
                        class="tw-mb-3 tw-mt-2"
                        v-model="proposalData.days"
                      >
                        <template v-slot:append>
                          <span class="tw-text-sm">Dias</span>
                        </template>
                      </InputCPA>
                    </div>
                  </div>
                  <label
                    class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10"
                  >
                    Describe tu propuesta (mínimo 100 caracteres)*
                  </label>
                  <Textarea
                    placeholder="¿Qué le convierte en el mejor candidato para este proyecto?"
                    v-model="proposalData.description"
                    class="tw-h-28"
                  ></Textarea>

                  <label
                    class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10"
                  >
                    Describe tu propuesta (mínimo 100 caracteres)*
                  </label>
                  <Dropzone v-model="proposalData.files">
                    <template v-slot:title>
                      <div
                        class="tw-flex tw-flex-col tw-items-center tw-justify-center"
                      >
                        <Paperclip :size="50" class="tw-mb-3" />
                        <p class="tw-text-base tw-mb-3">
                          {{
                            proposalData.files
                              ? $t('projects.create.form.files.empty.title')
                              : $t('projects.create.form.files.loadedMsg')
                          }}
                        </p>
                      </div>
                    </template>
                    <template v-slot:subtitle>
                      <p
                        v-if="proposalData.files"
                        class="tw-text-xs tw-text-center"
                      >
                        <span
                          class="tw-mr-2"
                          v-for="(file, index) in proposalData.files"
                          :key="index"
                        >
                          {{ file.name }}
                        </span>
                      </p>
                      <p v-else class="tw-text-xs tw-text-center">
                        {{ $t('projects.create.form.files.empty.description') }}
                      </p>
                    </template>
                  </Dropzone>
                  <div class="tw-flex tw-mt-10 tw-justify-end">
                    <Button
                      type="submit"
                      class="tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                    >
                      Enviar propuesta
                    </Button>
                  </div>
                </q-form>
              </CardContent>
            </Card>
          </q-tab-panel>

          <q-tab-panel class="tw-p-0" name="proposal">
            <div class="tw-mb-10">
              <CardProposal id="1" :rating="0"></CardProposal>
            </div>

            <div class="tw-flex tw-justify-center tw-mt-10">
              <Paginator :btn-per-side="3" :current="7" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <aside class="tw-basis-full lg:tw-basis-80">
        <div
          class="tw-bg-secondary tw-rounded-md !tw-text-white tw-p-6 tw-ml-5"
        >
          <h2 class="tw-text-xl tw-font-bold tw-mb-8">Filtros</h2>
          <q-form>
            <div class="tw-mb-5 tw-flex">
              <h4
                class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1"
              >
                Precio
              </h4>
            </div>
          </q-form>
        </div>
      </aside>
    </div>
  </div>
</template>

<style lang="css" scoped>
.project-tabs {
  .q-tab {
    flex: 0;
    :deep(.q-tab__label) {
      @apply !tw-font-semibold;
    }
  }
}
</style>
