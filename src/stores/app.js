// Utilities
import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    projects: [
      {
        prependAvatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1753788946/portfolio/healthTok/react-logo_3x_woflzn.png',
        banner: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1753787593/portfolio/healthTok/Slice_4_e4jzlx.png',
        title: 'HealthTok',
        subtitle: 'Telemedicine Reimagined',
        overview: [
          `HealthTok is a telemedicine platform that connects patients with licensed medical professionals for remote consultations. Users can sign up as either Doctors or Patients, with doctors submitting their credentials for review before being approved to offer services.`,
          `Once verified, doctors can be discovered by patients who can then book consultations, communicate via video, voice, or chat, and receive expert care without leaving home. The platform also supports voice notes and secure in-app communication to ensure accessibility and convenience for every user.`,
          `Built with scalability and user privacy in mind, HealthTok simplifies how people access healthcare by putting trusted medical help just a tap away.`
        ],
        about: [
          `HealthTok is a telemedicine app designed to make healthcare more accessible and convenient. It allows users to register either as doctors or patients. Doctors upload their credentials for review before being approved to offer paid consultations. Once approved, patients can connect with them through the app.`,
          `The platform supports video calls, voice calls, text chat, and voice notes, giving patients multiple ways to communicate with trusted medical professionals. HealthTok aims to provide safe, easy-to-use, and affordable remote healthcare for everyone.`,
          `As the Head of Development, I led the entire build process—from planning and architecture to design and deployment—ensuring the app was functional, user-friendly, and scalable from day one.`
        ],
        tech: [
          {title: 'Expo', text: 'for building the mobile app'},
          {title: 'Firebase', text: 'for user authentication, database, and cloud functions'},
          {title: 'Node.js', text: 'for backend operations and admin logic'},
          {title: 'Stream SDK', text: 'for real-time video and voice calling'},
          {title: 'Stream SDK', text: 'for real-time video and voice calling'},
        ],
        images: [
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753787594/portfolio/healthTok/1_b5nuvv.png',
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753787594/portfolio/healthTok/3_cbbbvq.png',
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753787593/portfolio/healthTok/4_y6xvuy.png',
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753787593/portfolio/healthTok/5_tnusj7.png',
        ],
        to: `/HealthTok`,
      },

      {
        prependAvatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1753790706/portfolio/getArtizan/react-logo_3x_baxawk.png',
        banner: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1753790588/portfolio/getArtizan/Slice_emjxw7.jpg',
        title: 'getArtizan',
        subtitle: 'Find & Hire Skilled Artisans Nearby',
        overview: [
          `getArtizan is a location-based platform that connects skilled artisans and service providers with people who need their expertise. Whether you're looking for a plumber, electrician, carpenter, or any other craftsperson, getArtizan makes it easy to find, hire, and communicate with local talent directly from your phone.`,
          `Users can sign up as either Artisans (or businesses) or as Customers seeking services. Once connected, they can chat within the app, and when the job is complete, artisans can generate and send receipts to clients right through the platform.`,
        ],
        about: [
          `getArtizan was built to support small businesses and independent artisans by giving them visibility and direct access to clients in their area. It helps users make informed hiring decisions while giving artisans a professional tool to manage client communication and job tracking.`,
          `From user authentication to job tracking, chat features, and receipt generation, the entire system was built with simplicity, speed, and trust in mind.`,
          `As the sole developer, I designed and built the platform from scratch, including the mobile app, backend services, and admin processes. Every feature was carefully crafted to ensure a smooth and reliable experience for both artisans and customers.`
        ],
        tech: [
          {title: 'Expo', text: 'for building the mobile app'},
          {title: 'Firebase', text: 'for user authentication, database, and cloud functions'},
          {title: 'Node.js', text: 'for backend operations and admin logic'},
          {title: 'Stream SDK', text: 'for real-time video and voice calling'},
          {title: 'Stream SDK', text: 'for real-time video and voice calling'},
        ],
        images: [
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753790597/portfolio/getArtizan/1_upbyh7.png',
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753790603/portfolio/getArtizan/2_ibgfbn.png',
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753790614/portfolio/getArtizan/3_lkswnj.png',
          'https://res.cloudinary.com/rukkiecodes/image/upload/v1753790615/portfolio/getArtizan/4_ydpdp6.png',
        ],
        to: `/getArtizan`,
      },
    ]
  }),
})
