<template>
  <div class="card">
    <div class="card__title">
      <img src="/assets/images/icon-star.svg" alt="star purple" />
      <h1>FAQs</h1>
    </div>
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="question-item"
    >
      <div class="question-label">
        <label>{{ question.question }}</label>
        <input type="checkbox" @click="toggleState(index)" />
      </div>
      <p class="question-answer" v-if="question.checked">
        {{ question.answer }}
      </p>
      <hr   v-if="index != questions.length -1" />
    </div>
  </div>
</template>

<style scoped>
.card {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 600px;
  max-width: 600px;
  padding: 40px;
  border-radius: 16px;
  background-color: var(--white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card__title {
  display: flex;
  margin-bottom: 15px;
}

.card__title > img {
  width: 5%;
}
.card__title > h1 {
  font-weight: bold;
  font-size: 3em;
  letter-spacing: 1px;
  padding-left: 20px;
}

h1,
p,
label {
  font-family: "WorkSans";
  color: var(--dark-purple);
}

input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  background-image: url("/assets/images/icon-plus.svg");
  background-size: cover;
  cursor: pointer;
}

.question-label {
  display: flex;
  justify-content: space-between;
}

.question-label {
  padding: 20px 0;
  font-weight: 700;
  font-size: 16px;
}

label:hover, label:focus-visible{
  color: #ad28eb;
  cursor: pointer;
}

p {
  color: var(--grayish-purple);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}
input[type="checkbox"]:checked {
  background-image: url("/assets/images/icon-minus.svg");
}

hr {
  border-top: 1px solid var(--light-gray);
  margin-top: 10px;
}

@media (max-width: 768px) {
  
  .card {
    top: 5%;
    width: 90%;
    padding: 20px;
  }

  .card__title > h1 {
    font-size: 2em;
  }

  .question-label {
    font-size: 14px;
  }

  p {
    font-size: 14px;
  }
}
</style>

<script setup>
import { ref } from "vue";
const questions = ref([
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    checked: false,
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    checked: false,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    checked: false,
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    checked: false,
  },
]);

const toggleState = (index) => {
  questions.value[index].checked = !questions.value[index].checked;
};
</script>
