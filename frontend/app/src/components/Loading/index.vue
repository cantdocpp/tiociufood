<template>
    <div class="loading"></div>
</template>

<style scoped>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .loading {
    width: 2rem;
    height: 2rem;
    margin: 2rem;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #8A8A8A;
    border-right-color: #8A8A8A;
    border-bottom-color: #8A8A8A;
    animation: 1.5s spin infinite linear;
  }
  .loading__wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
