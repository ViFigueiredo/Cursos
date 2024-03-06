<script lang="ts" setup></script>

<template>
  <nav>
    <span> Tutorial Vue3 </span>

    <ul>
      <li><a href=""> Home</a></li>
      <li><a href=""> Sobre</a></li>
      <li><a href=""> Login</a></li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>

nav {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cae7e8;    
}

ul {
    display: flex;
    list-style-type: none;
}

ul li {
    padding: 0 5px;
}

ul li a {
    text-decoration: none;
    color: #117177;
}

</style>
