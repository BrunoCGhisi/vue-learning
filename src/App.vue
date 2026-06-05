<script setup>
import UserContainer from '@/components/Users/UserContainer.vue'

import { useUsers } from '@/composable/useUsers'
import IbgeContainer from '@/components/IBGE/IbgeContainer.vue'
import CountriesContainer from '@/components/Countries/Countries-container.vue'
import { DividerLinePrimaryPrimary } from '@/components/Commun/Vuetify/index.js'

const { users } = useUsers()
</script>

<template>
  <div class="main-container">
    <user-container :userList="users" />

    <DividerLinePrimaryPrimary />
    <ibge-container />
    <DividerLinePrimaryPrimary />
    <CountriesContainer />
  </div>
</template>

<style></style>
