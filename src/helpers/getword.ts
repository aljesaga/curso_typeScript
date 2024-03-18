
let randoword: string[] = ['COMPUTADORA', 'AGUACATE', 'MAIZ', 'SOLEADO', 'NUBLADO', 'PASEO', 'TRANBAJO'];

export function getword() {
    let i = Math.floor(Math.random() * randoword.length);
     return (randoword[i]);
}