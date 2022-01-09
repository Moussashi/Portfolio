<template>
    <div id="resume">
        <img src="../../public/CVpro.png" alt="CV developpeur front-end Moussa Sy">
        <section id="description"> 
            <div v-if="!english">
                <p>Développeur Front-end de Paris, résidant à l’ile de la Reunion. Ancien photographe professionnel, créer du contenu attractif est une passion et trouver des moyens d’être plus productif chaque jours est une mission. Choisir une personne qui a trouvé sa voie n’est jamais un mauvais choix.</p>
            </div>

            <div v-else>
                <p>Front-end developper from Paris, currently living in Reunion island. Former professionnal photographer, creating attractive content is a passion and finding ways to be more productive everyday is a mission. Choosing someone who found his way is never a bad choice.</p>
            </div>
                <button @click="toggleLang"> {{ language }} </button>
        </section>
    </div>

</template>

<script>
export default {
    data() {
        return {
            english: true,
            language: 'Passer au Français ?'
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
#resume {
    display: flex;
    flex-direction: row;
}
img {
    width: 50%;
}
button {
    width: 50%;
    padding: 1%;
    background-color: rgb(245, 232, 224);
    border: solid white 1px;
}
#description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
}
</style>