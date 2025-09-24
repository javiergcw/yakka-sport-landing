'use client';

import React, { useEffect, useRef } from 'react';
import { getColorsByFlavor, getContentByFlavor } from '@/utils/flavors/settings';
import { Flavor } from '@/utils/flavors/settings/model_flavor';

interface MapComponentProps {
  selectedFlavor: Flavor;
}

export default function MapComponent({ selectedFlavor }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  
  const colors = getColorsByFlavor(selectedFlavor);
  const content = getContentByFlavor(selectedFlavor);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstance.current) {
      import('leaflet').then((L) => {
        if (!mapRef.current || mapInstance.current) return;
        
        // Pequeño delay para asegurar que el DOM esté listo
        setTimeout(() => {
          if (!mapRef.current || mapInstance.current) return;
          
          // Crear el mapa de forma simple
          mapInstance.current = L.map(mapRef.current).setView([-33.8688, 151.2093], 13);

          // Agregar capa de tiles
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(mapInstance.current);

          // Agregar marcador
          L.marker([-33.8688, 151.2093]).addTo(mapInstance.current)
              .bindPopup('Yakka Sport - Sydney Office')
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
