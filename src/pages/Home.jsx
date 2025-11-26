import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [autoHours, setAutoHours] = useState(true);
  const navigate = useNavigate();

  // Auto open/close logic (8 AM — 10 PM)
  useEffect(() => {
    if (!autoHours) return;
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsOpen(hour >= 8 && hour < 22);
    };
    checkTime();
    const timer = setInterval(checkTime, 60000);
    return () => clearInterval(timer);
  }, [autoHours]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white antialiased text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black text-white text-xl font-semibold">
                M
              </div>
              <div>
                <div className="text-lg font-semibold">Maison Mall</div>
                <div className="text-xs text-gray-500">
                  Global Luxury. Local Heart.
                </div>
              </div>
            </div>
            <nav className="hidden lg:flex gap-6 items-center text-sm">
              <a className="hover:text-black/90">Fashion</a>
              <a className="hover:text-black/90">Fragrance</a>
              <a className="hover:text-black/90">Tech</a>
              <a className="hover:text-black/90">Home &amp; Living</a>
              <a className="hover:text-black/90">Pacific Luxe</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  className="w-72 pl-4 pr-10 py-2 rounded-lg border border-gray-200 text-sm"
                  placeholder="Search the mall — brands, items, boutiques"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 text-sm font-medium">
                  Search
                </button>
              </div>
            </div>
            <button
              className="text-sm px-4 py-2 rounded-lg border border-gray-200"
              onClick={() => navigate("/admin/login")}
            >
              Sign in
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg text-sm"
              onClick={() => navigate("/admin/login")}
            >
              Enter the Atrium
            </button>
          </div>
        </div>
      </header>

      {/* Store Controls */}
      <div className="max-w-7xl mx-auto px-6 mt-6 p-4 bg-white border rounded-2xl shadow flex flex-col gap-3">
        <h3 className="font-semibold text-lg">Storefront Controls (Demo)</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-lg bg-black text-white w-48"
        >
          Toggle OPEN / CLOSED
        </button>
        <button
          onClick={() => setAutoHours(!autoHours)}
          className="px-4 py-2 rounded-lg border w-48"
        >
          {autoHours ? "Disable Auto Hours" : "Enable Auto Hours"}
        </button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1549187774-b4e9b0445b35?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="max-w-7xl mx-auto px-6 py-28 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
                Maison Mall — The Online Luxury Atrium
              </h1>
              <p className="mt-6 text-lg text-gray-200">
                A curated collection of premium boutiques from New Zealand and
                the world. Shop exclusive drops, limited pop-ups, and discovery
                boxes — every storefront a carefully styled space.
              </p>

              <div className="mt-8 flex gap-4">
                <button
                  className="px-6 py-3 rounded-lg bg-amber-400 text-black font-semibold shadow-lg"
                  onClick={() => navigate("/admin/login")}
                >
                  Enter the Atrium
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/30">
                  Explore Districts
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-300">
                VIP Preview:{" "}
                <span className="font-medium">
                  Join our VIP list for early access to pop-ups &amp; curated
                  drops.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Explore the Districts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fashion */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-gray-50 to-white shadow-md border border-gray-100">
            <div className="text-sm uppercase text-gray-500">
              The Fashion District
            </div>
            <h3 className="mt-2 font-semibold text-lg">
              Boutiques &amp; Designer Labels
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Curated collections from runway to street — discover curated looks
              and seasonal edits.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="text-sm px-4 py-2 rounded-md border">
                Browse
              </button>
              <button className="text-sm px-4 py-2 rounded-md bg-amber-400">
                Featured
              </button>
            </div>
          </div>

          {/* Fragrance */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-gray-50 to-white shadow-md border border-gray-100">
            <div className="text-sm uppercase text-gray-500">
              Fragrance Gallery
            </div>
            <h3 className="mt-2 font-semibold text-lg">
              Niche &amp; Heritage Scents
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Smaller parfumeries and global houses — sample sets and exclusive
              blends.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="text-sm px-4 py-2 rounded-md border">
                Browse
              </button>
              <button className="text-sm px-4 py-2 rounded-md bg-amber-400">
                Explore Tops
              </button>
            </div>
          </div>

          {/* Pacific Luxe */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-gray-50 to-white shadow-md border border-gray-100">
            <div className="text-sm uppercase text-gray-500">
              Pacific Luxe Quarter
            </div>
            <h3 className="mt-2 font-semibold text-lg">
              Boutiques from NZ &amp; Pacific
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Local designers, heritage crafts, and island-inspired luxury
              goods.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="text-sm px-4 py-2 rounded-md border">
                Browse
              </button>
              <button className="text-sm px-4 py-2 rounded-md bg-amber-400">
                Discover
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Stores */}
      <section className="bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Flagship Boutiques // Door sign feature added
            </h2>
            <a className="text-sm text-gray-500">View All</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm relative"
              >
                {/* Door Sign */}
                <div
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border shadow transition-all duration-300 ${
                    isOpen
                      ? "bg-green-100 text-green-700 border-green-600"
                      : "bg-red-100 text-red-700 border-red-600"
                  }`}
                >
                  {isOpen ? "OPEN" : "CLOSED"}
                </div>
                <div
                  className="h-44 bg-gray-100 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=60')"
                  }}
                />
                <div className="p-4">
                  <div className="text-sm text-gray-500">Boutique</div>
                  <div className="mt-1 font-semibold">Maison Atelier</div>
                  <div className="mt-2 text-sm text-gray-600">
                    A finely edited selection of handcrafted goods.
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="text-sm px-3 py-2 rounded-md border">
                      Visit Store
                    </button>
                    <div className="text-sm text-gray-500">New · Limited</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP & Concierge */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-black to-gray-800 text-white shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">Join the Maison VIP Club</h3>
            <p className="mt-3 text-sm text-gray-200">
              Enjoy complimentary concierge, early access to drops, free express
              shipping across NZ, and exclusive experiences.
            </p>
            <ul className="mt-4 text-sm text-gray-200 space-y-2">
              <li>• Early access to pop-ups</li>
              <li>• Complimentary shipping for VIP tiers</li>
              <li>• Private shopping events</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <button className="px-6 py-3 rounded-lg bg-amber-400 text-black font-semibold">
              Join VIP
            </button>
          </div>
        </div>
      </section>

      {/* Vendor Onboarding */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 border border-gray-100 shadow-sm bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">
                Want a boutique in the Atrium?
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We welcome curated brands and carefully selected global
                merchants. Apply to open a storefront and get guidance for
                premium positioning.
              </p>
            </div>
            <div>
              <button className="px-5 py-3 rounded-md border">
                Apply to be a Vendor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-semibold">Maison Mall</div>
            <div className="mt-2 text-sm text-gray-600">
              A boutique online mall showcasing premium brands from New Zealand
              and around the world.
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <a>About Us</a>
            <a>Press</a>
            <a>Careers</a>
            <a>Terms &amp; Privacy</a>
          </div>
          <div className="text-sm text-gray-600">
            <div>Contact</div>
            <div className="mt-2">concierge@maisonmall.example</div>
            <div className="mt-2 text-xs text-gray-400">© Maison Mall</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
