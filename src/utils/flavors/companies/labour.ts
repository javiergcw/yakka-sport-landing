import { Flavor } from '../settings/model_flavor';
import { LabourTheme } from '../settings/model_flavor';

// Configuración específica para el flavor LABOUR
export const labourTheme: LabourTheme = {
  flavor: Flavor.LABOUR,
  id: 2,
  logo: {
    main: '/logo-labour.svg',
    icon: '/icon-labour.svg',
    favicon: '/favicon-labour.ico',
    alt: 'Yakka Labour - Plataforma Industrial'
  },

  colors: {
    primary: '#2E7D32',      // Verde industrial
    secondary: '#1976D2',    // Azul técnico
    accent: '#FFC107',       // Amarillo de seguridad
    background: '#FAFAFA',   // Gris claro
    surface: '#FFFFFF',      // Blanco
    text: {
      primary: '#212121',    // Negro industrial
      secondary: '#757575',  // Gris medio
      disabled: '#BDBDBD'    // Gris claro
    },
    button: {
      primary: '#2E7D32',
      primaryHover: '#1B5E20',
      secondary: '#1976D2',
      secondaryHover: '#1565C0'
    },
    border: '#E0E0E0',
    shadow: 'rgba(0, 0, 0, 0.12)',
    gradient: {
      primary: 'linear-gradient(135deg, #2E7D32 0%, #1976D2 100%)',
      secondary: 'linear-gradient(135deg, #1976D2 0%, #FFC107 100%)'
    }
  },

  typography: {
    fontFamily: {
      primary: '"Roboto", "Helvetica", "Arial", sans-serif',
      secondary: '"Roboto Condensed", sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    }
  },

  images: {
    hero: '/images/labour/hero-industrial.jpg',
    gallery: [
      '/images/labour/industrial-1.jpg',
      '/images/labour/industrial-2.jpg',
      '/images/labour/industrial-3.jpg',
      '/images/labour/industrial-4.jpg',
      '/images/labour/industrial-5.jpg',
      '/images/labour/industrial-6.jpg',
      '/images/labour/industrial-7.jpg',
      '/images/labour/industrial-8.jpg',
      '/images/labour/industrial-9.jpg',
      '/images/labour/industrial-10.jpg'
    ],
    background: '/images/labour/background-pattern.svg',
    icons: {
      welding: '/icons/welding.svg',
      machinery: '/icons/machinery.svg',
      safety: '/icons/safety.svg',
      quality: '/icons/quality.svg'
    }
  },

  content: {
    hero: {
      title: 'Potencia tu Industria con Tecnología Avanzada',
      subtitle: 'Plataforma Industrial y Manufacturera',
      description: 'Conectamos empresas industriales con profesionales especializados en manufactura, soldadura, maquinaria y control de calidad.',
      ctaText: 'Comenzar Proyecto'
    },
    about: {
      title: 'Soluciones Industriales Integrales',
      description: 'Ofrecemos las herramientas y la red de contactos necesarias para que las empresas industriales puedan optimizar sus procesos y crecer de manera sostenible.',
      features: [
        'Conexión con profesionales certificados',
        'Herramientas de gestión de proyectos',
        'Sistema de control de calidad',
        'Pagos seguros y trazables',
        'Soporte técnico especializado'
      ]
    },
    services: {
      title: 'Nuestros Servicios Industriales',
      items: [
        {
          title: 'Soldadura Especializada',
          description: 'Servicios de soldadura TIG, MIG y arco eléctrico para proyectos industriales.',
          icon: '/icons/welding.svg'
        },
        {
          title: 'Maquinaria Industrial',
          description: 'Mantenimiento y reparación de equipos industriales y maquinaria pesada.',
          icon: '/icons/machinery.svg'
        },
        {
          title: 'Control de Calidad',
          description: 'Inspección y certificación de procesos y productos industriales.',
          icon: '/icons/quality.svg'
        },
        {
          title: 'Seguridad Industrial',
          description: 'Consultoría en seguridad laboral y prevención de riesgos.',
          icon: '/icons/safety.svg'
        }
      ]
    },
    testimonials: [
      {
        name: 'Juan Pérez',
        role: 'Gerente de Producción',
        content: 'Esta plataforma nos ha permitido encontrar profesionales altamente calificados para nuestros proyectos industriales.',
        avatar: '/images/testimonials/juan.jpg'
      },
      {
        name: 'María Rodríguez',
        role: 'Ingeniera de Calidad',
        content: 'Las herramientas de gestión son excelentes. Podemos controlar todo el proceso desde un solo lugar.',
        avatar: '/images/testimonials/maria.jpg'
      }
    ],
    contact: {
      title: '¿Listo para Optimizar tu Industria?',
      description: 'Únete a nuestra red de empresas industriales y profesionales especializados.',
      email: 'hola@yakk labour.com',
      phone: '+1 (555) 234-5678',
      address: '456 Industrial Boulevard, Manufacturing Zone, Chicago, USA'
    }
  },

  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s'
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  }
};
