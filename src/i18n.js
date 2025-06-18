import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        language: 'TR/EN'
      },
      home: {
        title: 'Berkay Bilimli',
        subtitle: 'Software Engineer | Backend Developer',
        learnMore: 'Learn More'
      },
      about: {
        name: 'Berkay Bilimli',
        role: 'Software Engineer & Backend Developer',
        location: 'Izmir, Turkey',
        description: "I'm a passionate software engineer specializing in backend and full-stack development. Experienced in Java, SQL, JavaScript, TypeScript, and frameworks like Spring Boot, React.js. Currently pursuing a BSc in Computer Engineering at Ege University (GPA: 3.3/4.0).",
        skills: ['Microservices, REST APIs, Cloud, Agile', 'Database Management, Testing'],
        interests: 'Interests: Guitar, Movies, Languages, Outdoor Sports'
      },
      education: {
        degree: 'Bachelor of Computer Engineering',
        institution: 'Ege University, Izmir, Turkey',
        period: 'Sep 2020 - Present',
        details: [
          'GPA: 3.3',
          'Courses: OOP, Java, Analysis of Algorithms, Operating Systems, Data Structures, Database Management, Microarchitecture, Software Analysis and Design, Software Engineering, Microservices, Backend Engineering.'
        ]
      },
      experience: {
        intern: {
          date: 'Feb 2025 - Present',
          title: 'Software Engineering Intern',
          company: 'Yapı Kredi Teknoloji, Kocaeli, Turkey'
        },
        parttime1: {
          date: 'Feb 2024 - Jan 2025',
          title: 'Software Engineer (Part-Time)',
          company: 'Mobility Payment, Dubai, UAE'
        },
        parttime2: {
          date: 'Jul 2023 – Jan 2024',
          title: 'Software Engineer (Part-Time)',
          company: 'TPR Information Technologies, Izmir, Turkey'
        },
        intern2: {
          date: 'Aug 2022 – Sep 2022',
          title: 'Finance 101 Intern',
          company: 'QNB Finansbank, Istanbul, Turkey'
        }
      },
      projects: {
        repo: 'Repo',
        demo: 'Demo Video',
        items: [
          {
            title: 'ExamiNation - Android-Based Social Learning Platform',
            location: 'Izmir, Turkey',
            date: 'Jul 2024 – June 2025',
            description: [
              'A collaborative Android app for university exam preparation, featuring microservices, AI-powered recommendations, and a modern UI.'
            ],
            tech: []
          },
          {
            title: 'Conference Management System',
            location: 'Izmir, Turkey',
            date: 'Feb 2024 – June 2024',
            description: [
              'A full-stack web platform for managing conferences, including paper submission, reviews, and participant registration.'
            ],
            tech: []
          },
          {
            title: 'Library App',
            location: 'Izmir, Turkey',
            date: 'Feb 2023 – Apr 2023',
            description: [
              'An Android library app with user authentication, book listing, and PDF viewing, backed by a Spring Boot server.'
            ],
            tech: []
          }
        ]
      },
      contact: {
        title: 'Contact Me',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message'
      },
      footer: {
        copyright: 'Berkay Bilimli. All rights reserved.',
        business: 'For business, contact berkayant4@gmail.com'
      },
      tools: {
        title: 'Tools & Technologies',
        spring: 'Spring Boot',
        react: 'React.js',
        docker: 'Docker',
        kubernetes: 'Kubernetes',
        git: 'Git',
        vue: 'Vue.js',
        android: 'Android Studio',
        mysql: 'MySQL',
        postgresql: 'PostgreSQL',
        mssql: 'MsSQL',
        firebase: 'Firebase',
        aws: 'AWS',
        redis: 'Redis'
      },
      skills: {
        java: 'Java',
        csharp: 'C#',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        htmlcss: 'HTML/CSS',
        sql: 'SQL'
      },
    }
  },
  tr: {
    translation: {
      navbar: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        education: 'Eğitim',
        experience: 'Deneyim',
        projects: 'Projeler',
        skills: 'Yetenekler',
        contact: 'İletişim',
        language: 'TR/EN'
      },
      home: {
        title: 'Berkay Bilimli',
        subtitle: 'Yazılım Mühendisi | Backend Geliştirici',
        learnMore: 'Daha Fazla'
      },
      about: {
        name: 'Berkay Bilimli',
        role: 'Yazılım Mühendisi & Backend Geliştirici',
        location: 'İzmir, Türkiye',
        description: "Backend ve full-stack geliştirme konusunda uzmanlaşmış tutkulu bir yazılım mühendisiyim. Java, SQL, JavaScript, TypeScript ve Spring Boot, React.js gibi frameworklerde deneyimliyim. Şu anda Ege Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimi almaktayım (GNO: 3.3/4.0).",
        skills: ['Mikroservisler, REST APIler, Bulut, Çevik', 'Veritabanı Yönetimi, Test'],
        interests: 'İlgi Alanları: Gitar, Filmler, Diller, Açık Hava Sporları'
      },
      education: {
        degree: 'Bilgisayar Mühendisliği Lisans',
        institution: 'Ege Üniversitesi, İzmir, Türkiye',
        period: 'Eyl 2020 - Şu Anda',
        details: [
          'GNO: 3.3',
          'Dersler: OOP, Java, Algoritma Analizi, İşletim Sistemleri, Veri Yapıları, Veritabanı Yönetimi, Mikro-mimari, Yazılım Analizi ve Tasarımı, Yazılım Mühendisliği, Mikroservisler, Backend Mühendisliği.'
        ]
      },
      experience: {
        intern: {
          date: 'Şub 2025 - Şu Anda',
          title: 'Yazılım Mühendisliği Stajyeri',
          company: 'Yapı Kredi Teknoloji, Kocaeli, Türkiye'
        },
        parttime1: {
          date: 'Şub 2024 - Oca 2025',
          title: 'Yazılım Mühendisi (Yarı Zamanlı)',
          company: 'Mobility Payment, Dubai, BAE'
        },
        parttime2: {
          date: 'Tem 2023 – Oca 2024',
          title: 'Yazılım Mühendisi (Yarı Zamanlı)',
          company: 'TPR Bilgi Teknolojileri, İzmir, Türkiye'
        },
        intern2: {
          date: 'Ağu 2022 – Eyl 2022',
          title: 'Finans 101 Stajyeri',
          company: 'QNB Finansbank, İstanbul, Türkiye'
        }
      },
      projects: {
        repo: 'Repo',
        demo: 'Demo Video',
        items: [
          {
            title: 'ExamiNation - Android Tabanlı Sosyal Öğrenme Platformu',
            location: 'İzmir, Türkiye',
            date: 'Tem 2024 – Haz 2025',
            description: [
              'Üniversite sınavlarına hazırlık için işbirlikçi bir Android uygulaması; mikroservisler, yapay zeka destekli öneriler ve modern bir arayüz sunar.'
            ],
            tech: []
          },
          {
            title: 'Konferans Yönetim Sistemi',
            location: 'İzmir, Türkiye',
            date: 'Şub 2024 – Haz 2024',
            description: [
              'Makale gönderimi, değerlendirme ve katılımcı kaydı dahil olmak üzere konferans yönetimi için tam kapsamlı bir web platformu.'
            ],
            tech: []
          },
          {
            title: 'Kütüphane Uygulaması',
            location: 'İzmir, Türkiye',
            date: 'Şub 2023 – Nis 2023',
            description: [
              'Kullanıcı kimlik doğrulama, kitap listeleme ve PDF görüntüleme özellikli bir Android kütüphane uygulaması; Spring Boot sunucusu ile desteklenmiştir.'
            ],
            tech: []
          }
        ]
      },
      contact: {
        title: 'İletişim',
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        send: 'Mesajı Gönder'
      },
      footer: {
        copyright: 'Berkay Bilimli. Tüm hakları saklıdır.',
        business: 'İş için iletişim: berkayant4@gmail.com'
      },
      tools: {
        title: 'Araçlar & Teknolojiler',
        spring: 'Spring Boot',
        react: 'React.js',
        docker: 'Docker',
        kubernetes: 'Kubernetes',
        git: 'Git',
        vue: 'Vue.js',
        android: 'Android Studio',
        mysql: 'MySQL',
        postgresql: 'PostgreSQL',
        mssql: 'MsSQL',
        firebase: 'Firebase',
        aws: 'AWS',
        redis: 'Redis'
      },
      skills: {
        java: 'Java',
        csharp: 'C#',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        htmlcss: 'HTML/CSS',
        sql: 'SQL'
      },
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 