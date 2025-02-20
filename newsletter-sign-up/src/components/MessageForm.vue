<script setup lang="ts">
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

// para pegar valor enviado pela rota
const route = useRoute();
const email = route.params.email;

// para retornar na pag inicial
const router = useRouter();

function retornar() {
  router.push("/");
}
</script>

<template>
  <!-- Success message start -->
  <section class="form__message-sucess">
    <div>
      <img src="../assets/icon-success.svg" alt="icone de seta" />
    </div>

    <h2>Thanks for subscribing!</h2>
    <p>
      A confirmation email has been sent to <b>{{ email }}</b
      >. Please open it and click the button inside to confirm your
      subscription.
    </p>
    <button @click="retornar">Dismiss message</button>
  </section>

  <!-- Success message end -->
</template>

<style>
* {
  margin: 0;
  padding: 0px;
}
.form__message-sucess {
  max-width: 375px;
  height: 375px;
  padding: 2em 3em;
  margin: 1em 0;
  background-color: var(--neutral-white);
  border-radius: 36px;
  color: var(--neutral-dark-slate-grey);
  text-align: left;
  box-shadow: -20px -7px 35px 0 var(--color-dark-slate-grey);
}

img {
  width: 15%;
}

h2 {
  font-size: 3em;
  padding: 20px 0;
}
p {
  font-size: 0.8em;
  line-height: 1.5;
}

button {
  margin-top: 30px;
  width: 100%;
  padding: 15px;
  background-color: var(--neutral-dark-slate-grey);
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
}
/* Estilos para mobile */
@media (max-width: 768px) {
  body{
    background-color: var(--neutral-white);
  }
  .form__message-sucess {
    height: 100vh;
    padding: 2em;
    margin-top: 15em;
    border-radius: 0;
    box-shadow: none;
  }
  button {
    margin-top: 12em;
  }
}
</style>
