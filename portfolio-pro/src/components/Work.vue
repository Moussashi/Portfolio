<template>
    <div id="wrapper">
        <!-- Title -->
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

            <!-- Navigation Bar -->
            <nav-bar 
                id="nav"
                :home="navbar.home"
                :resume="navbar.resume"
                :contact="navbar.contact"></nav-bar>

        </section>

        <!-- Projects -->
        
        <!-- Vi motiv -->
        <div class="content">
            <img src="../../public/Vi-Motiv.png" alt="Logo Vi-Motiv">
            <p class="projectDescription" >Vi Motiv is a personnal project about productivity and coding. Using Api calls, form submission and authentification to showcase what I learned during my Openclassroom course as a fullstack developper.</p>

            <div class="captures">
                <img src="../assets/vi-motiv-website1.png" alt="Vi-motiv screenshots">
                <img src="../assets/vi-motiv-website3.png" alt="Vi-motiv screenshots">
                <img src="../assets/vi-motiv-website2.png" alt="Vi-motiv screenshots">
                <img src="../assets/vi-motiv-website4.png" alt="Vi-motiv screenshots">

            </div>
            <video controls >
                <source src="../assets/ViMotivVideo.mp4"
                        type="video/mp4">

                Sorry, your browser doesn't support embedded videos.
            </video>

            <h2>tech</h2>
            <div class="logo">
                <img src="../assets/vuejs.png" alt="Vue.js logo">
                <img src="../assets/javascript.png" alt="javascript logo">
                <img src="../assets/nodejs.png" alt="node.js logo">
                <img src="../assets/express.png" alt="express.js logo">
                <img src="../assets/mysql.png" alt="mysql logo">
            </div>
        </div>

        <!-- Portraits -->
        <div class="content">
            <h2>Portrait Photography</h2>
            <p>by me</p>
            <p class="projectDescription">Simple website with photos I shot as a photographer. Displayed horizontaly.</p>
            <div class="captures">
                <img src="../assets/portraitwebsite1.png" alt="screenshot of my portrait photography website">
                <img src="../assets/portraitwebsite2.png" alt="screenshot of my portrait photography website">
            </div>

            <video controls >
                <source src="../assets/PortraitVideo.mp4"
                        type="video/mp4">

                Sorry, your browser doesn't support embedded videos.
            </video>

            <h2>tech</h2>
            <div class="logo">
                <img src="../assets/vuejs.png" alt="Vue.js logo">
                <img src="../assets/javascript.png" alt="javascript logo">
            </div>
        </div>

        <div class="content">
            <h2>Groupomania</h2>
            <p>Final project Openclassroom</p>
            <p class="projectDescription">Final project of the Fullstack web developer course with openclassroom. Had to make a social media app for a company. Posting texts and images, creation of a profile with authentification</p>
            
            <video controls >
                <source src="../assets/GroupomaniaVideo.mp4"
                        type="video/mp4">

                Sorry, your browser doesn't support embedded videos.
            </video>

            <h2>tech</h2>
            <div class="logo">
                <img src="../assets/vuejs.png" alt="Vue.js logo">
                <img src="../assets/javascript.png" alt="javascript logo">
                <img src="../assets/nodejs.png" alt="node.js logo">
                <img src="../assets/express.png" alt="express.js logo">
                <img src="../assets/mysql.png" alt="mysql logo">
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

/*********************************************
****************ANIMATIONS********************
**********************************************/

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

/*********************************************
************RESPONSIVE************************
**********************************************/
@media only screen and (max-width: 769px) {
    #Title {
        flex-direction: column;
        justify-content: center;
        padding: 0;
        border: 0;
    }
}
</style>
