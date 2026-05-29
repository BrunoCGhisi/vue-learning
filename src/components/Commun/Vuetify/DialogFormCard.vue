<script setup>
import ButtonContrast from '@/components/Commun/ButtonContrast.vue'
import ButtonOutlinedPrimary from '@/components/Commun/Vuetify/buttons/ButtonOutlinedPrimary.vue'

const props = defineProps({
  modelValue: Boolean,
  title: String,
  subtitle: String,
})

const emit = defineEmits(['update:modelValue', 'actionButton'])

function closeDialog() {
  emit('update:modelValue', false)
}
</script>

<template>
  <v-dialog
    width="1000"
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
        <v-row>
          <v-col cols="9"> </v-col>
          <v-col cols="1">
            <ButtonOutlinedPrimary variant="text" @click="closeDialog" text="Close" />
          </v-col>
          <v-col cols="2">
            <ButtonOutlinedPrimary text="Edit" @click="$emit('actionButton')" />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
