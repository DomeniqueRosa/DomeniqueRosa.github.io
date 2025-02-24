# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://github.com/DomeniqueRosa/DomeniqueRosa.github.io/tree/main/faq-accordion-main)
- Live Site URL: [Add live site URL here](https://domenique-rosa-github-io.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vue + Vite

## Steps 1: Instalar o Vite em um projeto existente:

```
- npm install --save-dev vite

- npm install vue@3

```

## Step 2: Configurar o Vite: crie um arquivo de configuração para o Vite na raiz do seu projeto: vite.config.js.

```
  import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});

```
## Step 3: Instalar o plugin do Vue para o Vite
```
npm install --save-dev @vitejs/plugin-vue
```
## Step 4: Configurar index

Adicionar no corpo do html
```
<div id="app"></div>
<script type="module" src="/src/main.js"></script>

```
## Step 5:  Crie um arquivo src/main.js ou src/main.ts caso esteja usando TypeScript

```
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```
## Step 6: Criar o componente principal App.vue

```
<template>
  <div id="app">
    <h1>Bem-vindo ao Vue com Vite!</h1>
  </div>
</template>

<script setup>

</script >

<style scoped>
h1 {
  color: #42b983;
}
</style>
```
