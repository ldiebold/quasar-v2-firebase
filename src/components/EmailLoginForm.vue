<script setup>
import isValidEmail from 'helpers/validators/isValidEmail'

const props = defineProps({
  modelValue: {
    required: true,
    type: Object
  }
})
const emit = defineEmits([
  'update:modelValue'
])

function validatePasswordLength (password) {
  return !password || password.length >= 8
}

function onInput (field, value) {
  const updateData = {}
  updateData[field] = value
  emit('update:modelValue', { ...props.modelValue, ...updateData })
}

const formRef = ref()

function reset () {
  emit('update:modelValue', {
    name: '',
    email: ''
  })
  formRef.value.reset()
}

defineExpose({
  validate: (...props) => formRef.value?.validate(...props),
  reset: reset
})
</script>

<template>
  <q-form ref="formRef">
    <q-input
      type="email"
      label="Email"
      filled
      hide-bottom-space
      :model-value="modelValue.email"
      :rules="[
        (email) => isValidEmail(email) || 'Email invalid',
      ]"
      @update:model-value="val => onInput('email', val)"
    />

    <q-input
      class="q-mt-md"
      type="password"
      label="password"
      filled
      hide-bottom-space
      :model-value="modelValue.password"
      :rules="[
        val => validatePasswordLength(val) || 'Passwords must be at least 8 characters'
      ]"
      @update:model-value="val => onInput('password', val)"
    />
  </q-form>
</template>
