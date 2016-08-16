var temperature = 90;

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a good idea")
} else if (temperature < 0 ) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
