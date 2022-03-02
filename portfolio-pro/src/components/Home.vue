<template>
  <div id="wrapper">
    <div id="presentation">
        <h1 id="name"> {{ name }} </h1>
        <h3 id="title"> {{ title }} </h3>
    </div>

    <nav>
      <div class="navigation">
        <img src="../assets/triforce.png" v-if="!triforceFull" :class="leave" id="triforce" @click="toggleButton()" alt="triforce image">
        <img src="../assets/triforceFull.png" v-else id="triforceFull" @click="toggleButton()" alt="full triforce image">
        <div class="components" v-if="triforceFull">
          <router-link to="/Portfolio/work"> <p>Work</p> </router-link>
          <router-link to="/Portfolio/resume"> <p>Resume</p> </router-link>
          <router-link to="/Portfolio/contact"> <p>Contact</p> </router-link>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: " Hello, I'm Moussa Sy",
      title: "Front-end Developper from France",
      triforceFull: false,
      leave: null
    }
  },
  methods: {
    toggleButton() {
      this.triforceFull = !this.triforceFull

      if (!this.triforceFull) {
        this.leave = 'leave'
      } else {
        this.leave = null
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 5%;
  font-family: 'Courier New', Courier, monospace;
}
#wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
#name {
  color: rgb(239, 228, 221);
  font-size: 3em;
  text-align: center;
  margin-bottom: 0;
  animation: arrival 2s forwards;
}
#title {
  color: rgb(239, 228, 221);
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
  animation: arrival 3s forwards;

}
.navigation {
  width: 40vw;
  height: 40vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.components {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  animation: arrivalY 0.7s forwards;
  padding: 1%;
  margin-top: 10%;
}
a {
  color: black;
  text-decoration: none;
}
p {
  font-size: 2vw;
}
p:hover {
  animation: underline 1s forwards;
}
#triforce {
  width: 10vw;
  margin: 0 auto;
  animation: arrival 1s forwards;

}
#triforceFull {
  width: 20vw;
  margin: 0 auto;
  animation: arrival 1s ease-in-out;
}
.leave {
  animation: leaveY 1s forwards;
}
@keyframes arrival {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes arrivalY {
  from {
    transform: translateY(-150px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes leaveY {
  from {
    transform: translateY(0);
    opacity: 1;
  }
    to {
      transform: translateY(-150px);
      opacity: 0;
    }
}
@keyframes underline {
  from {
    text-decoration: none;
  }
  to {
    text-decoration: underline goldenrod 2px;
    background-color: rgb(239, 228, 221);
    padding: 10%;
  }
}
</style>

/* On click add a class to the buttons to recreate the hover final state*/

/* same as above for the work component, to know wich one is active */