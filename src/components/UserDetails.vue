<script setup>
import { db } from 'src/boot/Firebase'
import { useFirestore } from '@vueuse/firebase/useFirestore'

const props = defineProps({
  userUid: {
    required: true,
    type: String
  }
})

const signedInUserDoc = db.collection('users').doc(props.userUid)

const user = useFirestore(signedInUserDoc)

signedInUserDoc.get()
  .then(data => {
    if (data.exists === false) {
      console.log('run')
      signedInUserDoc.set({
        name: 'Lugu',
        age: 30
      })
    }
  })

setTimeout(() => {
  user.value = {
    name: 'boris',
    age: 5
  }
}, 3000)

</script>

<template>
  <q-card>
    <q-card>
      <q-card-section v-if="user">
        <q-input
          v-model="user.name"
          label="Name"
        />
        <q-input
          v-model="user.age"
          class="q-mt-md"
          label="Age"
        />
      </q-card-section>

      <q-card-section v-else>
        <q-spinner size="lg" />
      </q-card-section>
    </q-card>
  </q-card>
</template>
