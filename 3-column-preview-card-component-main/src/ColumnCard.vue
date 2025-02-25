<template>
  <div class="content">
    <div
      class="card"
      v-for="card in cardData"
      :key="card.id"
      :class="card.color"
    >
      <div class="card__text">
        <img :src="card.imgSrc" alt="Vehicle image" />
        <h1>{{ card.title }}</h1>
        <p>{{ card.description }}</p>
      </div>
      <button>Learn More</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cardData = [
  {
    imgSrc: "/images/icon-sedans.svg",
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "orange",
  },
  {
    imgSrc: "/images/icon-suvs.svg",
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "cyan",
  },
  {
    imgSrc: "images/icon-luxury.svg",
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "dark-cyan",
  },
];
</script>

<style scoped>
:root {
  --bright-orange: hsl(31, 77%, 52%);
  --dark-cyan: hsl(184, 100%, 22%);
  --very-dark-cyan: hsl(179, 100%, 13%);
}
.orange {
  background-color: hsl(31, 77%, 52%);
}
.cyan {
  background-color: hsl(184, 100%, 22%);
}
.dark-cyan {
  background-color: hsl(179, 100%, 13%);
}
.content {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  max-width: 921px;
}

.card {
  max-width: 307px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 44px;
}

@media (max-width: 655px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 100%;
    max-width: none;
  }
}
</style>
