<script lang="ts" setup>
import type { DsfrCardProps } from '@gouvminint/vue-dsfr'
import TypeAideTag from './TypeAideTag.vue'

type AideCardProps = {
  link: string
  title: string
  description: string
  typeAide: string
  montant?: number
  instructeur: string
} & Pick<DsfrCardProps, 'horizontal' | 'size' | 'titleTag'>

defineProps<AideCardProps>()
</script>

<template>
  <DsfrCard
    :title="title"
    :description="description"
    :link="link"
    :detail="instructeur"
    :detail-icon="{ name: 'ri:government-line', ssr: true }"
    v-bind="{
      horizontal,
      size,
      titleTag,
    }"
  >
    <template #start-details>
      <div class="brand-aide-card__details">
        <div class="brand-aide-card__details-left">
          <ul class="fr-tags-group">
            <TypeAideTag :size="size" :type="typeAide" />
          </ul>
        </div>
        <div v-if="montant" class="brand-aide-card__details-right">
          <AideMontant :montant="montant" :size="size" />
        </div>
      </div>
    </template>
  </DsfrCard>
</template>

<style scoped lang="scss">
.brand-aide-card__details {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

:deep(.fr-card__detail svg) {
  margin-right: 0.5rem;
}
</style>
