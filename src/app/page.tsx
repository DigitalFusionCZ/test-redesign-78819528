'use client';

import React, { useState, useEffect } from 'react';

// Type definitions for component props
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
};

type GalleryItemProps = {
  image: string;
  title: string;
  location: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 sm:py-0">{children}</a>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <img src={icon} alt={`${title} icon`} className="w-6 h-6 text-blue-600"/>
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/check.svg" alt="check icon" className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
    <div className="text-center p-4">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
                <img src={icon} alt="Benefit icon" className="w-8 h-8 text-blue-700"/>
            </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const GalleryItem: React.FC<GalleryItemProps> = ({ image, title, location }) => (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"/>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-white font-bold text-lg">{title}</h4>
            <p className="text-blue-200 text-sm">{location}</p>
        </div>
    </div>
);

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const title = 'Vše Pro Stavby s.r.o. | Kvalitní Stavební Práce a Sanace';
    document.title = title;

    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#2563eb"></rect><text y="75" x="50" font-size="70" fill="#ffffff" text-anchor="middle" font-family="sans-serif" font-weight="bold">V</text></svg>`;
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#sluzby', text: 'Služby' },
    { href: '#reference', text: 'Reference' },
    { href: '#o-nas', text: 'O nás' },
    { href: '#kontakt', text: 'Kontakt' },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2">
                <img className="h-12 w-auto" src="/images/logo-1.jpg" alt="Vše Pro Stavby Logo" />
                <span className="font-bold text-xl text-gray-800 tracking-tight">VšeProStavby.cz</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.text}</NavLink>)}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Otevřít menu</span>
                <img src={isMenuOpen ? 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg' : 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg'} alt="Menu icon" className="h-6 w-6"/>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.text}</NavLink>)}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative bg-gray-800 text-white pt-24 pb-32">
            <div className="absolute inset-0">
                <img src="/images/content-2.jpg" alt="Stavební projekt v pozadí" className="w-full h-full object-cover opacity-30"/>
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">Stavíme a rekonstruujeme s tradicí od roku 2006</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">Specializujeme se na novostavby, rekonstrukce a sanace vlhkého zdiva s využitím vlastních tepelně izolačních omítek.</p>
                <a href="#kontakt" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300">Nezávazná poptávka</a>
            </div>
        </section>

        <section id="o-nas" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proč si vybrat právě nás?</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Naše zkušenosti jsou vaší jistotou. Od dodávek materiálu po výrobu vlastních sanačních omítek.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <BenefitCard icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/award.svg" title="Léta zkušeností" description="Působíme ve stavebnictví od roku 2006, s nespočtem úspěšně dokončených projektů." />
                   <BenefitCard icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/flask.svg" title="Vlastní sanační omítky" description="Vyvíjíme a vyrábíme unikátní tepelně izolační a sanační omítky Thermosan." />
                   <BenefitCard icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-community.svg" title="Komplexní služby" description="Od zasíťování pozemků, přes hrubou stavbu, až po finální úpravy interiéru a exteriéru." />
                </div>
            </div>
        </section>

        <section id="sluzby" className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Naše služby</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Poskytujeme komplexní stavební práce pro váš dům, byt i komerční prostory.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ServiceCard 
                    icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/home-cog.svg"
                    title="Rekonstrukce a Novostavby"
                    description="Realizujeme kompletní výstavbu rodinných domů i dílčí rekonstrukce stavebních objektů."
                    items={['Výstavba rodinných domů na klíč', 'Rekonstrukce a údržba objektů', 'Tesařské a pokrývačské práce', 'Sádrokartonové konstrukce']}
                />
                <ServiceCard 
                    icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/shield-check.svg"
                    title="Fasády a Sanace Zdiva"
                    description="Specializujeme se na zateplování a sanace vlhkého zdiva naší omítkou Thermosan."
                    items={['Aplikace tepelně-izolačních omítek', 'Sanace vlhkého zdiva a sklepů', 'Kompletní realizace fasád', 'Odstranění plísní a řas']}
                />
                <ServiceCard 
                    icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/bulldozer.svg"
                    title="Zemní Práce a Sítě"
                    description="Zajistíme kompletní přípravu vašeho pozemku pro stavbu."
                    items={['Budování a rekonstrukce inženýrských sítí', 'Zemní práce a terénní úpravy', 'Výstavba komunikací a zpevněných ploch', 'Demoliční práce']}
                />
                <ServiceCard 
                    icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/plus.svg"
                    title="Doplňkové Práce a Služby"
                    description="Nabízíme široké portfolio doplňkových prací a služeb pro kompletní servis."
                    items={['Montáž dlažeb a obkladů', 'Pokládka podlah', 'Stavba plotů a opěrných zdí', 'Pronájem lešení a prodej materiálu']}
                />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-blue-600 font-semibold uppercase">Naše Inovace</span>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Omítka Thermosan: Revoluce v sanaci</h2>
                        <p className="mt-6 text-lg text-gray-600">Zapomeňte na vlhké zdi a plísně. Naše unikátní vápenná směs Thermosan je až 4x lehčí než běžná omítka, má 17x vyšší tepelně izolační vlastnosti a extrémní paropropustnost (μ=7), díky které zeď dýchá. Aplikace finálního nátěru je možná již po 48 hodinách.</p>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/feather.svg" alt="light icon" className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Mimořádně lehká</h4>
                                    <p className="text-gray-600">Spotřeba jen 7 kg/m², šetří konstrukci i vaši peněženku.</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/droplet-off.svg" alt="dry icon" className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Extrémní prodyšnost</h4>
                                    <p className="text-gray-600">Aktivně odvádí vlhkost ze zdiva a zabraňuje vzniku plísní.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden">
                         <img src="/images/content-5.jpg" alt="Ukázka aplikace sanační omítky" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>

        <section id="reference" className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Naše Realizace</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Prohlédněte si výběr z našich dokončených projektů a přesvědčte se o kvalitě naší práce.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   <GalleryItem image="/images/gallery-6.jpg" title="Omlazení chalupy" location="Tanvald" />
                   <GalleryItem image="/images/gallery-18.jpg" title="Celková rekonstrukce RD" location="Praha" />
                   <GalleryItem image="/images/gallery-11.jpg" title="Fasáda rodinného domu" location="Jevany" />
                   <GalleryItem image="/images/gallery-25.jpg" title="Fasáda kancelářské budovy" location="Brno" />
                   <GalleryItem image="/images/gallery-13.jpg" title="Sanace vlhkých zdí" location="Tanvald" />
                   <GalleryItem image="/images/gallery-31.jpg" title="Zasíťování pozemku" location="nezadáno" />
                </div>
            </div>
        </section>

        <section id="kontakt" className="bg-blue-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:pr-8">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Máte projekt, se kterým potřebujete pomoci?</h2>
                        <p className="mt-4 text-lg text-blue-200">Neváhejte nás kontaktovat. Rádi s vámi probereme vaše plány, poradíme a připravíme nezávaznou cenovou nabídku.</p>
                    </div>
                    <div className="space-y-6 bg-white/10 p-8 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Phone icon" className="w-8 h-8 text-white flex-shrink-0"/>
                            <div>
                                <h3 className="text-lg font-semibold">Telefon</h3>
                                <a href="tel:+420777205708" className="text-xl text-white hover:text-blue-200 transition-colors">+420 777 205 708</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email icon" className="w-8 h-8 text-white flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold">E-mail</h3>
                                <a href="mailto:info@vseprostavby.cz" className="text-xl text-white hover:text-blue-200 transition-colors">info@vseprostavby.cz</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" alt="Address icon" className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold">Adresa a sídlo</h3>
                                <p className="text-xl">VŠE PRO STAVBY.CZ s.r.o.<br/>Otovická 623/4, 193 00 Praha 9<br/>IČ: 04857291</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vše Pro Stavby s.r.o. Všechna práva vyhrazena.</p>
          <p className="mt-2"> <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vytvořeno s láskou od DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}
