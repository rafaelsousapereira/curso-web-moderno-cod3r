<template>
  <div id="app">
    <h1>Olá Vue!</h1>
  </div>
</template>

<script>

export default {

}

</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: url("/./src/fonts/Roboto-Thin.ttf");
}

* {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  text-align: center;

  color: white;

  background: linear-gradient(to right, rgb(83,105,118), rgb(41, 46, 73));
}
</style>