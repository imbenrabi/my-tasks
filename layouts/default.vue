<template>
  <div>
    <div class="navbar">
      <div class="container flex">
        <h1 class="logo">My-Tasks</h1>
        <ul>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/todos">Todos</nuxt-link>
        </ul>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
/* navbar */
.navbar {
  background-color: var(--primary-color);
  color: #fff;
  height: 70px;
}

.navbar ul {
  display: flex;
}

.navbar a {
  color: #fff;
  padding: 10px;
  margin: 0 5px;
}

.navbar a:hover {
  text-decoration: underline;
}

.navbar .flex {
  justify-content: space-between;
}

:root {
  --primary-color: #ffb142;
  --secondary-color: #cc8e35;
  --dark-color: #2c2c54;
  --light-color: #f4f4f4;
  --success-color: #5cb85c;
  --error-color: #d9534f;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: #333;
  line-height: 1.6;
  background: var(--light-color);
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #333;
}

h1,
h2,
h3 {
  font-weight: 300;
  line-height: 1.2;
  margin: 10px 0;
}

.hidden {
  visibility: hidden;
  height: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  overflow: auto;
  padding: 0 2rem;
}

.card {
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px;
}

.btn {
  display: inline-block;
  padding: 10px 30px;
  cursor: pointer;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
}

.btn-outline {
  background-color: transparent;
  border: 1px #fff solid;
}

.btn:hover {
  transform: scale(0.98);
}

/* Backgrounds & colored buttons */
.bg-primary,
.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
}

.bg-secondary,
.btn-secondary {
  background-color: var(--secondary-color);
  color: #fff;
}

.bg-dark,
.btn-dark {
  background-color: var(--dark-color);
  color: #fff;
}

.bg-light,
.btn-light {
  background-color: var(--light-color);
  color: #333;
}

.bg-primary a,
.btn-primary a,
.bg-secondary a,
.btn-secondary a,
.bg-dark a,
.btn-dark a {
  color: #fff;
}

/* Text colors */
.text-primary {
  color: var(--primary-color);
}

.text-secondary {
  color: var(--secondary-color);
}

.text-dark {
  color: var(--dark-color);
}

.text-light {
  color: var(--light-color);
}

/* Text sizes */
.lead {
  font-size: 20px;
}

.sm {
  font-size: 1rem;
}

.md {
  font-size: 2rem;
}

.lg {
  font-size: 3rem;
}

.xl {
  font-size: 4rem;
}

.text-center {
  text-align: center;
}

/* Alert */
.alert {
  background-color: var(--light-color);
  padding: 10px 20px;
  font-weight: bold;
  margin: 15px 0;
}

.alert i {
  margin-right: 10px;
}

.alert-success {
  background-color: var(--success-color);
  color: #fff;
}

.alert-error {
  background-color: var(--error-color);
  color: #fff;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* Margin */
.my-1 {
  margin: 1rem 0;
}

.my-2 {
  margin: 1.5rem 0;
}

.my-3 {
  margin: 2rem 0;
}

.my-4 {
  margin: 3rem 0;
}

.my-5 {
  margin: 4rem 0;
}

.m-1 {
  margin: 1rem;
}

.m-2 {
  margin: 1.5rem;
}

.m-3 {
  margin: 2rem;
}

.m-4 {
  margin: 3rem;
}

.m-5 {
  margin: 4rem;
}

/* Padding */
.py-1 {
  padding: 1rem 0;
}

.py-2 {
  padding: 1.5rem 0;
}

.py-3 {
  padding: 2rem 0;
}

.py-4 {
  padding: 3rem 0;
}

.py-5 {
  padding: 4rem 0;
}

.p-1 {
  padding: 1rem;
}

.p-2 {
  padding: 1.5rem;
}

.p-3 {
  padding: 2rem;
}

.p-4 {
  padding: 3rem;
}

.p-5 {
  padding: 4rem;
}
</style>
