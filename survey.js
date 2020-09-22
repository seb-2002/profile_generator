const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favorite? ", (meal) => {
        rl.question("What's your favorite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your favorite? ", (sport) => {
            rl.question("What is your superpower? ", (power) => {
              activity = activity.toLowerCase();
              music = music.toLowerCase();
              music = music.toLowerCase();
              meal = meal.toLowerCase();
              food = food.toLowerCase();
              sport = sport.toLowerCase();
              power = power.toLowerCase();
              console.log(
                `Hi I'm ${name}! My absolute favorite activity is ${activity}. I listen to ${music}, especially when I'm eating ${food} for ${meal}. I'm crazy about ${sport}, which I rock at due to my powers of ${power}`
              );
              rl.close();
            })
          })
        })
      })
    })
  })
  
});




// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!