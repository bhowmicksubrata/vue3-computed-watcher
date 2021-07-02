<template>
  <div>
    Default Value : {{ copyOfWatchMe }} &nbsp; After increment : {{ watchMe }}
  </div>
  <br />
  <div>
    <button class="btn btn-primary" @click="increment()">Change Value</button>
  </div>
  <div>
    {{ message }}
  </div>
</template>
<script>
export default {
  name: "VueWatcher",
  data() {
    return {
      watchMe: 0,
      //copyOfWatchMe: 0,
      message: "",
    };
  },
  computed: {
    copyOfWatchMe() {
      const copyOfWatchMe = 0; //this.watchMe;
      return copyOfWatchMe;
    },
  },
  props: {
    msg: String,
  },
  methods: {
    increment() {
      return this.watchMe++;
    },
  },
  watch: {
    watchMe() {
      this.message = "new value :: " + this.watchMe;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
