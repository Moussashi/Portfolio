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
                    <p>Développeur Front-end de Paris, résidant à l’ile de la Reunion. Ancien photographe professionnel, créer du contenu attractif est une passion et trouver des moyens d’être plus productif chaque jours est une mission. Choisir une personne qui a trouvé sa voie n’est jamais un mauvais choix.</p>
                </div>

                <div v-else>
                    <p>Front-end developper from Paris, currently living in Reunion island. Former professionnal photographer, creating attractive content is a passion and finding ways to be more productive everyday is a mission. Choosing someone who found his way is never a bad choice.</p>
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
                contact: 'Contact'
            }
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
        }
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

/************************************
************* Animations ************
*************************************/

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
@media  only screen and (max-width: 769px) {
    #resume {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .CV{
        width: 80vw;
    }
}
@media  only screen and (min-width: 769px) {
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