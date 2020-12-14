<template>
  <div class="home">
    <div class="owner">
      <div class="owner-item">
        <p>Hey I'm JJ! I'm a mom to the cutest little one year old and full time sonographer. Baking is my passion and
            I love being able to have such a fun and yummy creative outlet!
            I specialize in gluten free desserts and I love experimenting with new recipes.
            I've been gluten free for 2 years and I love being able to make delicious desserts for other gluten free people!</p>
      </div>
    </div>
    <ItemsList :items="items" />
  </div>
</template>

<script>
import ItemsList from "../components/ItemsList.vue"
export default {
  name: 'Home',
  components: {
    ItemsList
  }
 }
</script>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
}

.owner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.owner-item p {
  width: 500px;
}
<style>

</style>
