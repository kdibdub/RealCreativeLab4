<template>
  <div class="wrapper">
    <div class="items">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="info">
          <h1>{{item.name}}</h1>
        </div>
        <div class="image">
          <img :src="'/images/'+item.image">
        </div>
        <div class="description">
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemsList',
  computed: {
    items() {
      return this.$root.$data.items;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.item img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.item .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #FFD4D7;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.description {
  display: flex;
}

.description p {
  width: 200px;
}

.auto {
  margin-left: auto;
}
</style>
