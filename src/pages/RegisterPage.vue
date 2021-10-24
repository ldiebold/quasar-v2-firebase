<script setup>
import { useQuasar } from 'quasar'
import EmailRegisterForm from 'src/components/EmailRegisterForm.vue'
import useFirebaseEmailRegister from 'src/services/firebase/useFirebaseEmailRegister'
import SocialProvidersCard from 'src/components/SocialProvidersCard.vue'
import redirectIfAuthenticated from 'src/services/firebase/utils/redirectIfAuthenticated'
import useFirestoreDb from 'src/services/firebase/useFirestoreDb'

const {
  form,
  register,
  loading,
  error,
  hasErrors
} = useFirebaseEmailRegister()
const db = useFirestoreDb()
const { onChecked } = redirectIfAuthenticated('/')
const $q = useQuasar()
const router = useRouter()

const formRef = ref()

$q.loading.show({ delay: 500 })
onChecked.value = () => {
  $q.loading.hide()
}

const handleRegisterButtonClicked = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    const response = await register()
    handleAuth(response)
  }
}

async function handleAuth ({ user }) {
  const { displayName: name, email } = user
  await db.collection('users')
    .doc(user.uid)
    .set({ name, email })

  router.push('/')
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
      Signup!
    </h2>

    <q-card>
      <!-- Form -->
      <q-card-section>
        <EmailRegisterForm
          ref="formRef"
          v-model="form"
        />
      </q-card-section>
      <!-- Error Banner -->
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
      <!-- Register Button -->
      <q-btn
        label="register"
        color="grey-9"
        unelevated
        class="full-width"
        :loading="loading"
        @click="handleRegisterButtonClicked"
      />
    </q-card>

    <!-- Social Auth Providers -->
    <SocialProvidersCard
      title="or signup with..."
      class="q-mt-xl text-center"
      bordered
      flat
      style="max-width: 340px;"
      @auth="handleAuth"
    />
  </q-page>
</template>
