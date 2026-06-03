<script setup>
import ButtonOutlinedPrimary from '@/components/Commun/Vuetify/buttons/ButtonOutlinedPrimary.vue'

const props = defineProps({
  modelValue: Boolean,
  title: String,
  subtitle: String,
  iconActionButton: String,
  textActionButton: String,
})

const emit = defineEmits(['update:modelValue', 'actionButton'])

function closeDialog() {
  emit('update:modelValue', false)
}
</script>

<template>
  <v-dialog
    width="800"
    :model-value="modelValue"
    persistent
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title :style="{ paddingBottom: 0 }">
        {{ props.title }}
      </v-card-title>
      <v-card-subtitle :style="{ paddingLeft: '1.2rem' }">
        {{ props.subtitle }}
      </v-card-subtitle>
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-spacer />

        <ButtonOutlinedPrimary variant="text" @click="closeDialog" text="Close" />
        <ButtonOutlinedPrimary
          class="ml-3"
          :prepend-icon="props.iconActionButton"
          :text="props.textActionButton"
          @click="$emit('actionButton')"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
