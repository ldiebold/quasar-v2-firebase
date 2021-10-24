<script setup>
import useAuthProviders from './useAuthProviders'
const authProviders = useAuthProviders()

defineProps({
  title: {
    required: false,
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'auth'
])

async function handleClick (provider) {
  const response = await provider.provider.signIn()
  emit('auth', response)
}
</script>

<template>
  <q-card>
    <div
      v-if="title"
      class="q-mt-md"
      style="font-size: 1.2em;"
    >
      {{ title }}
    </div>
    <q-card-section>
      <q-btn
        v-for="[key, authProvider] in Object.entries(authProviders)"
        :key="key"
        :color="authProvider.color"
        :label="authProvider.label"
        no-caps
        :icon="authProvider.icon"
        :loading="authProvider.provider.loading.value"
        class="q-ma-sm"
        @click="() => handleClick(authProvider)"
      />
    </q-card-section>
  </q-card>
</template>
