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
      <button :class="card.color">Learn More</button>
    </div>
  </div>
</template>

<script setup>
const cardData = [
  {
    imgSrc: "./images/icon-sedans.svg",
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "orange",
  },
  {
    imgSrc: "./images/icon-suvs.svg",
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "cyan",
  },
  {
    imgSrc: "./images/icon-luxury.svg",
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "dark-cyan",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca:wght@400&display=swap");

body, button ,p {
  font-family: "Lexend Deca", sans-serif;
}

h1 {
  color: hsl(0, 0%, 95%);
  text-transform: uppercase;
  font-family: "Big Shoulders Display", cursive;
  font-weight: 700;
}

p,
button {
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 400;
}

p {
  line-height: 1.8;
  font-weight: 400;
  font-size: 14px;
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
  justify-content: space-around;
  padding: 10px 40px;
}

.card:first-child {
  border-radius: 10px 0px 0px 10px;
}
.card:last-child{
  border-radius: 0px 10px 10px 0;
}
button {
  width: 80%;
  padding: 10px 20px;
  border-radius: 30px;
  border: hsl(0, 0%, 95%) 2px solid;
  cursor: pointer;
}
button:hover {
  background-color: hsl(0, 0%, 95%);
  color: hsl(0, 0%, 0%);
}
@media (max-width: 655px) {
  .content {
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 375px;
    
  }
  .card {
    margin: 0 auto;
    
  }
  .card:first-child{
    border-radius: 10px 10px 0 0;
  }
  .card:last-child{
    border-radius: 0 0 10px 10px;
  }
  button{
    max-width: 50%;

  }
}
</style>
