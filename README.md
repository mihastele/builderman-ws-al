# Zidarstvo Lavrič - Portfolio Website

Profesionalna spletna stran za družinsko gradbeno podjetje Zidarstvo Lavrič.

## 🏗️ O Projektu

Moderna, SEO optimizirana portfolio spletna stran za zidarstvo in gradbena dela. Spletna stran vključuje:

- **Hero sekcija** z animiranimi elementi in privlačnim besedilom
- **O nas** sekcija s predstavitvijo družinskega podjetja
- **Storitve** s podrobnim opisom vseh gradbenih storitev
- **Galerija** z interaktivnim prikazom projektov in lightbox funkcionalnostjo
- **Kontakt** sekcija z obrazcem in kontaktnimi podatki

## 🚀 Tehnologije

- **Next.js 14** - React framework za produkcijo
- **TypeScript** - Tipiziran JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animacije in tranzicije
- **Lucide React** - Ikone

## 📦 Namestitev

```bash
# Namestitev odvisnosti
npm install

# Zagon razvojnega strežnika
npm run dev

# Gradnja za produkcijo
npm run build

# Zagon produkcijskega strežnika
npm start
```

## 🌐 Razvoj

Po zagonu `npm run dev` bo spletna stran dostopna na:
- http://localhost:3000

## 📁 Struktura Projekta

```
zidarstvo-lavric/
├── src/
│   ├── app/
│   │   ├── globals.css    # Globalni stili
│   │   ├── layout.tsx     # Glavna postavitev
│   │   └── page.tsx       # Domača stran
│   └── components/
│       ├── Navigation.tsx # Navigacija
│       ├── Hero.tsx       # Hero sekcija
│       ├── About.tsx      # O nas
│       ├── Services.tsx   # Storitve
│       ├── Gallery.tsx    # Galerija
│       ├── Contact.tsx    # Kontakt
│       └── Footer.tsx     # Noga
├── tailwind.config.ts     # Tailwind konfiguracija
├── next.config.mjs        # Next.js konfiguracija
└── package.json           # Odvisnosti
```

## 🎨 Prilagoditve

### Barve
Glavne barve lahko prilagodite v `tailwind.config.ts`:
- `primary` - Glavna oranžna barva
- `brick` - Sekundarna opečna barva
- `stone` - Nevtralni toni

### Vsebina
- Kontaktni podatki: `src/components/Footer.tsx` in `src/components/Contact.tsx`
- SEO meta podatki: `src/app/layout.tsx`
- Slike: Zamenjajte Unsplash URL-je z lastnimi slikami

## 📱 Odzivnost

Spletna stran je popolnoma odzivna in optimizirana za:
- Mobilne naprave
- Tablice
- Namizne računalnike

## 🔍 SEO

Vključeni SEO elementi:
- Meta opisi in ključne besede
- Open Graph oznake
- Twitter Card oznake
- Semantična HTML struktura
- Optimizirane slike

---

Izdelano z ❤️ za Zidarstvo Lavrič
