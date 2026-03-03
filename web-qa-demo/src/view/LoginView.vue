<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginApi } from "../services/api";
import { setToken } from "../auth";

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function onSubmit() {
  error.value = "";

  if (!email.value || !password.value) {
    error.value = "Preencha e-mail e senha.";
    return;
  }

  loading.value = true;
  try {
    const data = await loginApi(email.value, password.value);
    setToken(data.token);
    await router.push("/dashboard");
  } catch (e) {
    error.value = e.message || "Erro ao logar";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div style="max-width: 360px; margin: 60px auto; font-family: Arial;">
    <h1 data-cy="login-title">Login</h1>

    <label>
      E-mail
      <input data-cy="login-email" v-model="email" type="email" placeholder="email@exemplo.com" />
    </label>

    <br /><br />

    <label>
      Senha
      <input data-cy="login-password" v-model="password" type="password" placeholder="******" />
    </label>

    <br /><br />

    <button data-cy="login-submit" :disabled="loading" @click="onSubmit">
      {{ loading ? "Entrando..." : "Entrar" }}
    </button>

    <p v-if="error" data-cy="login-error" style="color: #c00; margin-top: 12px;">
      {{ error }}
    </p>
  </div>
</template>