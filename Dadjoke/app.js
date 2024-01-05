
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");


const addNewJoke = async () => {
    const theJoke = await getDadJoke();
    const newLi = document.createElement("li");
    newLi.append(theJoke);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch(err) {
        console.log("NO JOKES ARE AVAILABLE, SORRY :(");
    }
}

button.addEventListener("click", addNewJoke);