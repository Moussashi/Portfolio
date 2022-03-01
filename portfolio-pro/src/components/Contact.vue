<template>
<div id="wrapper">
    <div id="Title">
        <h1>CONTACT</h1>
        <nav-bar 
                id="nav"
                :home="navbar.home"
                :resume="navbar.resume"
                :work="navbar.work">
        </nav-bar>
    </div>

    <section id="contact">
        <Form>
            <label for="Name">Your Name</label>
            <input type="text" required>

            <label for="Name">Email Adress</label>
            <input type="email" required>

            <label for="Name">Message</label>
            <textarea type="text" cols="60" rows="8" placeholder="Insert your message here" required></textarea>

            <button> Let's Talk </button>
        </Form>
        <!--<img src="../../public/map.png" alt="map of reunion island"> -->
       
            <custom-map id="map"></custom-map>
    </section>

</div>
</template>

<script>
import CustomMap from './Map.vue'
import navBar from './UI/navBar.vue'
export default {
    components: { CustomMap, navBar },
    data() {
        return {
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
    height: 100vh;
    background: rgb(239,228,221);
    background: linear-gradient(90deg, rgba(239,228,221,1) 43%, rgba(255,255,255,1) 88%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#Title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-family: Monoton;
    color: black;
}
h1 {
  font-size: 3em;
  text-align: center;
  margin-bottom: 0;
}

form {
    display: flex;
    flex-direction: column;
    width: 50%;
}
button {
    background-color: rgb(239, 228, 221);
    border: none;
    padding: 5%;
    border-top: 5px;
    width: 50%;
    align-self: center;
}
button:hover {
    animation: buttonHov 0.3s forwards;
}

#contact {
    display: flex;
    justify-content: space-between;
    height: 50vh;
}
form {
    width: 30%;
}
img {
    animation: mapOut 0.3s forwards;
}
img:hover {
    animation: mapGrow 0.3s forwards;
}
#map {
    width: 60%;
}
@keyframes buttonHov {
    100% {
        width: 100%;
        background-color: black;
        color: rgb(239, 228, 221);
        font-weight: bolder;
        font-size: larger; 
    }
}
@keyframes mapGrow {
    from {
        width: 40%;
    }
    to {
        width: 55%;
    }
}
@keyframes mapOut {
    from {
        width: 55%;
    }
    to {
        width: 40%;
    }
}
/*********************************
**********RESPONSIVE**************
**********************************/
@media only screen and (max-width: 769px) {
    #Title {
        display: flex;
        flex-direction: column;
    }
    #contact {
        display: flex;
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }
    #map {
        width: 80%;
        height: 80%;
        border: black 1px solid;
    }
    form {
        width: 70%;
    }
}
</style>