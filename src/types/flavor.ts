
export enum Flavor {
  SPORT = 'sport',
  LABOUR = 'labour',
  HOSPITALITY = 'hospitality'
}

export interface FlavorColors {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonHoverColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface FlavorTexts {
  bannerTitle: string;
  bannerSubtitle: string;
  bannerDescription: string;
  bannerBackgroundImage: string;
  bannerButtonText: string;
  aboutCompanyLabel: string;
  aboutCompanyTitle: string;
  aboutCompanyDescription: string;
  ourCultureLabel: string;
  ourCultureTitle: string;
  ourCultureDescription: string;
  ourCultureImage: string;
  ourCultureButtonText: string;
  faqLabel: string;
  faqTitle: string;
  faqDescription: string;
  faqItems: FAQItem[];
  contactTitle: string;
  contactSubtitle: string;
  contactEmailLabel: string;
  contactEmail: string;
  contactPhoneLabel: string;
  contactPhone: string;
  contactSocialLabel: string;
  socialLinks: SocialLink[];
  contactAddressLabel: string;
  contactAddress: string;
  mapCoordinates: [number, number];
  mapPopupText: string;
  contactFormTitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormSubject: string;
  contactFormMessage: string;
  contactFormSubmit: string;
}

export const flavorConfigs: Record<Flavor, FlavorColors> = {
  [Flavor.SPORT]: {
    primaryColor: '#FF6B35',
    secondaryColor: '#004E89',
    accentColor: '#FFD23F',
    backgroundColor: '#F8F9FA',
    textColor: '#2C3E50',
    buttonColor: '#FF6B35',
    buttonHoverColor: '#E55A2B'
  },
  [Flavor.LABOUR]: {
    primaryColor: '#2E7D32',
    secondaryColor: '#1976D2',
    accentColor: '#FFC107',
    backgroundColor: '#FAFAFA',
    textColor: '#212121',
    buttonColor: '#2E7D32',
    buttonHoverColor: '#1B5E20'
  },
  [Flavor.HOSPITALITY]: {
    primaryColor: '#7B1FA2',
    secondaryColor: '#D32F2F',
    accentColor: '#FF9800',
    backgroundColor: '#FFF8E1',
    textColor: '#3E2723',
    buttonColor: '#7B1FA2',
    buttonHoverColor: '#6A1B9A'
  }
};

export const flavorTexts: Record<Flavor, FlavorTexts> = {
  [Flavor.SPORT]: {
    bannerTitle: "We help people build businesses",
    bannerSubtitle: "The sport and fitness industry.",
    bannerDescription: "Transform your passion for sports into a successful business with our innovative solutions.",
    bannerBackgroundImage: "/home/machine-2691439_1280.jpg",
    bannerButtonText: "Learn more about us",
    aboutCompanyLabel: "ABOUT COMPANY",
    aboutCompanyTitle: "Now let's grow yours",
    aboutCompanyDescription: "We empower people worldwide to live their work dream building their business from the ground up and becoming financially and professionally independent.",
    ourCultureLabel: "OUR CULTURE",
    ourCultureTitle: "Us and the rest",
    ourCultureDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    ourCultureImage: "/home/machine-2691439_1280.jpg",
    ourCultureButtonText: "Explore More",
    faqLabel: "FAQ'S",
    faqTitle: "We're here to help",
    faqDescription: "Find answers to common questions about our platform and services.",
    faqItems: [
      {
        question: "How can I find qualified sports and fitness contractors?",
        answer: "Our platform connects you with verified sports and fitness professionals. You can browse profiles, check credentials, and read reviews from previous clients to find the perfect match for your project."
      },
      {
        question: "What types of sports and fitness services are available?",
        answer: "We offer a wide range of services including personal training, sports coaching, fitness facility management, sports event planning, nutrition consulting, and sports equipment maintenance."
      },
      {
        question: "How do I verify a contractor's credentials?",
        answer: "All contractors on our platform are verified through our screening process. You can view their certifications, licenses, insurance coverage, and client testimonials directly on their profile."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept all major credit cards, bank transfers, and digital payment methods. Payments are securely processed and held in escrow until project completion to protect both parties."
      },
      {
        question: "How can I become a contractor on your platform?",
        answer: "Simply create an account, complete your profile with credentials and portfolio, pass our verification process, and start connecting with clients. We provide tools and support to help you grow your business."
      }
    ],
    contactTitle: "Contact Us",
    contactSubtitle: "Have a question or need more information? Just drop us a line!",
    contactEmailLabel: "Email address",
    contactEmail: "hello@sportplatform.com",
    contactPhoneLabel: "Phone number",
    contactPhone: "(555) 123-4567",
    contactSocialLabel: "Social Network",
    socialLinks: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "LinkedIn", url: "https://linkedin.com" }
    ],
    contactAddressLabel: "Address",
    contactAddress: "123 Sports Avenue, Fitness District, New York, USA",
    mapCoordinates: [40.7128, -74.0060] as [number, number],
    mapPopupText: "Our Sports & Fitness Platform Office",
    contactFormTitle: "Send us a message",
    contactFormName: "Your name",
    contactFormEmail: "Your email",
    contactFormSubject: "Subject",
    contactFormMessage: "Your message (optional)",
    contactFormSubmit: "Submit"
  },
  [Flavor.LABOUR]: {
    bannerTitle: "We help people build businesses",
    bannerSubtitle: "The manufacturing and labor industry.",
    bannerDescription: "We power your industrial company with cutting-edge technology and efficient solutions.",
    bannerBackgroundImage: "/home/welding-6252829_1280.jpg",
    bannerButtonText: "Learn more about us",
    aboutCompanyLabel: "ABOUT COMPANY",
    aboutCompanyTitle: "Now let's grow yours",
    aboutCompanyDescription: "We empower people worldwide to live their work dream building their business from the ground up and becoming financially and professionally independent.",
    ourCultureLabel: "OUR CULTURE",
    ourCultureTitle: "Us and the rest",
    ourCultureDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    ourCultureImage: "/home/welding-6252829_1280.jpg",
    ourCultureButtonText: "Explore More",
    faqLabel: "FAQ'S",
    faqTitle: "We're here to help",
    faqDescription: "Find answers to common questions about our platform and services.",
    faqItems: [
      {
        question: "How can I find skilled industrial contractors and workers?",
        answer: "Our platform connects you with verified industrial professionals including welders, machinists, electricians, and manufacturing specialists. Browse profiles, check certifications, and read client reviews."
      },
      {
        question: "What types of industrial services are available?",
        answer: "We offer welding, machining, electrical work, equipment maintenance, quality control, safety consulting, and specialized manufacturing services for various industries."
      },
      {
        question: "How do I verify a contractor's safety certifications?",
        answer: "All contractors must provide valid safety certifications, insurance coverage, and compliance documentation. You can view these credentials directly on their profile along with safety ratings."
      },
      {
        question: "What payment terms are available for large projects?",
        answer: "We offer flexible payment terms including milestone-based payments, progress billing, and project completion payments. All transactions are secured through our escrow system."
      },
      {
        question: "How can I join as an industrial contractor?",
        answer: "Create your profile, upload certifications and portfolio, complete our verification process, and start bidding on projects. We provide project management tools and client communication features."
      }
    ],
    contactTitle: "Contact Us",
    contactSubtitle: "Have a question or need more information? Just drop us a line!",
    contactEmailLabel: "Email address",
    contactEmail: "hello@labourplatform.com",
    contactPhoneLabel: "Phone number",
    contactPhone: "(555) 234-5678",
    contactSocialLabel: "Social Network",
    socialLinks: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "LinkedIn", url: "https://linkedin.com" }
    ],
    contactAddressLabel: "Address",
    contactAddress: "456 Industrial Boulevard, Manufacturing Zone, Chicago, USA",
    mapCoordinates: [41.8781, -87.6298] as [number, number],
    mapPopupText: "Our Industrial & Manufacturing Platform Office",
    contactFormTitle: "Send us a message",
    contactFormName: "Your name",
    contactFormEmail: "Your email",
    contactFormSubject: "Subject",
    contactFormMessage: "Your message (optional)",
    contactFormSubmit: "Submit"
  },
  [Flavor.HOSPITALITY]: {
    bannerTitle: "We help people build businesses",
    bannerSubtitle: "The hospitality and gastronomy industry.",
    bannerDescription: "We elevate your hospitality business with exceptional experiences for your customers.",
    bannerBackgroundImage: "/home/macon-4005192_1280.jpg",
    bannerButtonText: "Learn more about us",
    aboutCompanyLabel: "ABOUT COMPANY",
    aboutCompanyTitle: "Now let's grow yours",
    aboutCompanyDescription: "We empower people worldwide to live their work dream building their business from the ground up and becoming financially and professionally independent.",
    ourCultureLabel: "OUR CULTURE",
    ourCultureTitle: "Us and the rest",
    ourCultureDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    ourCultureImage: "/home/macon-4005192_1280.jpg",
    ourCultureButtonText: "Explore More",
    faqLabel: "FAQ'S",
    faqTitle: "We're here to help",
    faqDescription: "Find answers to common questions about our platform and services.",
    faqItems: [
      {
        question: "How can I find experienced hospitality professionals?",
        answer: "Our platform connects you with verified hospitality professionals including chefs, hotel managers, event planners, and service staff. Review their experience, ratings, and previous work."
      },
      {
        question: "What hospitality services can I find on your platform?",
        answer: "We offer culinary services, hotel management, event planning, catering, restaurant consulting, customer service training, and hospitality facility maintenance."
      },
      {
        question: "How do I verify a contractor's hospitality experience?",
        answer: "All contractors provide detailed work history, references from previous employers, and industry certifications. You can contact references directly through our platform."
      },
      {
        question: "What insurance coverage do contractors have?",
        answer: "All contractors must maintain appropriate liability insurance and provide proof of coverage. This protects both parties in case of accidents or property damage."
      },
      {
        question: "How can I start working as a hospitality contractor?",
        answer: "Create your professional profile, showcase your experience and skills, complete our background verification, and start connecting with hospitality businesses looking for your expertise."
      }
    ],
    contactTitle: "Contact Us",
    contactSubtitle: "Have a question or need more information? Just drop us a line!",
    contactEmailLabel: "Email address",
    contactEmail: "hello@hospitalityplatform.com",
    contactPhoneLabel: "Phone number",
    contactPhone: "(555) 345-6789",
    contactSocialLabel: "Social Network",
    socialLinks: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "LinkedIn", url: "https://linkedin.com" }
    ],
    contactAddressLabel: "Address",
    contactAddress: "789 Hospitality Plaza, Restaurant Row, Los Angeles, USA",
    mapCoordinates: [34.0522, -118.2437] as [number, number],
    mapPopupText: "Our Hospitality & Gastronomy Platform Office",
    contactFormTitle: "Send us a message",
    contactFormName: "Your name",
    contactFormEmail: "Your email",
    contactFormSubject: "Subject",
    contactFormMessage: "Your message (optional)",
    contactFormSubmit: "Submit"
  }
};
  