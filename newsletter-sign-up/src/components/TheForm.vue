<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const emailTouched = ref(false);

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const isValidEmail = computed(() => validateEmail(email.value));

const enviar = () => {
  if (isValidEmail.value) {
    console.log(email.value);
    router.push(`/success/${email.value}`);
  }
};
</script>

<template>
  <main>
    <section class="form-text">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>

      <form action="#" method="POST" class="form">
        <div class="label-erros">
          <label for="email" :class="{ error: !isValidEmail && emailTouched }"
            >Email address</label
          ><br />
          <p v-if="!isValidEmail && emailTouched" class="error">
            Valid email is required
          </p>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="email@company.com"
          :class="{ 'email-error': !isValidEmail && emailTouched }"
          @focus="emailTouched = true"
        /><br />
        <button :disabled="!isValidEmail" type="submit" @click="enviar">
          Subscribe to monthly newsletter
        </button>
      </form>
    </section>
    <div class="form-image">
      <img src="../assets/illustration-sign-up-desktop.svg" alt="" />
    </div>
  </main>
</template>

<style scoped>
.label-erros {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
main {
  display: flex;
  max-width: 675px;
  margin: 0 auto;
  border: 1px solid var(--neutral-grey);
  border-radius: 20px;
  padding: 1em;
  background: var(--neutral-white);
}
.form-image > img {
  width: 100%;
  height: auto;
}
.form {
  padding-top: 1.5em;
}
.form input,
.form button {
  width: 90%;
  padding: 1em;
  margin: 0.5em 0;
  /* border: 1px solid var(--neutral-grey); */
  border-radius: 10px;
}
.form input:hover,
.form button:hover {
  cursor: pointer;
}
.form button:hover {
  border: none;
  transition: background-color 0.3s ease;
  background-image: radial-gradient(
    circle,
    #ff6257,
    #f8655b,
    #f1685f,
    #e96b63,
    #e26e66
  );
}

.form button {
  width: 100%;
  color: var(--neutral-white);
  background-color: var(--neutral-dark-slate-grey);
  font-size: 16px;
}

.form-text {
  padding: 0 1.5em;
}

ul {
  margin: 0;
  padding: 0;
}

p,
li,
label,
h1 {
  line-height: 1.2em;
  color: var(--neutral-dark-slate-grey);
}
label {
  font-size: 10px;
  font-weight: 700;
}

.form-text ul li {
  list-style: url("../assets/icon-list.svg");
  margin: 0 1.5em;
}
.form-text li::marker {
  display: block;
  text-align: center !important;
}

.email-error {
  border: var(--primary-tomato) 1px solid;
  background-color: rgba(255, 98, 87, 0.2);
}
.email-error::placeholder {
  color: var(--primary-tomato);
}
.error {
  color: var(--primary-tomato);
  font-size: 0.5em;
  margin: 0;
  padding: 0;
  font-size: 0.75em;
  font-weight: bold;
}
/* Estilos para mobile */
@media (max-width: 768px) {
  main {
    margin: 0;
    padding: 0;
    flex-direction: column-reverse; /* Empilha os elementos */
  }

  img {
    content: url("../assets/illustration-sign-up-mobile.svg");
  }
  ul{
    padding: 10px 0px;
  }
  ul li{
    padding: 5px 0;
  }
}
</style>
