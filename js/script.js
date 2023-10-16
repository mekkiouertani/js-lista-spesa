//chiediamo all'utente i prodotti da acquistare tramite prompt
//il prompt dovrà interrompersi con la parola 'stop'
//creiamo un array vuoto
//quindi creiamo un ciclo while che dovrà avere questa condizione(array !== dalla parola stop)
//ogni qualvolta l'utente inserirà un elemento, dovremmo usare .push per metterlo dentro l'array
//creiamo un ciclo for per stampare i singoli elementi

//array vuoto
let list = [];
//inizializziamo la variabile del prompt
let item = '';

//ciclo while inizierà per cerca una parola diversa da stop
while(item != 'stop'){ 
    item = prompt('aggiungi alla lista');
    console.log(item);
    //usiamo il trim per evitare spazi vuoti
    item = item.trim();
    //condizione se 
    if (item == 'stop'){
        list.push(item);
    }
};