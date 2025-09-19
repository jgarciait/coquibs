'use client';

import React, { useState } from 'react';

const ContactoSection = () => {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensaje enviado en modo demo.')
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-12" style={{ background: '#f5f8fb' }}>
      <section 
        className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
        aria-labelledby="contact-title"
      >
        {/* Header */}
        <div 
          className="px-6 py-6 border-b border-gray-100"
          style={{ background: 'linear-gradient(180deg, #ffffff, #f9fcff)' }}
        >
          <h1 
            id="contact-title"
            className="text-3xl md:text-4xl font-bold text-[#071a32] tracking-tight m-0"
          >
            Contacto
          </h1>
          <p className="text-gray-500 mt-2 mb-0">Atención confiable y rápida</p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="px-6 py-6">
            <div className="flex flex-col gap-3 mt-3" role="list">
              {/* Phone */}
              <div 
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-3 bg-white"
                role="listitem"
              >
                <div 
                  className="w-9 h-9 rounded-lg bg-blue-50 text-[#1d6083] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.6 1 1 0 011 1v3.6a1 1 0 01-1 1C10.8 22 2 13.2 2 2a1 1 0 011-1h3.6a1 1 0 011 1 11.5 11.5 0 00.6 3.6 1 1 0 01-.25 1l-2.35 2.2z"/>
                  </svg>
                </div>
                <div>
                  <div>
                    <a 
                      href="tel:+17874482931" 
                      className="text-[#0b1220] hover:text-[#1d6083] no-underline"
                    >
                      787 448 2931
                    </a>
                  </div>
                  <div className="text-sm text-gray-500">
                    <a 
                      href="tel:+17877448359"
                      className="text-gray-500 hover:text-[#1d6083] no-underline"
                    >
                      787 744 8359
                    </a> · Fax
                  </div>
                </div>
              </div>

              {/* Email */}
              <div 
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-3 bg-white"
                role="listitem"
              >
                <div 
                  className="w-9 h-9 rounded-lg bg-blue-50 text-[#1d6083] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.35l-10 6.25L2 6.35V6zm0 3.24l9.37 5.86a1 1 0 001.06 0L22 9.24V18a2 2 0 01-2 2H4a2 2 0 01-2-2V9.24z"/>
                  </svg>
                </div>
                <div>
                  <a 
                    href="mailto:info@coquibs.com"
                    className="text-[#0b1220] hover:text-[#1d6083] no-underline"
                  >
                    info@coquibs.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div 
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-3 bg-white"
                role="listitem"
              >
                <div 
                  className="w-9 h-9 rounded-lg bg-blue-50 text-[#1d6083] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <div>Urb. Bosque Verde #112 c/Aguila, Caguas, PR 00727-6985</div>
              </div>

              {/* Hours */}
              <div 
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-3 bg-white"
                role="listitem"
              >
                <div 
                  className="w-9 h-9 rounded-lg bg-blue-50 text-[#1d6083] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm1 11H7V10h4V5h2z"/>
                  </svg>
                </div>
                <div>Horas Lunes a Viernes 8 00 a.m. a 5 00 p.m.</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 flex-wrap mt-4">
              <a 
                href="tel:+17874482931"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-[#062033] no-underline cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2"
                style={{ 
                  background: 'linear-gradient(180deg, #64dfff, #2ab3ea)',
                  boxShadow: '0 8px 16px rgba(42, 179, 234, 0.25)'
                }}
              >
                Llamar ahora
              </a>
              <a 
                href="mailto:info@coquibs.com"
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-50 text-[#071a32] rounded-xl font-bold no-underline cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2"
              >
                Escribir por correo
              </a>
            </div>
          </div>

          {/* Right Column - Map & Form */}
          <div className="px-6 py-6 border-l-0 lg:border-l border-gray-100 border-t lg:border-t-0">
            {/* Map */}
            <div 
              className="h-80 border border-gray-100 rounded-2xl overflow-hidden relative"
              style={{
                background: `
                  radial-gradient(800px 300px at 50% -40%, rgba(50, 200, 255, 0.18), transparent 60%),
                  radial-gradient(600px 260px at 80% 80%, rgba(29, 96, 131, 0.14), transparent 55%),
                  #dff4ff
                `
              }}
              role="img"
              aria-label="Mapa estilizado con océano azul claro y pin rojo en Caguas, Puerto Rico"
            >
              {/* Land Mass */}
              <div 
                className="absolute"
                style={{
                  inset: '12% 14% 18% 10%',
                  background: 'linear-gradient(180deg, #a0d3c5, #7bbda9)',
                  filter: 'drop-shadow(0 2px 0 rgba(0, 0, 0, 0.06))',
                  borderRadius: '18% 32% 28% 24% / 26% 20% 34% 28%'
                }}
                aria-hidden="true"
              />
              
              {/* Pin */}
              <div 
                className="absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-600 shadow-lg animate-bounce"
                style={{
                  left: '62%',
                  top: '56%',
                  borderRadius: '50% 50% 50% 0',
                  boxShadow: '0 8px 18px rgba(210, 35, 42, 0.35)',
                  animation: 'bob 2.2s ease-in-out infinite'
                }}
                aria-hidden="true"
              />
            </div>

            {/* Map Controls */}
            <div className="flex gap-3 items-center justify-between mt-3">
              <span className="text-sm text-gray-500">Caguas, Puerto Rico</span>
              <div className="flex gap-2">
                <a 
                  href="https://maps.google.com/?q=Urb.+Bosque+Verde+%23112+c%2FAguila%2C+Caguas%2C+PR+00727-6985"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-[#062033] no-underline cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2"
                  style={{ 
                    background: 'linear-gradient(180deg, #64dfff, #2ab3ea)',
                    boxShadow: '0 8px 16px rgba(42, 179, 234, 0.25)'
                  }}
                >
                  Ver en Google Maps
                </a>
                <button 
                  onClick={toggleForm}
                  className="inline-flex items-center gap-2 px-4 py-3 bg-blue-50 text-[#071a32] rounded-xl font-bold cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2 border-0"
                  aria-expanded={showForm}
                  aria-controls="contact-form"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>

            {/* Contact Form */}
            {showForm && (
              <form 
                id="contact-form"
                onSubmit={handleSubmit}
                className="mt-4 border-t border-dashed border-gray-100 pt-4"
                aria-label="Formulario de contacto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="nombre" className="block text-sm text-gray-500 mb-1">
                      Nombre
                    </label>
                    <input 
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-3 py-3 border border-gray-100 rounded-xl bg-white text-base outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="correo" className="block text-sm text-gray-500 mb-1">
                      Correo
                    </label>
                    <input 
                      id="correo"
                      name="correo"
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-3 py-3 border border-gray-100 rounded-xl bg-white text-base outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label htmlFor="mensaje" className="block text-sm text-gray-500 mb-1">
                    Mensaje
                  </label>
                  <textarea 
                    id="mensaje"
                    name="mensaje"
                    placeholder="¿Cómo podemos ayudar?"
                    className="w-full px-3 py-3 border border-gray-100 rounded-xl bg-white text-base outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2 min-h-28 resize-y"
                  />
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Al enviar, aceptas ser contactado para dar seguimiento a tu solicitud.
                </div>
                <div className="flex gap-3 mt-3">
                  <button 
                    type="submit"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-[#062033] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2 border-0"
                    style={{ 
                      background: 'linear-gradient(180deg, #64dfff, #2ab3ea)',
                      boxShadow: '0 8px 16px rgba(42, 179, 234, 0.25)'
                    }}
                  >
                    Enviar
                  </button>
                  <button 
                    type="reset"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-blue-50 text-[#071a32] rounded-xl font-bold cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#338ea9] focus:ring-offset-2 border-0"
                  >
                    Limpiar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bob {
          0%, 100% { transform: translate(-50%, -50%) rotate(45deg) translateY(0); }
          50% { transform: translate(-50%, -50%) rotate(45deg) translateY(-5px); }
        }
      `}</style>
    </div>
  )
}

export default ContactoSection
