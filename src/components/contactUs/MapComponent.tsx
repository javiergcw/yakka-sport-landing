'use client';

import React, { useEffect, useRef } from 'react';
import { CURRENT_FLAVOR, getCurrentFlavorConfig } from '@/types/favorGlobal';
import { flavorTexts } from '@/types/flavor';

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  
  const colors = getCurrentFlavorConfig();
  const texts = flavorTexts[CURRENT_FLAVOR];

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstance.current) {
      import('leaflet').then((L) => {
        if (!mapRef.current || mapInstance.current) return;
        
        // Pequeño delay para asegurar que el DOM esté listo
        setTimeout(() => {
          if (!mapRef.current || mapInstance.current) return;
          
          // Crear el mapa de forma simple
          mapInstance.current = L.map(mapRef.current).setView(texts.mapCoordinates, 13);

          // Agregar capa de tiles
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(mapInstance.current);

          // Agregar marcador
          L.marker(texts.mapCoordinates).addTo(mapInstance.current)
              .bindPopup(texts.mapPopupText)
              .openPopup();
        }, 100);
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '400px',
        display: 'block',
      }}
    />
  );
}
