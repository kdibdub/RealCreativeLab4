<template>
<div class="admin">
  <div class="add">
    <div class="form">
      <div class="form-name">
        <input v-model="name" placeholder="Name">
      </div>
      <div class= "form-comment">
        <input v-model="comment" placeholder="Comment" class = "hiya">
      </div>
      <button @click="upload">Upload</button>
    </div>
  </div>
  <div class="comments">
     <div class="comment" v-for="remark in items" :key="remark.id">
       <div class="remark-name">
          <h2>{{remark.name}}</h2>
        </div>
        <div class="remark-comment">
          <p>{{remark.comment}}</p>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
        name: "",
        comment: "",
        addItem: null,
        items: []
      }
  },
  created() {
    this.getItems();
  },
    methods: {
     async getItems() {

       try {
         let response = await axios.get("/api/items");
         this.items = response.data;
         return true;
       } catch (error) {
         console.log(error);
       }
     },
     async upload() {
        try {
        console.log("inside");
          let r1 = await axios.post('/api/items', {
            name: this.name,
            comment: this.comment,
          });
          this.addItem = r1.data;
        } catch (error) {
          console.log(error);
        }
      },
   },

  }
</script>

<style scoped>
form-comment{
  margin-bottom: 25px;
}
.hiya{
width: 40%;
}
.admin{
  margin: auto;
}
.comments{
  justify-content: flex-start;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
