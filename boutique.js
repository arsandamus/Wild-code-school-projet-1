const messPri = document.getElementById('total')
const cart = document.getElementById('nbItems');
const allPrices = [39.99, 129.99, 39.99, 69.99, 119.99, 49.99, 99.99, 39.99, 59.99]
let nbItems = 0;
let total = 0;

const myFunction = (valNum) => {
    if (confirm("Ajouter l'article au panier?")) {
        nbItems += 1;
        if (nbItems == 1) {
            const text = nbItems + ' article';
            cart.innerHTML = text;
        } else {
            const text = nbItems + ' articles';
            cart.innerHTML = text;
        }

        // au sujet du total //

        total = total + allPrices[valNum]
        const textPri = 'Total = ' + total.toFixed(2) + '$'
        messPri.innerHTML = textPri
    }
}