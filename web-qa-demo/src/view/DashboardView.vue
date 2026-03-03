<script setup>
import { useRouter } from "vue-router";
import { clearToken } from "../auth";

const router = useRouter();

function logout() {
  clearToken();
  router.push("/login");
}
</script>

<template>
  <div style="max-width: 720px; margin: 60px auto; font-family: Arial;">
    <h1 data-cy="dashboard-title">Dashboard</h1>

    <p data-cy="dashboard-welcome">Bem-vindo(a)! Você está logado.</p>

    <button data-cy="logout" @click="logout">Sair</button>
  </div>
</template>