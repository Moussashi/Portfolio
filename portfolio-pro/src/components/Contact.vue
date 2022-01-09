<template>
    <h1>Contact Me</h1>

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
        <img src="../../public/map.png" alt="map of reunion island">
    </section>


</template>

<style scoped>
h1 {
  color: rgb(239, 228, 221);
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
</style>