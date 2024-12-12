<script setup lang="ts">
import {
  Paperclip,
  MapPinIcon,
  FlagIcon,
  UserIcon,
  Clock9Icon,
  IdCardIcon,
  ShieldCheckIcon,
  WalletIcon,
  MailCheckIcon,
  UserCheck2Icon,
  PhoneIcon,
} from 'lucide-vue-next'
import LoadingScreen from '~/components/sections/LoadingScreen.vue'
import type { Project, Proposal } from '~/models/interfaces/projects'
import type { NewProposalFormValue } from '~/models/interfaces/stores'
import { projectExample1 } from '~/utils/examples/project'
import Swal from 'sweetalert2'
import type { User } from '~/models/UserData'

// const project = ref<Project>(projectExample1)
const tab = ref('details')
const refForm: any = ref()

const projectsStore = useProjectsStore()
const authStore  = useAuthStore()
const route = useRoute()

const project = computed<Project>(
  () => projectsStore.selected ?? projectExample1,
)
const isMyProject = computed<boolean>(
  ()=>projectsStore.selected?.createdBy === authStore.user?.id
)

const memberSince = computed<Date>(() => {
  if (!projectsStore.selected?.user || !projectsStore.selected.user?.createdAt)
    return new Date()
  return typeof projectsStore.selected.user?.createdAt == typeof ''
    ? Helper.parseStringToDate(<string>projectsStore.selected.user?.createdAt)
    : <Date>projectsStore.selected.user?.createdAt
})

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

onMounted(() => {
  if (
    !projectsStore.selected ||
    `${projectsStore.selected.id}` !== `${route.params.id}`
  ) {
    projectsStore.viewDetails(parseInt(`${route.params.id}`))
  }
})
onBeforeUnmount(() => {
  projectsStore.removeSelected()
})
async function sendProposal() {
  try {
    const validateRegister = await refForm.value.validate()
    if (!validateRegister) return

    // await store.login(auth);
    const data: NewProposalFormValue = {
      ad_id: project.value.id,
      amount: proposalData.amount,
      currency: 'USD',
      delivery_days: proposalData.days,
      description: proposalData.description,
    }

    if (proposalData.files) {
      //TODO: crear los archivos multimedia y enviar los id

      data.files = proposalData.files
    }
    projectsStore.addProposal(data)
  } catch (erro) {
    console.log(erro)
  }
}

function handleSelectProposal(proposal: Proposal) {
  if (!project.value.bids || !isMyProject.value) return
  
  if (project.value.bids.find((value) => value.selected === 1)) {
    Swal.fire({
      title: 'El proyecto ya cuenta con un proyecto seleccionado',
      icon: 'error',
      showCloseButton: true,
    })
  } else {
    Swal.fire({
      title: 'Desea seleccionar esta propuesta',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Seleccionar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        projectsStore.selectProposal(proposal)
      }
    })
  }
}
</script>

