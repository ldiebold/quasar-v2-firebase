<script setup>
import firebaseSignOut from 'src/services/firebase/firebaseSignOut'

const { signOut, loading, hasErrors } = firebaseSignOut()

const router = useRouter()

async function handleSignOutClicked () {
  await signOut()
  if (!hasErrors.value) {
    router.push('/login')
  }
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          QuasarV2 Firebase
        </q-toolbar-title>

        <q-btn
          round
          flat
          color="white"
          icon="mdi-logout"
          :loading="loading"
          @click="handleSignOutClicked"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
