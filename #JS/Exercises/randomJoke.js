async function loadJoke() {
    const jokeBox = document.getElementById("joke");

    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode");
        const data = await response.json();

        if (data.joke) {
            jokeBox.innerText = data.joke;
        } else {
            jokeBox.innerText = "No joke found.";
        }
    } catch (error) {
        jokeBox.innerText = "Failed to fetch joke.";
        console.error("Error fetching joke:", error);
    }
}

loadJoke();