import { Flavor } from '../settings/model_flavor';
import { SportTheme } from '../settings/model_flavor';

// Configuración específica para el flavor SPORT
export const sportTheme: SportTheme = {
  flavor: Flavor.SPORT,
  id: 1,

  logo: {
    main: '/YAKKA.webp',
    icon: '/assets-sport/icon-sport.svg',
    favicon: '/favicon-sport.ico',
    alt: 'Yakka Sport - Plataforma Deportiva'
  },

  colors: {
    primary: '#FF6B35',      // Naranja vibrante
    secondary: '#004E89',    // Azul marino
    accent: '#FFD23F',       // Amarillo dorado
    background: '#FFFFFF',   // Blanco puro
    surface: '#F8F9FA',      // Gris muy claro
    text: {
      primary: '#2C3E50',    // Azul oscuro
      secondary: '#6C757D',  // Gris medio
      disabled: '#ADB5BD'    // Gris claro
    },
    button: {
      primary: '#FF6B35',
      primaryHover: '#E55A2B',
      secondary: '#004E89',
      secondaryHover: '#003A6B'
    },
    border: '#E9ECEF',
    shadow: 'rgba(0, 0, 0, 0.1)',
    gradient: {
      primary: 'linear-gradient(135deg, #FF6B35 0%, #FFD23F 100%)',
      secondary: 'linear-gradient(135deg, #004E89 0%, #FF6B35 100%)'
    }
  },

  typography: {
    fontFamily: {
      primary: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      secondary: '"Poppins", "Inter", sans-serif'
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      xxl: '1.5rem'     // 24px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    }
  },

  images: {
    hero: '/assets-sport/home/hero-sport.jpg',
    gallery: [
      '/assets-sport/home/Rectangle-3573-min.png',
      '/assets-sport/home/Rectangle-3574-min.png',
      '/assets-sport/home/Rectangle-3578-min.png',
      '/assets-sport/home/Rectangle-3582-min.png',
      '/assets-sport/home/Rectangle-3583-1-min.png',
      '/assets-sport/home/Rectangle-3583-min-1.png',
      '/assets-sport/home/Rectangle-3583-min.png',
      '/assets-sport/home/Rectangle-3584-min.png',
      '/assets-sport/home/Rectangle-3697-min.png',
      '/assets-sport/home/Rectangle-3699-min.png'
    ],
    background: '/assets-sport/background-pattern.svg',
    icons: {
      fitness: '/assets-sport/icons/fitness.svg',
      sports: '/assets-sport/icons/sports.svg',
      nutrition: '/assets-sport/icons/nutrition.svg',
      equipment: '/assets-sport/icons/equipment.svg'
    }
  },

  content: {
    hero: {
      title: 'Transforma tu Pasión Deportiva en un Negocio Exitoso',
      subtitle: 'Plataforma Deportiva y Fitness',
      description: 'Conectamos profesionales del deporte y fitness con clientes que buscan servicios de calidad. Desde entrenamiento personal hasta gestión de instalaciones deportivas.',
      ctaText: 'Comenzar Ahora'
    },
    about: {
      title: 'Potencia tu Negocio Deportivo',
      description: 'Ofrecemos las herramientas y la red de contactos necesarias para que los profesionales del deporte y fitness puedan crecer y prosperar en su industria.',
      features: [
        'Conexión directa con clientes',
        'Herramientas de gestión profesional',
        'Sistema de calificaciones y reseñas',
        'Pagos seguros y automatizados',
        'Soporte técnico especializado'
      ]
    },
    services: {
      title: 'Nuestros Servicios',
      items: [
        {
          title: 'Entrenamiento Personal',
          description: 'Conecta con entrenadores certificados para sesiones personalizadas.',
          icon: '/assets-sport/icons/personal-training.svg'
        },
        {
          title: 'Coaching Deportivo',
          description: 'Encuentra coaches especializados en diferentes disciplinas deportivas.',
          icon: '/assets-sport/icons/sports-coaching.svg'
        },
        {
          title: 'Gestión de Instalaciones',
          description: 'Servicios profesionales para gimnasios y centros deportivos.',
          icon: '/assets-sport/icons/facility-management.svg'
        },
        {
          title: 'Nutrición Deportiva',
          description: 'Consulta con nutricionistas especializados en deporte.',
          icon: '/assets-sport/icons/sports-nutrition.svg'
        }
      ]
    },
    testimonials: [
      {
        name: 'María González',
        role: 'Entrenadora Personal',
        content: 'Esta plataforma me ha permitido conectar con clientes de manera profesional y crecer mi negocio significativamente.',
        avatar: '/assets-sport/testimonials/maria.jpg'
      },
      {
        name: 'Carlos Rodríguez',
        role: 'Coach de Fútbol',
        content: 'Las herramientas de gestión son excelentes. Puedo enfocarme en lo que más me gusta: entrenar.',
        avatar: '/assets-sport/testimonials/carlos.jpg'
      }
    ],
    contact: {
      title: '¿Listo para Comenzar?',
      description: 'Únete a nuestra comunidad de profesionales del deporte y fitness.',
      email: 'hola@yakkasport.com',
      phone: '+1 (555) 123-4567',
      address: '123 Sports Avenue, Fitness District, Nueva York, USA'
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
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem'       // 32px
  },

  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem'       // 16px
  }
};
