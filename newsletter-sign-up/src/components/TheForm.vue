<script setup lang="ts">
import { ref, computed } from "vue";

const email = ref("");
const emailTouched = ref(false);

const isValidEmail = computed(() => validateEmail(email.value));

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
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

      <form
        action="#"
        method="POST"
        class="form"
        @submit.prevent="validateEmail(email)"
      >
        <div class="label-erros">
          <label for="email" :class="{ 'error' : !isValidEmail && emailTouched}">Email address</label><br />
          <p v-if="!isValidEmail && emailTouched" class="error">Valid email is required</p>
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
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </section>
    <div class="form-image">
      <img src="../assets/illustration-sign-up-desktop.svg" alt="" />
    </div>
  </main>
</template>

<style scoped>
.label-erros{
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
.form__message-sucess.active {
  display: block;
  padding: 1em;
  margin: 1em 0;
  background-color: rgba(179, 138, 135, 0.1);
  border: 1px solid var(--primary-tomato);
  border-radius: 10px;
  color: var(--primary-tomato);
  text-align: center;
}
.form__message-sucess {
  display: none;
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

.attribution {
  text-align: center;
  font-size: 11px;
  color: var(--neutral-grey);
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


</style>
