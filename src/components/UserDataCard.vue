<script setup>
import { useFirestore } from '@vueuse/firebase/useFirestore'
import collections from 'src/services/firebase/collections'

const { user } = collections()

const posts = useFirestore(user.collection('posts'))

const form = ref({
  title: '',
  body: ''
})

function createPost () {
  user.collection('posts').add(form.value)
  form.value = {
    title: '',
    body: ''
  }
}
</script>

<template>
  <q-card>
    <q-card-section>
      <q-input
        v-model="form.title"
        label="title"
        filled
      />
      <q-input
        v-model="form.body"
        class="q-mt-md"
        label="body"
        type="textarea"
        filled
      />
      <q-btn
        class="q-mt-sm full-width"
        label="create"
        unelevated
        color="primary"
        @click="createPost"
      />
    </q-card-section>
    <q-card-section>
      <pre>{{ posts }}</pre>
    </q-card-section>
  </q-card>
</template>
