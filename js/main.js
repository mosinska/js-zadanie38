var liczba1 = 2;
var liczba2 = 3;

function dzialania() {
    
    var dodawanie = liczba1 + liczba2;
    var x = dodawanie;
    if (x > 0 === true) {
        console.log("Wynik dodawania wynosi " + dodawanie);
    } else {
        console.log("Wynik jest ujemny");
    }
    
    var odejmowanie = liczba1 - liczba2;
    var x = odejmowanie;
    if (x > 0 === true) {
        console.log("Wynik odejmowanie wynosi " + odejmowanie);
    } else {
        console.log("Wynik jest ujemny");
    }
   
    var mnozenie = liczba1 * liczba2;
    var x = mnozenie;
    if (x > 0 === true) {
        console.log("Wynik mnozenia wynosi " + mnozenie);
    } else {
        console.log("Wynik jest ujemny");
    }
}
dzialania(2, 3);
