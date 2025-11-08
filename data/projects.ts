export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  images: string[]
  links: {
    website?: string
    playstore?: string
    appstore?: string
  }
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'bedri-kurye',
    title: 'Bedri Kurye',
    description: 'Fast, Reliable and Professional Courier Solutions - Multi-drop delivery app with Google Maps tracking and PayTR payment integration.',
    fullDescription: 'Bedri Courier: Fast, Reliable and Professional Courier Solutions. "Every Load is Light, Every Road is Short: With Bedri Kurye." Your innovative solution partner developed for timely and safe delivery of your shipments. Features include on-time delivery, wide service network, easy-to-use digital platform, various payment options, and 24/7 professional support.',
    technologies: ['Flutter', 'Laravel', 'Google Maps', 'PayTR', 'REST API'],
    images: [
      '/portfolio-resources/bedri-kurye/1st.png',
      '/portfolio-resources/bedri-kurye/2nd.png',
      '/portfolio-resources/bedri-kurye/3rd.png',
      '/portfolio-resources/bedri-kurye/4th.png'
    ],
    links: {
      website: 'https://teslimat.bedrikurye.com/',
      playstore: 'https://play.google.com/store/apps/details?id=com.bedri.kurye.tr'
    },
    featured: true
  },
  {
    id: 'eafrica-market',
    title: 'EAfrica Market',
    description: 'The premier app to get everything - A trusted marketplace connecting buyers and sellers across various categories.',
    fullDescription: 'Welcome to EAfrica market the premier app to get everything. Whether you\'re looking to sell your products or find great deals on items, EAfrica Market connects you to a trusted and diverse marketplace that meets your everyday needs. Features include wide range of categories, easy ad posting, and location-based listings.',
    technologies: ['Flutter', 'Firebase', 'Location Services', 'REST API'],
    images: [
      '/portfolio-resources/eafrica-market/1st.png',
      '/portfolio-resources/eafrica-market/2nd.png',
      '/portfolio-resources/eafrica-market/3rd.png',
      '/portfolio-resources/eafrica-market/4th.png'
    ],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.eafricamarket.user'
    },
    featured: true
  },
  {
    id: 'mr-ponneri',
    title: 'Mr Ponneri - All in One App',
    description: 'Ponneri\'s beloved online shopping platform delivering fruits, vegetables, groceries, food, and other essentials in under 20 minutes.',
    fullDescription: 'MrPonneri is Ponneri\'s beloved online go to shopping platform. We Deliver Fruits, Vegetables, Groceries, Food, Workers, Matrimonial Services, Proteins, Medicines, Cabs and Other Essentials for the people in and around Ponneri Village. Features include fastest delivery (under 20 minutes), dedicated support team, cheap products in best quality, cash on delivery and digital payment modes, and instant refunds.',
    technologies: ['Flutter', 'Razor Pay', 'Firebase', 'REST API'],
    images: [
      '/portfolio-resources/mrponneri/1st.webp',
      '/portfolio-resources/mrponneri/2nd.png',
      '/portfolio-resources/mrponneri/3rd.png',
      '/portfolio-resources/mrponneri/4th.png',
      '/portfolio-resources/mrponneri/5th.png',
      '/portfolio-resources/mrponneri/6th.png'
    ],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.trb.mrponneriapp&hl=en'
    },
    featured: true
  },
  {
    id: 'tengai-pos',
    title: 'Tengai POS - Offline POS App',
    description: 'Free, All-in-One Point of Sale and Inventory Management Solution for retail stores, cafes, restaurants, and more.',
    fullDescription: 'Tengai POS: Your Free, All-in-One Point of Sale and Inventory Management Solution. Transform your business with Tengai POS, the ultimate free POS software designed for retail stores, cafes, restaurants, bakeries, food trucks, pharmacies, groceries, salons, spas, and more. Features include seamless sales management, shop & staff management, inventory management, centralized reporting, expense & tax management, and receipt customization. Works offline and supports 65+ languages.',
    technologies: ['Flutter', 'SQLite', 'Bluetooth Printers', 'Offline Support'],
    images: [
      '/portfolio-resources/tengai-pos/1st.png',
      '/portfolio-resources/tengai-pos/2nd.png',
      '/portfolio-resources/tengai-pos/3rd.png',
      '/portfolio-resources/tengai-pos/4th.png',
      '/portfolio-resources/tengai-pos/5th.png',
      '/portfolio-resources/tengai-pos/6th.png'
    ],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.tengai.pos'
    },
    featured: true
  }
]
