'use client';

import React, { useState } from 'react';

export const ContactoModernoSection = () => {
  const [activeTab, setActiveTab] = useState('#message');

  const clearForm = () => {
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const mensaje = document.getElementById('mensaje') as HTMLTextAreaElement;
    if (nombre) nombre.value = '';
    if (email) email.value = '';
    if (mensaje) mensaje.value = '';
  };

  const sendMsg = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const ok = document.createElement('div');
    ok.textContent = '¡Mensaje enviado! Te responderemos pronto.';
    ok.style.marginTop = '10px';
    ok.style.fontSize = '14px';
    ok.style.color = 'var(--ok)';
    const old = form.querySelector('.ok');
    if (old) old.remove();
    ok.className = 'ok';
    form.appendChild(ok);
    setTimeout(() => ok.remove(), 3500);
  };

  const showPanel = (target: string) => {
    setActiveTab(target);
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --bg: #f7f9fc;
          --surface: #ffffff;
          --text: #0f172a;
          --muted: #475569;
          --primary: #2381d2;
          --primary-50: #e9f2fb;
          --primary-100: #d9e9fa;
          --primary-700: #1a5fa8;
          --ring: rgba(35, 129, 210, 0.35);
          --cta: #e53935;
          --cta-700: #c62828;
          --line: #e6edf5;
          --ok: #16a34a;
          --shadow: 0 8px 28px rgba(2, 8, 23, 0.06), 0 2px 8px rgba(2, 8, 23, 0.06);
          --radius: 16px;
        }
      `}</style>

      <section id="contacto" className="min-h-screen w-full relative">
        {/* Radial Gradient Background from Top */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #d6e7f7 100%)",
          }}
        />
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
          color: 'var(--text)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: 1.45
        }}>
        {/* Tabs */}
        <nav style={{ display: 'flex', justifyContent: 'center', margin: '8px auto 18px', maxWidth: 'min(1120px, 95vw)' }} aria-label="Quick actions">
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '8px', borderRadius: '999px', background: '#ffffff', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }}>
            <button
              type="button"
              onClick={() => showPanel('#info')}
              style={{
                position: 'relative',
                appearance: 'none',
                border: '1px solid #d9e4f2',
                background: activeTab === '#info' ? 'linear-gradient(180deg, var(--cta), var(--cta-700))' : 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                color: activeTab === '#info' ? '#ffffff' : '#9ca3af',
                fontWeight: 700,
                padding: '12px 18px',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease, border-color .15s ease',
                boxShadow: activeTab === '#info' ? '0 12px 28px rgba(229,57,53,.35)' : 'none',
                borderColor: activeTab === '#info' ? 'var(--cta)' : '#d9e4f2'
              }}
            >
              <span style={{ width: '18px', height: '18px', display: 'inline-block' }} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 8.5h.01M11 12h2v5h-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Información
            </button>
            <button
              type="button"
              onClick={() => showPanel('#message')}
              style={{
                position: 'relative',
                appearance: 'none',
                border: '1px solid #d9e4f2',
                background: activeTab === '#message' ? 'linear-gradient(180deg, var(--cta), var(--cta-700))' : 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                color: activeTab === '#message' ? '#ffffff' : '#9ca3af',
                fontWeight: 700,
                padding: '12px 18px',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease, border-color .15s ease',
                boxShadow: activeTab === '#message' ? '0 12px 28px rgba(229,57,53,.35)' : 'none',
                borderColor: activeTab === '#message' ? 'var(--cta)' : '#d9e4f2'
              }}
            >
              <span style={{ width: '18px', height: '18px', display: 'inline-block' }} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              Contacto
            </button>
          </div>
        </nav>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(1120px, 95vw) 1fr', padding: '28px 12px 52px' }}>
          <div style={{ gridColumn: '2', display: 'grid', gridTemplateColumns: '1fr', gap: '28px', alignItems: 'start', justifyItems: 'center' }}>
            {/* Panel: Información */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow)',
                overflow: 'hidden',
                display: activeTab === '#info' ? 'block' : 'none',
                width: 'min(720px, 95%)'
              }}
              role="region"
              aria-labelledby="btn-info"
              aria-hidden={activeTab !== '#info'}
            >
              <div style={{
                padding: '18px 22px 8px',
                borderBottom: '1px solid var(--line)',
                background: 'linear-gradient(180deg, #ffffff, var(--primary-50))',
                borderTopLeftRadius: 'var(--radius)',
                borderTopRightRadius: 'var(--radius)'
              }}>
                <h2 style={{ margin: 0, fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 800, letterSpacing: '.2px', color: '#233e90', textAlign: 'center' }}>
                  <strong>Información</strong>
                </h2>
                <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--muted)', textAlign: 'center' }}>
                  Múltiples formas de contactarnos
                </p>
              </div>
              <div style={{ padding: '16px 22px 22px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', margin: '6px 0 0' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gap: '14px',
                    alignItems: 'center',
                    padding: '12px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
                    background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50), transparent 60%)'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                      border: '1px solid #d7e6f7'
                    }} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.89.3 1.76.55 2.6a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.48-1.12a2 2 0 0 1 2.11-.45c.84.25 1.71.43 2.6.55A2 2 0 0 1 22 16.92z" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Teléfono</div>
                      <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px' }}>787 448 2931<br />787 744 8359 · Fax</div>
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gap: '14px',
                    alignItems: 'center',
                    padding: '12px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
                    background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50), transparent 60%)'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                      border: '1px solid #d7e6f7'
                    }} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6l-10 7L2 6" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Email</div>
                      <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px' }}>info@coquibs.com</div>
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gap: '14px',
                    alignItems: 'center',
                    padding: '12px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
                    background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50), transparent 60%)'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                      border: '1px solid #d7e6f7'
                    }} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 22s8-5.5 8-12a8 8 0 1 0-16 0c0 6.5 8 12 8 12z" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" stroke="var(--primary)" strokeWidth="1.6" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Ubicación</div>
                      <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px' }}>Urb. Bosque Verde #112 c/Aguila<br />Caguas, PR 00727-6985</div>
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gap: '14px',
                    alignItems: 'center',
                    padding: '12px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
                    background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50), transparent 60%)'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                      border: '1px solid #d7e6f7'
                    }} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="var(--primary)" strokeWidth="1.6" />
                        <path d="M12 7v5l3 3" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Horarios</div>
                      <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px' }}>Lunes a Viernes<br />8:00 a.m. — 5:00 p.m.</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '14px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                  <a
                    href="tel:+17874482931"
                    aria-label="Llamar"
                    style={{
                      flex: '0 0 auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '0 18px',
                      height: '44px',
                      minWidth: '140px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      border: '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease, border-color .15s ease',
                      textDecoration: 'none',
                      userSelect: 'none',
                      background: 'linear-gradient(180deg, var(--cta), var(--cta-700))',
                      color: '#fff',
                      boxShadow: '0 8px 20px rgba(229,57,53,.35)',
                      borderColor: 'rgba(0,0,0,.06)'
                    }}
                  >
                    Llamar
                  </a>
                  <a
                    href="mailto:info@coquibs.com"
                    style={{
                      flex: '0 0 auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '0 18px',
                      height: '44px',
                      minWidth: '140px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      border: '1px solid var(--primary)',
                      cursor: 'pointer',
                      transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease, border-color .15s ease',
                      textDecoration: 'none',
                      userSelect: 'none',
                      background: 'linear-gradient(180deg, var(--primary), var(--primary-700))',
                      color: '#ffffff'
                    }}
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Panel: Contacto */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow)',
                overflow: 'hidden',
                display: activeTab === '#message' ? 'block' : 'none',
                width: 'min(720px, 95%)'
              }}
              role="region"
              aria-labelledby="btn-contact"
              aria-hidden={activeTab !== '#message'}
            >
              <div style={{
                padding: '18px 22px 8px',
                borderBottom: '1px solid var(--line)',
                background: 'linear-gradient(180deg, #ffffff, var(--primary-50))',
                borderTopLeftRadius: 'var(--radius)',
                borderTopRightRadius: 'var(--radius)'
              }}>
                <h2 style={{ margin: 0, fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 800, letterSpacing: '.2px', color: '#233e90', textAlign: 'center' }}>
                  <strong>Contacto</strong>
                </h2>
                <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--muted)', textAlign: 'center' }}>
                  Envíanos tu consulta directamente
                </p>
              </div>
              <form style={{ padding: '16px 22px 22px' }} onSubmit={sendMsg}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '6px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gridAutoRows: 'min-content',
                    alignItems: 'start',
                    gap: '14px',
                    padding: '12px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50) 0%, rgba(233,242,251,0) 60%)',
                    transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                      border: '1px solid #d7e6f7',
                      alignSelf: 'start',
                      justifySelf: 'start'
                    }} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="7" r="3" stroke="var(--primary)" strokeWidth="1.6" />
                      </svg>
                    </div>
                    <div style={{ margin: 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="nombre" style={{
                        position: 'static',
                        left: 'auto',
                        top: 'auto',
                        transform: 'none',
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        marginBottom: '6px',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        letterSpacing: '.2px'
                      }}>
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre completo"
                        required
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: 'none',
                          borderRadius: 0,
                          boxShadow: 'none',
                          padding: '10px 2px',
                          color: 'var(--muted)',
                          width: '100%',
                          outline: 'none',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gridAutoRows: 'min-content',
                    alignItems: 'start',
                    gap: '14px',
                    padding: '12px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50) 0%, rgba(233,242,251,0) 60%)',
                    transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                      border: '1px solid #d7e6f7',
                      alignSelf: 'start',
                      justifySelf: 'start'
                    }} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6l-10 7L2 6" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ margin: 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="email" style={{
                        position: 'static',
                        left: 'auto',
                        top: 'auto',
                        transform: 'none',
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        marginBottom: '6px',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        letterSpacing: '.2px'
                      }}>
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: 'none',
                          borderRadius: 0,
                          boxShadow: 'none',
                          padding: '10px 2px',
                          color: 'var(--muted)',
                          width: '100%',
                          outline: 'none',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gridAutoRows: 'min-content',
                    alignItems: 'start',
                    gap: '14px',
                    padding: '12px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    background: 'radial-gradient(120% 100% at -10% 10%, var(--primary-50) 0%, rgba(233,242,251,0) 60%)',
                    transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'radial-gradient(120% 100% at 30% 20%, #ffffff, var(--primary-100))',
                      border: '1px solid #d7e6f7',
                      alignSelf: 'start',
                      justifySelf: 'start'
                    }} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M21 15a4 4 0 0 1-4 4H9l-4 3v-3H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8z" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ margin: 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="mensaje" style={{
                        position: 'static',
                        left: 'auto',
                        top: 'auto',
                        transform: 'none',
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        marginBottom: '6px',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        letterSpacing: '.2px'
                      }}>
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        placeholder="¿En qué podemos ayudarte?"
                        required
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: 'none',
                          borderRadius: 0,
                          boxShadow: 'none',
                          padding: '10px 2px',
                          color: 'var(--muted)',
                          width: '100%',
                          outline: 'none',
                          fontSize: '14px',
                          minHeight: '140px',
                          resize: 'vertical'
                        }}
                      />
                      <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                        Al enviar aceptas que te contactemos para dar seguimiento.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: '6px' }}>
                  <button
                    type="button"
                    onClick={clearForm}
                    style={{
                      flex: '0 0 auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '0 18px',
                      height: '44px',
                      minWidth: '140px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      border: '1px solid var(--primary)',
                      cursor: 'pointer',
                      transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease, border-color .15s ease',
                      textDecoration: 'none',
                      userSelect: 'none',
                      background: 'linear-gradient(180deg, var(--primary), var(--primary-700))',
                      color: '#ffffff'
                    }}
                  >
                    Limpiar
                  </button>
                  <button
                    type="submit"
                    style={{
                      flex: '0 0 auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '0 18px',
                      height: '44px',
                      minWidth: '140px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      border: '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease, border-color .15s ease',
                      textDecoration: 'none',
                      userSelect: 'none',
                      background: 'linear-gradient(180deg, var(--cta), var(--cta-700))',
                      color: '#fff',
                      boxShadow: '0 8px 20px rgba(229,57,53,.35)',
                      borderColor: 'rgba(0,0,0,.06)'
                    }}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
