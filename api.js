export const frases = [
{
autor: "Sócrates",
texto: "Conócete a ti mismo."
},
{
autor: "Platón",
texto: "El alma toma el color de aquello que contempla."
},
{
autor: "Aristóteles",
texto: "Conocerse a uno mismo es el comienzo de toda sabiduría."
},
{
autor: "Marco Aurelio",
texto: "Mira dentro de ti: en tu interior está la fuente del bien."
},
{
autor: "San Agustín",
texto: "No salgas fuera, vuelve a ti mismo; en el interior del hombre habita la verdad."
},
{
autor: "Nietzsche",
texto: "Quien tiene un porqué para vivir puede soportar casi cualquier cómo."
},
{
autor: "Hermann Hesse",
texto: "Cuando alguien busca, es fácil que sus ojos solo vean aquello que busca."
},
{
autor: "Antoine de Saint-Exupéry",
texto: "Lo esencial es invisible a los ojos."
}
];


export function obtenerFraseAleatoria() {
const index = Math.floor(Math.random() * frases.length);
return frases[index];
}
