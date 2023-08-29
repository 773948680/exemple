let resulWeather= {
    code:1189,
wind_mph:15,
wind_kph:24.1,
wind_degree:250,
wind_dir:"WSW",
pressure_mb:1009,
pressure_in:29.8,
precip_mm:0.5,
precip_in:0.02,
humidity:68,
cloud:75,
feelslike_c:18,
feelslike_f:64.4,
vis_km:10,
vis_miles:6,
uv:4,
gust_mph:17.7,
gust_kph:28.4,
}

let personne = {
    nom: "Arnauld",
    prenom: "Sidi",
    year: "2023"
};
console.log(personne);

const personne1= [
    {nom: "Ali", prenom: "Sene", age:26},
    {nom: "Aliou", prenom: "Sall", age:36},
    {nom: "Alpha", prenom: "Tine", age:16},
    {nom: "Assane", prenom: "Sankare", age:56},
    {nom: "Abass", prenom: "Sow", age:76},

]

console.log("TEMP:", resulWeather.humidity);

console.table(personne1);