<template>
    <div id="work">
        <section id="sideBar">
            <p>Vi-Motiv</p>
            <p>Manga Quizz</p>
            <p>enigma</p>
        </section>
        <div class="content">
            <img src="../../public/Vi-Motiv.png" alt="Logo Vi-Motiv">
            <p class="workDescription">vi motiv vi vi vi vi vi </p>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {

        }
    }
}
</script>


<style scoped>
#work {
    width: 90%;
    border: crimson 4px solid;
    display: flex;
    flex-direction: row;
}
#sideBar {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 20%;
    border: black 4px solid;
}
.content {
    width: 80%;
    text-align: center;
    border: cadetblue 4px solid;
}
#sideBar p {
    background-color: rgb(226, 214, 207);
    padding: 10%;
}
#sideBar p:hover {
    animation: workButtons 1s forwards;
}

@keyframes workButtons {
  to {
    padding: 15%;
    border-radius: 10%;
    background-color: black;
    font-size: large;
    font-weight: bold;
    color: rgb(228, 166, 127)
  }
}
</style>
