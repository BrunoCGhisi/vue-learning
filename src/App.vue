<script setup>
import DividerLine from '@/components/Commun/DividerLine.vue'

import UserContainer from '@/components/Users/UserContainer.vue'

import { useUsers } from '@/composable/useUsers'
import IbgeContainer from '@/components/IBGE/Ibge-container.vue'
import CountriesContainer from '@/components/Countries/Countries-container.vue'

const { users } = useUsers()
</script>

<template>
  <div class="main-container">
    <user-container :userList="users" />

    <DividerLine />

    <ibge-container />

    <DividerLine />

    <CountriesContainer />
  </div>
</template>

<style></style>
