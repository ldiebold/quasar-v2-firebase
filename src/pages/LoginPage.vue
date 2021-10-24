<script setup>
import { useQuasar } from 'quasar'
import useFirebaseEmailSignIn from 'services/firebase/useFirebaseEmailSignIn'
import EmailLoginForm from 'src/components/EmailLoginForm.vue'
import SocialProvidersCard from 'src/components/SocialProvidersCard.vue'
import redirectIfAuthenticated from 'src/services/firebase/utils/redirectIfAuthenticated'

const { onChecked } = redirectIfAuthenticated('/')
const $q = useQuasar()

$q.loading.show({ delay: 500 })
onChecked.value = () => {
  $q.loading.hide()
}

const {
  signIn,
  error,
  hasErrors,
  loading,
  form
} = useFirebaseEmailSignIn()

const formRef = ref()

const handleLoginClicked = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    await signIn()
    formRef.value.reset()
  }
}
</script>

<template>
  <q-page
    padding
    class="column flex-center"
  >
    <h2
      class="q-mb-md"
      style="font-size: 2.4em;"
    >
      Login
    </h2>
    <q-card>
      <q-card-section>
        <EmailLoginForm
          ref="formRef"
          v-model="form"
        />
      </q-card-section>
      <div>
        <q-banner
          v-if="hasErrors"
          rounded
          class="bg-negative text-white q-mx-md q-mb-md"
          style="max-width: 280px;"
        >
          {{ error.message }}
        </q-banner>
      </div>
      <q-btn
        label="login"
        color="grey-9"
        class="full-width"
        :loading="loading"
        @click="handleLoginClicked"
      />
    </q-card>

    <SocialProvidersCard
      title="or login with..."
      class="q-mt-xl text-center"
      bordered
      flat
      style="max-width: 340px;"
      @auth="$router.push('/')"
    />
  </q-page>
</template>