<template>
  <LoadingScreen :loading="projectsStore.loading" />
  <SearchProject />
  <div class="tw-container lg:tw-px-20 tw-mt-10">
    <div class="tw-flex tw-flex-wrap tw-mb-5">
      <Card class="tw-basis-full lg:tw-flex-1">
        <CardHeader class="tw-h-full tw-justify-center">
          <CardTitle class="!tw-leading-normal tw-font-bold">
            <span class="tw-mr-5">{{ project.title }}</span>
            <span
              class="tw-bg-primary tw-bg-opacity-50 tw-px-5 tw-py-1 tw-font-normal tw-rounded-md"
            >
              {{ project.status === 2 ? 'Abierto' : 'Cerrado' }}
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
      <div class="tw-basis-full lg:tw-basis-80">
        <Card class="tw-flex-1 lg:tw-ml-5">
          <div class="tw-flex tw-justify-between tw-py-4 tw-px-12">
            <div class="">
              <p class="tw-font-normal tw-text-sm tw-mb-2 tw-text-center">
                Ofertas
              </p>
              <p class="tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center">
                {{ project.bids?.length ?? 0 }}
              </p>
            </div>
            <div class="">
              <p class="tw-font-normal tw-text-sm tw-mb-2 tw-text-center">
                Ofertas media
              </p>
              <p class="tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center">
                $ {{ project.defaultPrice ?? 0 }} USD
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
    <div class="tw-flex tw-flex-wrap tw-mb-5 tw-mt-10">
      <div class="tw-basis-full lg:tw-flex-1 tw-w-full">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel class="tw-p-0" name="details">
            <Card class="tw-overflow-scroll md:tw-overflow-hidden">
              <CardHeader>
                <CardTitle>Detalles de proyecto</CardTitle>
              </CardHeader>
              <CardContent class="tw-px-6 tw-pb-10">
                <p class="text-h6 tw-text-base tw-font-light">{{ project.description }}</p>

                <CardTitle class="tw-mt-10 tw-mb-7">
                  Habilidades necesarias
                </CardTitle>
                <ul class="tw-flex tw-flex-wrap">
                  <li
                    v-for="(item, index) in project.categories"
                    :key="`skill_${index}`"
                    class="tw-border tw-border-secondary tw-rounded-md tw-flex tw-px-10 tw-py-2 tw-h-min tw-mr-3 tw-mb-1"
                  >
                    {{ item.title }}
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
                  <p class="text-h6 tw-text-base tw-font-light tw-mb-10">
                    Podrás editar tu oferta hasta que el proyecto sea adjudicado
                    a alguien.
                  </p>
                  <div class="tw-flex tw-flex-wrap">
                    <div
                      class="tw-basis-full sm:tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 md:tw-mr-5  !tw-mb-10 md:!tw-mb-0 "
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
                        :disable="!!(authStore.user?.id)"
                      >
                        <template v-slot:prepend>$</template>
                        <template v-slot:append>
                          <span class="tw-text-sm">
                            {{
                              'USD' /**TODO: colocar currency de cada projecto */
                            }}
                          </span>
                        </template>
                        <template v-slot:hint>
                          <p
                            class="tw-text-xs lg:tw-text-sm tw-text-black tw-whitespace-nowrap"
                          >
                            Pagado a usted:<br class="md:tw-hidden"/> ${{ proposalData.amount }} - ${{
                              ((proposalData.amount ?? 0) * 0.05).toFixed(2)
                            }}
                            tarifa = ${{
                              ((proposalData.amount ?? 0) * 0.95).toFixed(2)
                            }}
                          </p>
                        </template>
                      </InputCPA>
                    </div>
                    <div
                      class="tw-basis-full sm:tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5"
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
                        :disable="!!(authStore.user?.id)"
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
                        :disable="!!(authStore.user?.id)"
                  ></Textarea>

                  <label
                    class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10"
                  >
                    Adjunta los archivos que desee
                  </label>
                  <Dropzone 
                  :disable="!!(authStore.user?.id)" v-model="proposalData.files">
                    <template v-slot:title>
                      <div
                        class="tw-flex tw-flex-col tw-items-center tw-justify-center"
                      >
                        <Paperclip :size="50" class="tw-mb-3" />
                        <p class="tw-text-base tw-mb-3">
                          {{
                            proposalData.files
                              ? Helper.tLang('projects.create.form.files.empty.title')
                              : Helper.tLang('projects.create.form.files.loadedMsg')
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
                        {{ Helper.tLang('projects.create.form.files.empty.description') }}
                      </p>
                    </template>
                  </Dropzone>
                  <div class="tw-flex tw-mt-10 tw-justify-end">
                    <Button
                    :disabled="!!(authStore.user?.id)" 
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
              <CardProposal
                v-for="proposal in project.bids"
                v-on:on-select-proposal="handleSelectProposal(proposal)"
                :selected="proposal.selected === 1"
                :key="`proposal_${proposal.id}`"
                :id="proposal.id"
                :delivery-days="proposal.deliveryDays"
                :amount="proposal.amount"
                :img="proposal.creator?.mediaFiles.profile.path"
              >
                <template v-slot:name>
                  {{ (<User>proposal.creator).extraFields.companyName?.value ?? proposal.creator?.fullName }}
                </template>
                <template v-slot:username>
                  {{ proposal.creator?.fullName }}
                </template>
                <template v-slot:description>
                  {{ proposal.description }}
                </template>
                <template v-slot:subtitle>
                  {{ `${(<User>proposal.creator).extraFields.description?.value ?? ''}`.slice(0,50) }}
                </template>
              </CardProposal>
            </div>

            <!-- <div class="tw-flex tw-justify-center tw-mt-10">
              <Paginator :pages="1" :btn-per-side="3" :current="7" />
            </div> -->
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <aside class="tw-mt-5 md:tw-mt-0 tw-basis-full md:tw-basis-80">
        <div
          class="tw-bg-secondary tw-rounded-md !tw-text-white tw-p-6 tw-ml-5"
        >
          <h2 class="tw-text-xl tw-font-bold tw-mb-8">Acerca del Cliente</h2>

          <div class="tw-flex tw-mb-4">
            <MapPinIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>{{ project.city?.name }}</p>
          </div>
          <div class="tw-flex tw-mb-4">
            <FlagIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>{{ project.country?.name }}</p>
          </div>
          <div class="tw-flex tw-mb-4">
            <UserIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <RatingIndicator starClass="tw-text-lg tw-mr-1" :rating="4" />
          </div>
          <div class="tw-flex tw-mb-4">
            <Clock9Icon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>
              Miembro desde el {{ memberSince.getDate() }}/{{
                memberSince.getMonth() + 1
              }}/{{ memberSince.getFullYear() }}
            </p>
          </div>
          <h4
            class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1 tw-mt-8 tw-mb-5"
          >
            Verificación del cliente
          </h4>

          <div class="tw-flex tw-mb-4">
            <IdCardIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>xxx-xxx</p>
          </div>
          <div class="tw-flex tw-mb-4">
            <ShieldCheckIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>xxx-xxx</p>
          </div>
          <div class="tw-flex tw-mb-4">
            <WalletIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>xxx-xxx</p>
          </div>
          <div class="tw-flex tw-mb-4">
            <MailCheckIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>xxx-xxx</p>
          </div>
          <div class="tw-flex tw-mb-4">
            <UserCheck2Icon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>xxx-xxx</p>
          </div>
          <div class="tw-flex tw-mb-4">
            <PhoneIcon
              class="tw-text-primary tw-inline-block tw-mr-3"
              :size="20"
            />
            <p>xxx-xxx</p>
          </div>
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
