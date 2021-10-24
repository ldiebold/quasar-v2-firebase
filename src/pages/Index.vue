<script setup>
import redirectIfUnauthenticated from 'services/firebase/utils/redirectIfUnauthenticated'
import UserDataCard from 'src/components/UserDataCard.vue'
import useAuthState from 'src/services/firebase/useAuthState'

redirectIfUnauthenticated('/login')
const { isAuthenticated } = useAuthState()
</script>

<template>
  <q-page class="column flex-center">
    <h1>Home Page</h1>
    <UserDataCard v-if="isAuthenticated" />
  </q-page>
</template>
