<template>
    <div id="wrapper">
        <section id="Title">
            <ul>
                <li 
                    v-for="tl in title" 
                    :key="tl"
                    class="letters"
                    >
                    <h1> {{ tl }} </h1>
                </li>
            </ul>

            <nav-bar 
                id="nav"
                :home="navbar.home"
                :resume="navbar.resume"
                :contact="navbar.contact"></nav-bar>

        </section>

        <div class="content">
            <img src="../../public/Vi-Motiv.png" alt="Logo Vi-Motiv">
            <p class="projectDescription" v-if="french">Vi Motiv is a personnal project about productivity and coding. Using Api calls, form submission and authentification to showcase what I learned during my Openclassroom course as a fullstack developper.</p>
            <p class="projectDescription" v-else> Vi motiv est un projet personnel sur la productivité et le développement. Utilisant des appels Api, soumissions de formulaires et authentification pour présenter ce que j'ai pu apprendre durant mon formation avec Openclassroom en tant que développeur Fullstack.</p>

            <div class="captures">
                <img src="../assets/vi-motiv-website1.png" alt="">
                <img src="../assets/vi-motiv-website3.png" alt="">
                <img src="../assets/vi-motiv-website2.png" alt="">
                <img src="../assets/vi-motiv-website4.png" alt="">
            </div>

            <h2>tech</h2>
            <div class="logo">
                <img src="../assets/vuejs.png" alt="Vue.js logo">
                <img src="../assets/javascript.png" alt="javascript logo">
                <img src="../assets/nodejs.png" alt="node.js logo">
                <img src="../assets/express.png" alt="express.js logo">
                <img src="../assets/mysql.png" alt="mysql logo">
            </div>
        </div>

        <div class="content">
            <h2>Portrait Photography</h2>
            <p>by me</p>
            <p class="projectDescription" v-if="french">Vi Motiv is a personnal project about productivity and coding. Using Api calls, form submission and authentification to showcase what I learned during my Openclassroom course as a fullstack developper.</p>
            <p class="projectDescription" v-else> Vi motiv est un projet personnel sur la productivité et le développement. Utilisant des appels Api, soumissions de formulaires et authentification pour présenter ce que j'ai pu apprendre durant mon formation avec Openclassroom en tant que développeur Fullstack.</p>
            <div class="captures">
                <img src="../assets/portraitwebsite1.png" alt="">
                <img src="../assets/portraitwebsite2.png" alt="">
            </div>

            <h2>tech</h2>
            <div class="logo">
                <img src="../assets/vuejs.png" alt="Vue.js logo">
                <img src="../assets/javascript.png" alt="javascript logo">
            </div>
        </div>
    </div>
</template>


<script>
import navBar from './UI/navBar.vue'
export default {
    components: {
        navBar
    },
    data() {
        return {
            title: ['W', 'O', 'R', 'K'],
            french: true,
            navbar: {
                home: 'Home',
                work: 'Work',
                resume: 'Resume',
                contact: 'Contact'
            }
        }
    }
}
</script>


<style scoped>
@font-face {
    font-family: 'Monoton';
    src: url('../assets/Monoton-Regular.ttf');
}
#wrapper {
    width: 100vw;
    animation: pageUp 1.5s forwards;
    background: rgb(239,228,221);
    background: linear-gradient(90deg, rgba(239,228,221,1) 43%, rgba(255,255,255,1) 88%);
}
#Title {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    font-family: Monoton;
    font-size: 4vw;
    padding: 0;
}
.content {
    width: 70vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    padding: 5%;
    border: 2px black solid;
}
.captures {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.captures img {
    width: 70%;
    margin-top: 1%;
}
.projectDescription {
    width: 80%;
    margin: 0 auto;
    padding: 5%;
}
.logo {
    display: flex;
    flex-direction: row;
}
.logo img {
    width: 15%;
}
img {
    width: 30vw;
    margin: 0 auto;
}
ul {
    display: flex;
    flex-direction: row;
    padding: 0;
}
li {
    list-style: none;
}
#nav {
    font-size: 2vw;
}
.letters:hover {
    animation: letters 0.5s ease-in-out
 }

@keyframes pageUp {
    from {
        transform: translateY(100vh);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes letters {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-1vh);
        color: rgb(31, 29, 29);
    }
}

@media only screen and (max-width: 769px) {
    #Title {
        flex-direction: column;
        justify-content: center;
        padding: 0;
        border: 0;
    }
}
</style>
