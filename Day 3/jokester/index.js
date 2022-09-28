const jokes = require("give-me-a-joke");
require("colors");
const uwuify = require("uwuify2");

const owo = new uwuify();

jokes.getRandomDadJoke((joke) => {
    try {
        console.log(owo.uwuify(joke).rainbow);
    } catch (err) {
        console.log(owo.uwuify("No Jokes At the moment.").rainbow);
    }
});
