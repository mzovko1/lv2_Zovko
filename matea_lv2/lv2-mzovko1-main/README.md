# LV 2 zadatak - JavaScript komandne aplikacije

Zadatak je napraviti command line JavaScript aplikaciju koja će simulirati košaricu u web stranici za trgovinu. Sučelje, specifikaciju i rad aplikacije morate dizajnirati sami. Obratite pozornost na lakoću korištenja aplikacije. Npr. možda je lakše korisniku upisati “kupi patike” nego “kupi item-125sa4134d”, ili je možda dobra značajka imati mogućnost pretrage proizvoda. 

Dizajn sučelja, sigurnost (provjera greški i sl.), lakoća korištenja (dizajn sučelja, korisne greške, postoji li “help” komanda i sl.) i potpunost rješenja će se bodovati.

Minimalni zahtjevi su da korisnik može vidjeti popis svih artikala, vidjeti svoju košaricu, dodavati i brisati artikle iz košarice te kupiti sve odabrane proizvode (ako za to ima novaca). Svaku komandu/akciju je potrebno definirati u zasebnoj funkciji.

U **main.js** postoji kod kojeg možete koristiti kao početnu točku za razvoj aplikacije.

Nakon što je aplikacija izrađena, potrebno je napisati dokumentaciju (uređivanjem ovog README dokumenta) koja opisuje sve moguće komande, njihove argumente i što obavljaju ili vraćaju.
Komande:

> prikazi
> > Prikazuje sve dostupne artikle u trgovini zajedno s njihovim cijenama. Vraća listu dostupnih artikala s cijenama.

> pretrazi
> > Pretražuje artikle u trgovini po zadanoj ključnoj riječi (case insensitive). Kljucna_rijec: Riječ za pretraživanje artikala. Povratna vrijednost: Lista artikala koji odgovaraju ključnoj riječi s cijenama ili poruka "Nema pronađenih artikala." ako pretraga ne vrati rezultate.

> kosarica
> > Prikazuje artikle u košarici zajedno s njihovim cijenama, količinama i ukupnom cijenom. Vraća listu artikala u košarici s cijenama, količinama i ukupnom cijenom ili poruka "Vaša košarica je prazna." ako nema artikala u košarici.

> kupi
> > Dodaje određeni artikl u košaricu. Pretražuje listu artikala (case insensitive) po nazivu. Ako artikl nije pronađen, vraća grešku. artikl: Naziv artikla koji želite kupiti. kolicina: (Opcionalno) Količina artikla koju želite kupiti. Ako nije odabrano, računa se količina 1.

> ukloni
> > Uklanja određeni artikal iz košarice.

> blagajna
> > Obavlja plaćanje za artikle u košarici i prazni košaricu. Poruka potvrde uspješne kupnje ili poruka greške ako nema dovoljno novca ili je košarica prazna.

> novcanik
> > Provjerava stanje novčanika.

> kredit
> > Dodaje 50 € na račun. Vraća poruku potvrde s novim stanjem novčanika.

> pomoc
> > Prikazuje listu dostupnih naredbi i njihov opis.

## Generalne upute za korištenje aplikacije

Pokretanje aplikacije: Pokrenite aplikaciju pomoću Node.js. U terminalu upišite node main.js
Unos naredbi: Unosite naredbe u skladu s gore navedenim opisima. Nakon svake naredbe, aplikacija će izvršiti odgovarajuću radnju.
Zatvaranje aplikacije: Za zatvaranje aplikacije, pritisnite Ctrl+C u terminalu.



## Resursi

Ideje o tome kako dizajnirati komandno sučelje

- [https://clig.dev/#guidelines](https://clig.dev/#guidelines)
- [https://www.makeareadme.com](https://www.makeareadme.com/)

JavaScript osnove:

- [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [https://javascript.info/first-steps](https://javascript.info/first-steps)
