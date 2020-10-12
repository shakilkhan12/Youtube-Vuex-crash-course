<template>
  <form @submit.prevent="submitForm">
      <input type="text" name="" class="control" v-model="name" placeholder="Enter name...">
      <input type="submit" value="Add Name" class="btn-name">
  </form>
  <div v-for="(names, index) in allNames" :key="index">
      <div class="name__list">
          <div class="name__list-name">{{names.name}}</div>
          <div class="name__list-btn">
              <button @click="removeName(names.id)"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
   name: 'Names',
   data(){
       return {
           name: ''
       }
   },
   methods: {
       ...mapActions(['addName', "removeName"]),
       submitForm(){
           this.addName({id: new Date(), name: this.name});
           this.name = ""
       }
   },
   computed: mapGetters(["allNames"])
}
</script>

<style>
.name__list {
    width :600px;
    margin: 10px auto;
    background: #42b983;
    border-left: 4px solid #2c3e50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    color: #fff;
}
button {
    background: transparent;
    color: #fff;
    border:none;
    outline: none;
    cursor: pointer;
}
form {
    width: 600px;
    margin: 25px auto;
}
.control {
    width :100%;
    border: none;
    padding: 15px 10px;
    outline: none;
    margin-bottom: 10px;
}
.btn-name {
    width: 100%;
    background: #2c3e50;
    padding: 13px 5px;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
}
</style>