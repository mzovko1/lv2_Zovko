"use strict";

const readline = require('readline');
const process = require('process');

let walletAmount = 50;

let items = [
    {
        name: 'Ruž za usne',
        price: 14.99,
    },
    {
        name: 'Maskara',
        price: 19.99,
    },
    {
        name: 'Tekući puder',
        price: 24.99,
    },
    {
        name: 'Korektor',
        price: 9.99,
    },
    {
        name: 'Rumenilo',
        price: 12.99,
    },
    {
        name: 'Sjajilo za usne',
        price: 11.49,
    },
    {
        name: 'Olovka za oči',
        price: 7.99,
    },
    {
        name: 'Set sjenila za oči',
        price: 29.99,
    },
    {
        name: 'Puder u kamenu',
        price: 15.49,
    },
    {
        name: 'Primer za lice',
        price: 22.99,
    },
    {
        name: 'Highlighter',
        price: 18.99,
    },
    {
        name: 'Bronzer',
        price: 17.99,
    },
    {
        name: 'Baza za sjenilo',
        price: 8.49,
    },
    {
        name: 'Setting spray',
        price: 20.99,
    },
    {
        name: 'Lak za nokte',
        price: 6.99,
    }
];

let cart = [];
let cartTotalPrice = 0;

function showItems() {
    console.log("Dostupni artikli:");
    items.forEach(item => {
        console.log(`${item.name}: ${item.price.toFixed(2)} €`);
    });
}

function searchItem(keyword) {
    const foundItems = items.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    if (foundItems.length > 0) {
        console.log("Rezultati pretrage:");
        foundItems.forEach(item => {
            console.log(`${item.name}: ${item.price.toFixed(2)} €`);
        });
    } else {
        console.log("Nema pronadenih artikala.");
    }
}

function showCart() {
    if (cart.length === 0) {
        console.log("Vasa kosarica je prazna.");
    } else {
        console.log("Vasa kosarica:");
        cart.forEach(item => {
            console.log(`${item.name}: ${item.price.toFixed(2)} € x${item.quantity}`);
        });
        console.log(`Ukupna cijena: ${cartTotalPrice.toFixed(2)} €`);
    }
}

function buy(itemName, quantity = 1) {
    const item = items.find(item => item.name.toLowerCase() === itemName.toLowerCase());
    if (!item) {
        console.log("Artikl nije pronaden.");
        return;
    }
    const totalPrice = item.price * quantity;
    if (totalPrice > walletAmount) {
        console.log('Nemate dovoljno novca.');
        return;
    }
    const cartItem = { ...item, quantity };
    cart.push(cartItem);
    cartTotalPrice += totalPrice;
    console.log(`Dodano ${quantity}x ${itemName} u kosaricu.`);
}

function removeFromCart(itemName) {
    const index = cart.findIndex(item => item.name.toLowerCase() === itemName.toLowerCase());
    if (index === -1) {
        console.log("Artikl nije pronaden u kosarici.");
        return;
    }
    const removedItem = cart.splice(index, 1)[0];
    const totalPrice = removedItem.price * removedItem.quantity;
    cartTotalPrice -= totalPrice; 
    console.log(`Uklonjen ${removedItem.name} iz kosarice.`);
}

function checkout() {
    if (cart.length === 0) {
        console.log("Vasa kosarica je prazna.");
        return;
    }
    if (cartTotalPrice > walletAmount) {
        console.log("Nemate dovoljno novca za placanje.");
        return;
    }
    walletAmount -= cartTotalPrice;
    console.log("Uspjesno ste izvrsili kupnju. Hvala na vasoj kupnji!");
    cart = [];
    cartTotalPrice = 0; 
}

function checkWallet() {
    console.log(`Stanje vaseg novcanika: ${walletAmount.toFixed(2)} €`);
}

function kredit() {
    walletAmount += 50;
    console.log("Dodani su vam 50 € na račun.");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Dobrodosli u trgovinu! Utipkajte 'pomoc' za prikaz svih naredbi.");
rl.prompt();

rl.on('line', (line) => {
    const [command, ...args] = line.trim().split(' ');
    switch (command.toLowerCase()) {
        case 'prikazi':
            showItems();
            break;
        case 'pretrazi':
            searchItem(args.join(' '));
            break;
        case 'kosarica':
            showCart();
            break;
        case 'kupi':
            if (args.length === 2) {
                const [itemName, quantity] = args;
                buy(itemName, parseInt(quantity));
            } else {
                buy(args.join(' '));
            }
            break;
        case 'ukloni':
            removeFromCart(args.join(' '));
            break;
        case 'blagajna':
            checkout();
            break;
        case 'novcanik':
            checkWallet();
            break;
        case 'kredit':
            kredit();
            break;
        case 'pomoc':
            console.log("Dostupne naredbe:");
            console.log("- prikazi: Prikazi sve artikle");
            console.log("- pretrazi [kljucna_rijec]: Pretrazi artikle po kljucnoj rijeci");
            console.log("- kosarica: Prikazi artikle u kosarici");
            console.log("- kupi [artikal] [kolicina]: Kupi odredeni brojkomada artikala");
            console.log("- ukloni [artikal]: Ukloni artikl iz kosarice");
            console.log("- blagajna: Obavi placanje i isprazni kosaricu");
            console.log("- novcanik: Provjeri stanje novcanika");
            console.log("- kredit: Dodaj 50 € na racun");
            console.log("- pomoc: Prikazi dostupne naredbe");
            break;
        default:
            console.log("Nepoznata naredba. Tipkajte 'pomoc' za prikaz dostupnih naredbi.");
    }
    rl.prompt();
}).on('close', () => {
    console.log('Izlaz iz trgovine. Dovidenja!');
    process.exit(0);
});

