// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    projects: [
      {
        prependAvatar:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753788946/portfolio/healthTok/react-logo_3x_woflzn.png",
        banner:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753787593/portfolio/healthTok/Slice_4_e4jzlx.png",
        title: "HealthTok",
        subtitle: "Telemedicine Reimagined",
        overview: [
          `HealthTok is a telemedicine platform that connects patients with licensed medical professionals for remote consultations. Users can sign up as either Doctors or Patients, with doctors submitting their credentials for review before being approved to offer services.`,
          `Once verified, doctors can be discovered by patients who can then book consultations, communicate via video, voice, or chat, and receive expert care without leaving home. The platform also supports voice notes and secure in-app communication to ensure accessibility and convenience for every user.`,
          `Built with scalability and user privacy in mind, HealthTok simplifies how people access healthcare by putting trusted medical help just a tap away.`,
        ],
        about: [
          `HealthTok is a telemedicine app designed to make healthcare more accessible and convenient. It allows users to register either as doctors or patients. Doctors upload their credentials for review before being approved to offer paid consultations. Once approved, patients can connect with them through the app.`,
          `The platform supports video calls, voice calls, text chat, and voice notes, giving patients multiple ways to communicate with trusted medical professionals. HealthTok aims to provide safe, easy-to-use, and affordable remote healthcare for everyone.`,
          `As the Head of Development, I led the entire build process—from planning and architecture to design and deployment—ensuring the app was functional, user-friendly, and scalable from day one.`,
        ],
        tech: [
          { title: "Expo", text: "for building the mobile app" },
          {
            title: "Firebase",
            text: "for user authentication, database, and cloud functions",
          },
          { title: "Node.js", text: "for backend operations and admin logic" },
          {
            title: "Stream SDK",
            text: "for real-time video and voice calling",
          },
          {
            title: "Stream SDK",
            text: "for real-time video and voice calling",
          },
        ],
        wide: false,
        images: [
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753787594/portfolio/healthTok/1_b5nuvv.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753787594/portfolio/healthTok/3_cbbbvq.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753787593/portfolio/healthTok/4_y6xvuy.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753787593/portfolio/healthTok/5_tnusj7.png",
        ],
        to: `/HealthTok`,
      },

      {
        prependAvatar:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753790706/portfolio/getArtizan/react-logo_3x_baxawk.png",
        banner:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753790588/portfolio/getArtizan/Slice_emjxw7.jpg",
        title: "getArtizan",
        subtitle: "Find & Hire Skilled Artisans Nearby",
        overview: [
          `getArtizan is a location-based platform that connects skilled artisans and service providers with people who need their expertise. Whether you're looking for a plumber, electrician, carpenter, or any other craftsperson, getArtizan makes it easy to find, hire, and communicate with local talent directly from your phone.`,
          `Users can sign up as either Artisans (or businesses) or as Customers seeking services. Once connected, they can chat within the app, and when the job is complete, artisans can generate and send receipts to clients right through the platform.`,
        ],
        about: [
          `getArtizan was built to support small businesses and independent artisans by giving them visibility and direct access to clients in their area. It helps users make informed hiring decisions while giving artisans a professional tool to manage client communication and job tracking.`,
          `From user authentication to job tracking, chat features, and receipt generation, the entire system was built with simplicity, speed, and trust in mind.`,
          `As the sole developer, I designed and built the platform from scratch, including the mobile app, backend services, and admin processes. Every feature was carefully crafted to ensure a smooth and reliable experience for both artisans and customers.`,
        ],
        tech: [
          { title: "Expo", text: "for building the mobile app" },
          {
            title: "Firebase",
            text: "for user authentication, database, and cloud functions",
          },
          { title: "Node.js", text: "for backend operations and admin logic" },
          {
            title: "Stream SDK",
            text: "for real-time video and voice calling",
          },
          {
            title: "Stream SDK",
            text: "for real-time video and voice calling",
          },
        ],
        wide: false,
        images: [
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753790597/portfolio/getArtizan/1_upbyh7.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753790603/portfolio/getArtizan/2_ibgfbn.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753790614/portfolio/getArtizan/3_lkswnj.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753790615/portfolio/getArtizan/4_ydpdp6.png",
        ],
        to: `/getArtizan`,
      },

      {
        prependAvatar:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753794452/portfolio/recido/react-logo_3x_k11o4w.png",
        banner:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753794435/portfolio/recido/Slice_z4rie0.png",
        title: "Recido",
        subtitle: "Smart Business Management, Simplified",
        overview: [
          `Recido is a mobile-first business management app built to help small business owners, freelancers, and artisans handle essential tasks like issuing receipts, invoices, and quotations — all from their smartphones.`,
          `The platform combines simplicity, professionalism, and smart tools like inventory tracking, customer management, and AI-powered stock suggestions to make everyday business operations faster and easier.`,
          `Whether you're running a personal hustle or managing a team of sales reps, Recido helps you create polished documents, manage stock, track clients, and stay organized — without the need for complex or expensive software.`,
        ],
        about: [
          `Recido is a business management app I built from the ground up to make life easier for small business owners, freelancers, and artisans. It allows users to create and share receipts, invoices, and quotations directly from their phones, helping them run their operations more professionally without needing complex tools.`,
          `The app also includes inventory tracking, basic customer management, and an AI feature that suggests when it's time to restock fast-moving items. Users can invite sales reps to help with document creation while keeping sensitive data private. Everything is designed to be fast, simple, and secure, so users can focus more on their work and less on paperwork.`,
          `As the developer behind Recido, I handled everything — from the initial idea and design to the final product and ongoing updates — with a focus on making business tools feel modern, useful, and easy to use.`,
        ],
        tech: [
          { title: "Expo", text: "for building the mobile app" },
          {
            title: "Firebase",
            text: "for user authentication, database, and cloud functions",
          },
          { title: "Node.js", text: "for backend operations and admin logic" },
          {
            title: "Stream SDK",
            text: "for real-time video and voice calling",
          },
          {
            title: "Stream SDK",
            text: "for real-time video and voice calling",
          },
        ],
        wide: false,
        images: [
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753794436/portfolio/recido/1_lr8n2d.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753794436/portfolio/recido/2_z1mtwg.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753794438/portfolio/recido/3_azjwaa.png",
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753794439/portfolio/recido/4_wlir1u.png",
        ],
        to: `/Recido`,
      },

      {
        prependAvatar:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753800512/portfolio/metronet/logo_a6edmz.png",
        banner:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753800513/portfolio/metronet/banner_n1envt.png",
        title: "Metronet Chiropractic Clinic",
        subtitle: "Natural Healing Through Experience",
        overview: [
          `Metronet Chiropractic Clinic is a trusted care provider offering natural, science-based treatments for patients across the Twin Cities metro area. Established in 2003 by Dr. Chris Fokumlah, the clinic specializes in treating injuries from auto accidents, workplace incidents, sports activities, and more, while also supporting long-term wellness and recovery.`,
          `With over 20 years of clinical experience, Dr. Chris and his team focus on helping patients reduce pain, restore mobility, and regain their quality of life through customized treatment plans that blend professionalism with compassion.`,
        ],
        about: [
          `Metronet Chiropractic has built its reputation on results. The clinic offers care for people of all ages, using natural, non-invasive techniques to manage both acute and chronic conditions. Whether a patient is recovering from an accident or seeking to improve their overall health, the clinic’s resolution-driven approach ensures that every treatment is focused on long-term healing and function.`,
          `Beyond standard care, Metronet also provides personal injury support, making it a reliable choice for those navigating recovery after an accident. With a warm and welcoming environment, combined with scientifically grounded practices, Metronet Chiropractic continues to help countless individuals return to their daily lives with confidence and comfort.`,
        ],
        tech: [],
        wide: true,
        images: [
          `https://res.cloudinary.com/rukkiecodes/image/upload/v1753801012/portfolio/metronet/Screenshot_2025-07-29_155517_xogbuc.png`,
          `https://res.cloudinary.com/rukkiecodes/image/upload/v1753801049/portfolio/metronet/Screenshot_2025-07-29_155542_txiy1g.png`,
          `https://res.cloudinary.com/rukkiecodes/image/upload/v1753801048/portfolio/metronet/Screenshot_2025-07-29_155634_xzk45e.png`,
          `https://res.cloudinary.com/rukkiecodes/image/upload/v1753801062/portfolio/metronet/Screenshot_2025-07-29_155725_pmscio.png`,
        ],
        to: `/Metronet Chiropractic Clinic`,
      },

      {
        prependAvatar:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753802150/portfolio/Nne-Grace/lolo_enij16_ct1rko.jpg",
        banner:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753802199/portfolio/Nne-Grace/Screenshot_2025-07-29_161625_tobne0.png",
        title: "Nne-Grace Internationa",
        subtitle: "Nne-Grace International Foundation – Grace in Action",
        overview: [
          `Nne-Grace International Foundation is a non-profit organization dedicated to improving the lives of underserved and less privileged communities through grace, compassion, and education. Rooted in a mission to bring healthcare access and life opportunities to those who need them most, the foundation serves as a beacon of hope in places where hopelessness often prevails.`,
          `Since its launch in 2017, Nne-Grace has led grassroots health missions and educational outreach, with a special focus on disease prevention and awareness in rural Nigerian communities. The foundation continues to impact lives through the power of knowledge, driven by faith and the generosity of its supporters.`,
        ],
        about: [
          `Nne-Grace International Foundation was born from a simple but powerful conversation during a visit to Nigeria—one that revealed just how deeply health misinformation and poverty affect entire communities. Many people, young and old, misunderstood the causes of chronic illnesses like high blood pressure and diabetes, often attributing them to spiritual attacks rather than treatable conditions.`,
          `In December 2017, a health mission was launched in two villages in Oboro, Abia State, serving as a turning point in the foundation's journey. This mission not only provided medical support but also sparked a greater desire to educate, uplift, and reach even more lives through grace and compassion.`,
          `Today, the foundation operates with a clear belief: knowledge is power, and education is the first step toward a healthier, more hopeful future. Through medical outreach, disease awareness, and donor-supported initiatives, Nne-Grace continues to transform lives — one community at a time.`,
        ],
        tech: [],
        wide: true,
        images: [
          `https://res.cloudinary.com/rukkiecodes/image/upload/v1753802329/portfolio/Nne-Grace/Screenshot_2025-07-29_161835_tgsd18.png`,
          `https://res.cloudinary.com/rukkiecodes/image/upload/v1753802366/portfolio/Nne-Grace/Screenshot_2025-07-29_161911_um5noy.png`,
        ],
        to: `/Nne-Grace Internationa`,
      },

      {
        prependAvatar:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753802718/portfolio/WT%20v3/logo_rwijky_vf5t1o.png",
        banner:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753802620/portfolio/WT%20v3/Screenshot_2025-07-29_162300_zuzsrr.png",
        title: "Wanlainjo Tech Hub (V2)",
        subtitle: "A Fresh Digital Face for a Future-Driven Brand",
        overview: [
          `Wanlainjo Tech Hub is an intensive training program designed to equip aspiring developers with the practical skills needed to thrive in today’s tech-driven world. Over the course of 16 immersive weeks, students go from learning basic programming concepts to building full-stack web applications using JavaScript, Python, MySQL, and modern development tools.`,
          `With a focus on project-based learning and teamwork, the program helps students develop not just technical skills, but also the ability to solve real-world problems, collaborate effectively, and launch production-ready web apps. Wanlainjo Tech Hub bridges the gap between education and industry expectations.`,
        ],
        about: [
          `Wanlainjo Tech Hub was built with one clear goal in mind: to give people the skills and support they need to succeed in tech—whether as web developers, freelancers, or entrepreneurs. The program focuses on practical knowledge and hands-on experience, guiding students through the fundamentals of programming, backend development, database integration, and API usage.`,
          `Beyond the code, students also learn soft skills like version control, collaboration, and team-based problem-solving—skills that mirror real-world software development environments. As part of the experience, learners receive personalized career guidance, access to curated job opportunities, and support in building strong portfolios that attract employers.`,
          `The program doesn’t just teach you how to write code—it prepares you to think, build, and grow like a professional developer.`,
        ],
        tech: [],
        wide: true,
        images: [],
        to: `/Wanlainjo Tech Hub (V2)`,
      },

      {
        prependAvatar:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753802718/portfolio/WT%20v3/logo_rwijky_vf5t1o.png",
        banner:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1753803250/portfolio/WT%20v3/Screenshot_2025-07-29_163304_vvqi3e.png",
        title: "Wanlainjo Tech Hub (V1)",
        subtitle: "Empowering the Next Generation of Developers",
        overview: [
          `After previously collaborating with Wanlainjo Tech Hub, I was brought back to redesign and rebuild their website—a testament to our strong working relationship and their trust in my ability to deliver. The updated site offers a cleaner, more intuitive experience for prospective students and partners, while better reflecting the Tech Hub's mission to train the next generation of web developers.`,
          `This version of the website was built to improve performance, usability, and responsiveness across devices, ensuring that potential learners could explore the program, view curriculum details, and sign up with ease.`,
        ],
        about: [
          `As a returning client, Wanlainjo Tech Hub needed a website that could grow with them—both in function and visual appeal. I worked closely with their team to redesign the platform from the ground up, incorporating a modern layout, mobile-first design, and clear calls to action that guide users through the enrollment process.`,
          `Beyond just visuals, the rebuild focused on performance, accessibility, and streamlined content presentation to highlight the core benefits of the program: immersive training, real-world projects, career support, and strong industry connections.`,
          `This project reflects more than just a new look—it marks the evolution of Wanlainjo Tech Hub as a brand, and my role in helping them stay relevant and impactful in a fast-moving digital world.`,
        ],
        tech: [],
        wide: true,
        images: [],
        to: `/Wanlainjo Tech Hub (V1)`,
      },
    ],
  }),
});
