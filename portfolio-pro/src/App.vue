<template>
  <h1 id="name"> {{ name }} </h1>
  <h3 id="title"> {{ title }} </h3>

  <ul id="nav">
    <li @click="toggleResume">Resume</li>
    <li @click="toggleWork">My Work</li>
    <li @click="toggleContact">Contact Me</li>
  </ul>

  <div id="resume" v-if="showResume">
    <resume></resume>
  </div>

  <div id="Work" v-else-if="showWork">
    <work></work>
  </div>

  <div id="contact" v-else-if="showContact">
    <contact></contact>
  </div>

  <div id="else" v-else>
    <p>Click above to know more about me or contact me.</p>
  </div>
</template>

<script>
import Resume from './components/Resume.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
export default {
  components: {
    Resume,
    Work,
    Contact
  },
  data() {
    return {
      name: "Moussa Sy",
      title: "Front-end Developper",
      showResume: false,
      showWork: false,
      showContact: false,
      map: undefined
    }
  },
  methods: {
    toggleResume() {
      this.showResume = !this.showResume

      if (this.showResume === true) {
        this.showWork = false
        this.showContact = false
      }
    },
    toggleWork() {
      this.showWork = !this.showWork

      if (this.showWork === true) {
        this.showResume = false
        this.showContact = false
      }
    },
    toggleContact() {
      this.showContact = !this.showContact

      if (this.showContact === true) {
        this.showWork = false
        this.showResume = false
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 5%;
  font-family: 'Courier New', Courier, monospace;
}
#name {
  color: rgb(239, 228, 221);
  font-size: 3em;
  text-align: center;
  margin-bottom: 0;
  animation: arrival 1s forwards;
}
#title {
  color: rgb(239, 228, 221);
  font-size: 3rem;
  text-align: center;
  animation: arrival 2s forwards;

}
#nav {
  margin: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

ul {
  list-style: none;
}
li {
  padding: 1% 3%;
  background-color: rgb(226, 214, 207)
}
li:hover {
  animation: listButton 0.5s forwards;
}
li:hover::after {
  animation: listButton 0.5s reverse;
}

#resume, #work, #contact {
  animation: arrival 1s forwards;
}

@keyframes listButton {
  from {
    padding: 1% 3%;
    background-color: rgb(226, 214, 207)
  }
  to {
    padding: 1% 5%;
    border-radius: 10%;
    background-color: black;
    font-size: large;
    color: rgb(228, 166, 127)
  }
}

@keyframes arrival {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>