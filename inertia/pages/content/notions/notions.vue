<script lang="ts" setup>
import { onMounted } from 'vue'
import { useBreadcrumbStore } from '~/stores/breadcrumbs'
import BrandBackgroundContainer from '../../../components/layout/BrandBackgroundContainer.vue'
import SectionContainer from '../../../components/layout/SectionContainer.vue'
import BreadcrumbSectionContainer from '../../../components/layout/BreadcrumbSectionContainer.vue'
import DefaultLayout from '../../../layouts/default.vue'
// Define props based on what's passed from ContentController.listNotions
const props = defineProps<{
  notions: Array<{
    id: string
    slug: string
    title: string
    description: string
  }>
}>()

onMounted(() => {
  const { setBreadcrumbs } = useBreadcrumbStore()
  setBreadcrumbs([
    { text: 'Accueil', to: '/' },
    { text: 'Notions', to: '/notions' },
  ])
})
</script>

<template>
  <Head
    title="Toutes les informations sur les notions | Aides simplifiées"
    description="Découvrez toutes les informations sur les notions pour vous accompagner dans vos démarches."
  />
  <DefaultLayout>
    <BrandBackgroundContainer>
      <BreadcrumbSectionContainer />
      <SectionContainer type="page-header">
        <div class="fr-grid-row fr-grid-row--gutters">
          <h1 class="fr-col-12">Notions</h1>
          <template v-for="notion in notions" :key="notion.id || notion.slug">
            <div class="fr-col-4">
              <DsfrCard
                :title="notion.title"
                :description="notion.description"
                :link="`/notions/${notion.slug || notion.id}`"
              />
            </div>
          </template>
        </div>
      </SectionContainer>
    </BrandBackgroundContainer>
  </DefaultLayout>
</template>
