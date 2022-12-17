<template>
  <div class="sans-serif">
    <NuxtPage />
  </div>
</template>
<style>


/* use media query to make white-on-black for light mode, and black-on-white for dark mode */
body {
  background-color: #000;
  color: #fff;
}

a:link, a:visited, a:hover {
  color: #fff;
}

/* use media query to make white-on-black for light mode, and black-on-white for dark mode */
@media (prefers-color-scheme: light) {
  body {
    background-color: #fff;
    color: #000;
  }
  a:link, a:visited, a:hover {
    color: #000;
  }
}


</style>