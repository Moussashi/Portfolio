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

        <!-- RESUME -->


        <div id="resume">
            <img class="CV" src="../../public/CV-frontend-SY.png" alt="CV developpeur front-end Moussa Sy">
            <section id="description"> 
                <div v-if="!english">
                    <p>Développeur Front-end de Paris. En tant qu'ancien photographe professionnel, 
                        créer du contenu attractif est une passion et trouver des moyens d’être plus 
                        productif chaque jours est une mission. Après une formation réussie avec OpenClassrooms
                        en tant que Développeur Web je continue de me former en UI/UX design et animations dans 
                        le but d'atteindre un niveau Awwwards. Je suis ouvert à l'apprentissage de nouveaux frameworks
                        ou languages. N'hésitez pas à me contacter, je suis disponible en remote ou sur site (Paris ou Toulouse).


                    </p>
                </div>

                <div v-else>
                    <p>Front-end developer from Paris. As a former professionnal photographer,
                        creating attractive content is a passion and finding ways to be more 
                        productive everyday is a mission. After a sucessful full course with 
                        OpenClassrooms as a web developer I'm carrying on learning with UI/UX 
                        design and animations to one day reach Awwards level. I'm open to learn
                         new frameworks or programming languages. Do not hesitate to reach me, 
                         I am available for a remote job or on site (Paris or Toulouse).</p>
                </div>
                
                <button @click="toggleLang"> {{ language }} </button>

            </section>

                <section id="interests">
                    <h2>interests</h2>
                    <div id="galerie">
                        <div class="galerieCard astro">
                            <h3>Astronomie <fa class="icon" icon="meteor"/></h3>
                            <p>Passion pour l'astronomie, suivi de l'actualité dans ce domaine 
                                ainsi que pratique de l'astrophotographie au reflex. 
                                Un amour de la photo de paysages qui s'est étendu au-delà de l'exosphère</p>
                        </div>
                        
                        <div class="galerieCard bball">
                            
                            <div class="bballText books">
                                <h3>Lecture  <fa class="icon" icon="book-open"/></h3>
                                <p>Amoureux de livres policiers et fantastiques, Dan Brown
                                    , Bernard Werber, Stephen King et tout particulièrement
                                     J.K Rowling et la série Harry Potter <fa class="icon" icon="bolt"/></p>
                                
                            </div>

                            <div class="bballText">
                                <h3>Basket-Ball <fa class="icon" icon="basketball"/></h3>
                                <p>Pratique active du basketball en compétition et pour le plaisir depuis 2003,
                                    suivi régulier de l'actualité basket et du sport en général (football, boxe, arts martiaux).
                                     Pratique d'art martiaux en club: boxe anglaise, Vo Vietnam, Hapkido, jiu jitsu brésilien
                                </p>
                                <img src="../assets/bballMe.jpeg" alt="Photographie de moi même en activitéz">
                            </div>
                            
                        </div>
                        
                        <div class="portrait">
                            <div class="portraitImg">
                                <h3 class="portraitTitle">Portraits <fa class="icon" icon="camera-retro"/></h3>
                                <img src="../assets/portrait.png" alt="photo de portrait">
                                <img src="../assets/img5.png" alt="photo de portrait">
                                <img src="../assets/img12.png" alt="photo de portrait">
                            </div>
                            <p>Ancien photographe professionnel, spécialisé dans le portrait et mariages. 
                                Organisation d'une exposition dans le 15eme arrondissement de paris, 
                                prochaine exposition en 2023... </p>

                        </div>
                    </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    animation: pageDown 2s forwards;
    background: rgb(239,228,221);
    background: linear-gradient(90deg, rgba(239,228,221,1) 43%, rgba(255,255,255,1) 88%);
}
#resume {
    margin-top: 10vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#resume button {
    -webkit-box-shadow: 13px 12px 15px 5px rgba(92,92,92,0.58); 
    box-shadow: 13px 12px 15px 5px rgba(92,92,92,0.58);
}
#resume button:hover {
    -webkit-box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 13px 12px 15px 5px rgba(92,92,92,0); 
    box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 13px 12px 15px 5px rgba(92,92,92,0);
}
.CV {
    width: 80%;
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
h3, h2{
    font-family: 'Monoton';
}
h2 {
    margin: auto;
    font-size: 3rem;
    padding: 6%;
}
#interests {
    width: 100vw;
    display: flex;
    flex-direction: column;
}
#galerie {
    width: 100vw;
    height: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.galerieCard {
    display: flex;
}
.astro {
    background-image: url('../assets/earth.jpeg');
    color: white;
    display: flex;
    flex-direction: column;
    height: 50vh;
}
.astro p {
    width: 20%;
}
.bball {
    display: flex;
    background-color: white;
    height: 60vh;
}
.bball img {
    object-fit: cover;
}
.bballText {
    text-align: center;
    width: 100%;
    height: 100%;
}
.bballText img {
    height: 60%;
}
.books {
    background-image: url("../assets/books.jpeg");
    background-size: cover;
    color: white;
}
.books p {
    background-color: rgb(1,1,1, 0.6);
}
.portrait {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100vw;
}
.portrait img{
    margin: none;
    height: 100%;
    object-fit: contain;
    width: 33%;
}
.portrait h3 {
    position: absolute;
    right: 10%;
    color: black;
    font-size: 3rem;
}
.portrait p {
    font-size: 1.5rem;
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
/************************************
************* RESPONSIVE*************
*************************************/
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

@media only screen and (min-width: 1224px) {
    #resume {
        width: 60vw;
    }

}
@media only screen and (max-width: 769px) {
    .astro p {
        width: 50vw;
    }
    .bball {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 80vh;
    }
    .books {   
        margin: auto;
        padding: 10% 0;
        display: flex;
        flex-direction: column;
    }
    .bballText {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .portrait {
        flex-direction: column;
        padding: 20% 0;
        align-items: center;
        height: auto;
    }
    .portraitTitle {
        position: relative !important;
        margin: auto;
        padding-bottom: 10%;
        font-size: 2rem;
    }
    .portrait p {
        width: 80vw;
        text-align: start;
    }
    .portrait img {
        width: 50vw;
    }
    .portraitImg {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>