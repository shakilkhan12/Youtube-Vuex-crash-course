<template>
<nav>
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/about">About</router-link></li>
</nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
    width: 100%;
    display: flex;
    height: 60px;
    background: #fff;
    align-items: center;
    justify-content: center;
}
nav li {
    list-style: none;
}
nav li a {
    text-decoration: none;
    padding: 0 15px;
    outline: none;
}
</style>