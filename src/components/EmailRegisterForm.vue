<script setup>
import isValidEmail from 'src/helpers/validators/isValidEmail'

const props = defineProps({
  modelValue: {
    required: true,
    type: Object
  }
})
const emit = defineEmits([
  'update:modelValue'
])

function onInput (field, value) {
  const updateData = {}
  updateData[field] = value
  emit('update:modelValue', { ...props.modelValue, ...updateData })
}

function validatePasswordsSame () {
  return props.modelValue.password === props.modelValue.password_confirmation
}

function validatePasswordLength (password) {
  return password.length >= 8
}

const formRef = ref()

defineExpose({
  validate: (...props) => formRef.value?.validate(...props)
})
</script>

<template>
  <q-form
    v-bind="$attrs"
    ref="formRef"
    no-error-focus
  >
    <q-input
      type="emal"
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
      label="password"
      filled
      hide-bottom-space
      :model-value="modelValue.password"
      lazy-rules="ondemand"
      :rules="[
        () => validatePasswordsSame() || 'Passwords must match',
        val => validatePasswordLength(val) || 'Passwords must be at least 8 characters'
      ]"
      @update:model-value="val => onInput('password', val)"
    />

    <q-input
      class="q-mt-md"
      type="password_confirmation"
      label="Password Confirm"
      filled
      hide-bottom-space
      :model-value="modelValue.password_confirmation"
      lazy-rules="ondemand"
      @update:model-value="val => onInput('password_confirmation', val)"
    />
  </q-form>
</template>
