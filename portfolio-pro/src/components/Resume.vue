<template>
    
    <div class="wrapper">
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
            :work="navbar.work"
            :contact="navbar.contact"></nav-bar>

        </section>

        <div id="resume">
            <img class="CV" src="../../public/CVpro.png" alt="CV developpeur front-end Moussa Sy">
            <section id="description"> 
                <div v-if="!english">
                    <p>Développeur Front-end de Paris, résidant à l’ile de la Reunion. En tant qu'ancien photographe professionnel, créer du contenu attractif est une passion et trouver des moyens d’être plus productif chaque jours est une mission.</p>
                </div>

                <div v-else>
                    <p>Front-end developer from Paris, currently living in Reunion island. As a former professionnal photographer, creating attractive content is a passion and finding ways to be more productive everyday is a mission.</p>
                </div>

                <h3>interests</h3>
                <div id="galerie">
                    <img src="../assets/astro.jpeg" alt="photo astronomie">
                    <img src="../assets/bball.jpeg" alt="photo panier de basket ball">
                    <img src="../assets/books.jpeg" alt="photo d'une bibliotheque">
                    <img src="../assets/portrait.png" alt="photo de portrait">
                </div>
                    <button @click="toggleLang"> {{ language }} </button>
            </section>
        </div>

        <button @click="toggleSkills()" class="myButton">Show Skills</button>

        <section id="skillWrapper" v-if="showSkills">
        
            <section id="Skills">      
                    <div class="skill">
                        <div class="outer">
                            <div class="inner">
                                
                                <div id="number"> frontend : {{ number.frontend }} </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg"  class="circle1" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>

                    <div class="skill">
                        <div class="outer">
                            <div class="inner">
                                <div id="number"> backend : {{ number.backend }} </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg"  class="circle2" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>

                    <div class="skill">
                        <div class="outer">
                            <div class="inner">
                                <div id="number"> Vue.js : {{ number.vue }} </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg"  class="circle3" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>

            </section>
        </section>
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
            english: true,
            language: 'Passer au Français ?',
            title: ['R', 'E', 'S', 'U', 'M', 'E'],
            navbar: {
                home: 'Home',
                work: 'Work',
                resume: 'Resume',
                contact: 'Contact',
            },
            number: {
                    frontend: null,
                    backend: null,
                    vue: null,
            },
            showSkills: false
        }
    },
    methods: {
        toggleLang() {
            this.english = !this.english

            if (this.english) {
                this.language = 'Passer au Français ?'
            } else {
                this.language = 'Switch to English'
            }
        },
        displayNumber() {
            let counterFront = 0;
            let counterBack = 0;
            let counterVue = 0;

            //Frontend
            setInterval(() => {
                if (counterFront == 80) {
                    clearInterval()
                } else {
                    counterFront++
                    this.number.frontend = counterFront + '%'
                }
            }, 25)

            //Backend
            setInterval(() => {
                if (counterBack == 65) {
                    clearInterval()
                } else {
                    counterBack++
                    this.number.backend = counterBack + '%'
                }
            }, 30)

            //vue.js
            setInterval(() => {
                if (counterVue == 85) {
                    clearInterval()
                } else {
                    counterVue++
                    this.number.vue = counterVue + '%'
                }
            }, 23)
        },
        toggleSkills() {
            this.showSkills = !this.showSkills
        }
    },
    mounted() {
       this.displayNumber()
    }
}
</script>


<style scoped>
@font-face {
    font-family: 'Monoton';
    src: url('../assets/Monoton-Regular.ttf');
}
.wrapper {
    top: 0;
    left: 0;
    width: 100vw;
    animation: pageDown 2s forwards;
    background: rgb(239,228,221);
    background: linear-gradient(90deg, rgba(239,228,221,1) 43%, rgba(255,255,255,1) 88%);
}
#resume {
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
}
.CV {
    width: 50%;
    height: auto;
    border: none;
    position: relative;
}
button {
    width: 50%;
    padding: 1%;
    background-color: rgb(245, 232, 224);
    border: none
}
#description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    border: 1%;

}
#description p {
    animation: paragraphs 2s forwards;
    padding: 5%;
}
#galerie {
    border: black solid 1px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
#galerie img {
    width: 25%;
    object-fit: cover;
    opacity: 0.5;
}
#galerie img:hover {
    opacity: 1;
}
#Title {
    font-family: 'Monoton';
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
h3 {
    font-size: 2vw;
}
ul {
    display: flex;
    flex-direction: row;
    list-style: none;
}
li {
    font-family: Monoton;
    font-size: 4vw;
}
li:hover {
    animation: letters 0.5s forwards;
}

/**************************
********skills*************
****************************/

#Skills {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 20vh;
}
#skillName {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 10vh;
}

.skill {
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.myButton {
	box-shadow: 0px 1px 0px 0px #1c1b18;
	background:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);
	background-color:#eae0c2;
	border-radius:15px;
	border:2px solid #333029;
	display:inline-block;
	cursor:pointer;
	color:#505739;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:12px 16px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
.myButton:hover {
	background:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
	background-color:#ccc2a6;
}
.myButton:active {
	position:relative;
	top:1px;
}
.outer {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 5px -1px rgba(255,255,255,0.7);
}
.inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0px rgba(255,255,255,1),
                0.5px 0.5px 0px rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0,0,0,0.05);
                
}
#number {
    font-weight: 500px;
}
circle {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 472;
    stroke-dashoffset: 472; /*makes a part hidden*/
    animation: skillAnim 2s linear forwards;
}
.circle1 circle {
    animation: skillAnim 2s linear forwards;
}
.circle2 circle {
    animation: skillAnim2 2s linear forwards;
}
.circle3 circle {
    animation: skillAnim3 2s linear forwards;
}
svg {
    position: absolute;
}

/************************************
************* Animations ************
*************************************/
@keyframes skillAnim {
    100% {
        stroke-dashoffset: 95;
    }
}
@keyframes skillAnim2 {
    100% {
        stroke-dashoffset: 165;
    }
}
@keyframes skillAnim3 {
    100% {
        stroke-dashoffset: 71;
    }
}

@keyframes paragraphs {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes pageDown {
    from {
        transform: translateY(-100vh);
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

/************************************
************* RESPONSIVE*************
*************************************/
@media only screen and (max-width: 769px) {
    #resume {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .CV{
        width: 80vw;
    }
}
@media only screen and (min-width: 769px) {
    #description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    font-weight: 500;
    border: 1%;
    }
}
</style>