'use client';

import React, { useState } from 'react';
import { ALL_COUNTRY_LOCATIONS, TOP_FOOTER_INTERNATIONAL_LOCATIONS } from '../data/locationsData';

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation?: (locationName: string) => void;
}

export const LocationsModal: React.FC<LocationsModalProps> = ({ isOpen, onClose, onSelectLocation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('All');

  if (!isOpen) return null;

  const handleLocationClick = (loc: string) => {
    if (onSelectLocation) {
      onSelectLocation(loc);
    }
    onClose();
  };

  const regions = ['All', 'Europe', 'North America', 'Middle East', 'Latin America & Caribbean', 'Pacific & Africa'];

  const filteredCountries = ALL_COUNTRY_LOCATIONS.filter((item) => {
    if (activeTab !== 'All' && item.region !== activeTab) {
      return false;
    }
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchesCountry = item.country.toLowerCase().includes(query);
    const matchesCapital = item.capital.toLowerCase().includes(query);
    const matchesCurrency = item.currency.toLowerCase().includes(query) || item.currencyCode.toLowerCase().includes(query);
    const matchesMajor = item.majorCities.some(c => c.toLowerCase().includes(query));
    const matchesRegional = item.regionalCities.some(c => c.toLowerCase().includes(query));
    return matchesCountry || matchesCapital || matchesCurrency || matchesMajor || matchesRegional;
  });

  const totalCitiesCount = ALL_COUNTRY_LOCATIONS.reduce((acc, curr) => acc + curr.majorCities.length + curr.regionalCities.length, 0);

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 9999 }}>
      <div
        className="modal-card"
        style={{
          maxWidth: '1200px',
          width: '95%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          overflow: 'hidden',
          padding: 0,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div style={{ padding: '1.75rem 2.25rem', backgroundColor: '#0F172A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
              GLOBAL DIGITAL MARKETING LOCATIONS DIRECTORY
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
              📍 Global Coverage ({ALL_COUNTRY_LOCATIONS.length} Countries · {totalCitiesCount}+ Markets)
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          >
            ✕
          </button>
        </div>

        {/* SEARCH BAR & FILTER TABS */}
        <div style={{ padding: '1.25rem 2.25rem', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <input
              type="text"
              placeholder="🔍 Search country, capital, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1.25rem',
                borderRadius: '999px',
                border: '1.5px solid #CBD5E1',
                fontSize: '0.9rem',
                outline: 'none',
                backgroundColor: '#FFFFFF'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {regions.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  backgroundColor: activeTab === tab ? '#FF4E27' : '#FFFFFF',
                  color: activeTab === tab ? '#FFFFFF' : '#475569',
                  border: activeTab === tab ? 'none' : '1px solid #CBD5E1',
                  padding: '0.45rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div style={{ padding: '2rem 2.25rem', overflowY: 'auto', flex: 1, backgroundColor: '#FAF9F6' }}>
          
          {/* POPULAR MARKETS QUICK SELECTION */}
          {activeTab === 'All' && !searchQuery && (
            <div style={{ marginBottom: '2.5rem', backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '18px', border: '1px solid #BAE6FD' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                ⭐ High-Demand Target Markets
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {TOP_FOOTER_INTERNATIONAL_LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleLocationClick(loc)}
                    style={{
                      backgroundColor: '#F0F9FF',
                      color: '#0284C7',
                      border: '1px solid #7DD3FC',
                      borderRadius: '999px',
                      padding: '0.45rem 1rem',
                      fontSize: '0.825rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    🌐 {loc} →
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* COUNTRIES LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {filteredCountries.map((countryData) => {
              const majorList = countryData.majorCities.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));
              const regionalList = countryData.regionalCities.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));

              return (
                <div
                  key={countryData.country}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    padding: '1.5rem 1.75rem',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <h3
                        onClick={() => handleLocationClick(countryData.country)}
                        style={{ fontFamily: 'Outfit, serif', fontSize: '1.25rem', fontWeight: 900, color: '#0F172A', margin: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#FF4E27'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
                      >
                        <span>📍 {countryData.country}</span>
                        <span style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 700 }}>Open Country Page →</span>
                      </h3>
                      <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>
                        Capital: <strong>{countryData.capital}</strong> · Currency: <strong>{countryData.currency}</strong>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF4E27', backgroundColor: '#FFF0ED', padding: '0.25rem 0.75rem', borderRadius: '999px' }}>
                      {countryData.majorCities.length + countryData.regionalCities.length} Markets
                    </span>
                  </div>

                  {majorList.length > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                        PRIMARY METROS & CITIES
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {majorList.map((city) => (
                          <button
                            key={city}
                            onClick={() => handleLocationClick(city)}
                            style={{
                              backgroundColor: '#F8FAFC',
                              color: '#0F172A',
                              border: '1px solid #CBD5E1',
                              borderRadius: '999px',
                              padding: '0.35rem 0.9rem',
                              fontSize: '0.825rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {city} →
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {regionalList.length > 0 && (
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                        REGIONAL DISTRICTS & TOWNS
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {regionalList.map((city) => (
                          <button
                            key={city}
                            onClick={() => handleLocationClick(city)}
                            style={{
                              backgroundColor: '#FFFFFF',
                              color: '#475569',
                              border: '1px solid #E2E8F0',
                              borderRadius: '999px',
                              padding: '0.3rem 0.75rem',
                              fontSize: '0.785rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* MODAL FOOTER */}
        <div style={{ padding: '1.25rem 2.25rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '0.875rem', color: '#64748B' }}>
            Looking for customized international market expansion?
          </div>
          <a
            href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20international%20digital%20marketing%20services"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              fontSize: '0.875rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            Chat with Strategy Team 💬 →
          </a>
        </div>

      </div>
    </div>
  );
};
