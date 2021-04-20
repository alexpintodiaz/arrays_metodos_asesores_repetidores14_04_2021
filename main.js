
let lista  = [];
let Acuaticos = new Array(parseInt(prompt("Cuantos animales acuaticos hay"))).fill('');
for (let i = 0; i < Acuaticos.length; i++) {
    Acuaticos[i] = prompt(`Nombre del animal acuatico ${i+1}`);
}
lista.push(Acuaticos);
let Terrestres = new Array(parseInt(prompt("Cuantos animales terrestres hay"))).fill('');
for (let i = 0; i < Terrestres.length; i++) {
    Terrestres[i] = prompt(`Nombre del animal terrestres ${i+1}`);
}
lista.push(Terrestres);
let Aereos = new Array(parseInt(prompt("Cuantos animales aereos hay"))).fill('');
for (let i = 0; i < Aereos.length; i++) {
    Aereos[i] = prompt(`Nombre del animal aereos ${i+1}`);
}
lista.push(Aereos);
console.log("La lista contiene los siguientes datos",lista);
let usuario = parseInt(prompt("Usuario cuales de las siguientes listas dese ver:\n1. Acuaticos\n2. Terrestres\n3. Aerios"));
let numPaginar = 2;
if(!(numPaginar<=lista[usuario-1].length)){
    numPaginar=lista[usuario-1].length;
}
let menu = `Total de datos en la lista: ${lista[usuario-1].length}\n1. Ver todos los datos \n`;
let cont = 2, opcionesMenu = [];
opcionesMenu[1] = [0,lista[usuario-1].length];
if(lista[usuario-1].length%numPaginar==0){
    for (let i = 0; i < lista[usuario-1].length; i+=numPaginar) {
        menu += `${cont}. ${i+1} - ${i+numPaginar} hay ${lista[usuario-1].length} \n`;
        opcionesMenu[cont] = [i, i+numPaginar];
        cont++;
    }
}else{
    for (let i = 0; i < lista[usuario-1].length; i+=numPaginar) {
        if(lista[usuario-1].length==i+1){
            menu += `${cont}. ${i+1} hay ${lista[usuario-1].length} \n`;
            opcionesMenu[cont] = [-1, lista[usuario-1].length];
        }else{
            menu += `${cont}. ${i+1} - ${i+numPaginar} hay ${lista[usuario-1].length} \n`;
            opcionesMenu[cont] = [i, i+numPaginar];
        }
        cont++;
    }
}
let paginacion = prompt(menu);
let copiaLista = lista[usuario-1].slice(opcionesMenu[paginacion][0], opcionesMenu[paginacion][1]);
let verOrdenLista = prompt("Desea ver la lista\n1.ASD 'Ver la lista con el ultmimo dato ingresado'\n2.DES 'Ver la lista con el primer dato ingresado'");
switch (verOrdenLista) {
    case "1":
        console.log("Resultado: ",copiaLista);
        break;
    case "2":
        console.log("Resultado: ",copiaLista.reverse());
        break;
}

