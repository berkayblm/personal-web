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
      sections: {
        about: { eyebrow: '01 · About', headlineA: 'A quick', headlineB: 'intro' },
        education: { eyebrow: '02 · Education', headlineA: 'Academic', headlineB: 'background' },
        experience: { eyebrow: '03 · Experience', headlineA: "Where I've", headlineB: 'worked' },
        projects: { eyebrow: '04 · Projects', headlineA: 'Selected', headlineB: 'work' },
        skills: { eyebrow: '05 · Skills', headlineA: 'Tech I work', headlineB: 'with' },
        contact: { eyebrow: '06 · Contact' }
      },
      home: {
        greeting: "Hi, I'm",
        title: 'Berkay Bilimli',
        subtitle: 'Software Engineer · Backend & Full‑Stack',
        tagline: 'Building scalable banking and fintech systems with Java, Spring Boot and modern web tech.',
        roles: ['Backend Developer', 'Full‑Stack Engineer', 'Microservices Architect', 'Java · Spring Boot'],
        learnMore: 'View my work',
        contactCta: 'Get in touch',
        scroll: 'Scroll'
      },
      about: {
        name: 'Berkay Bilimli',
        role: 'Software Engineer · Backend & Full‑Stack',
        location: 'Istanbul, Turkey',
        description:
          "I'm a software engineer focused on backend systems, microservices and full‑stack development. I work daily with Java, Spring Boot, PL/SQL, Redis, Kafka and React.js, building reliable banking and fintech platforms. Recently graduated in Computer Engineering at Ege University (GPA 3.38/4.0).",
        skills: ['Microservices · REST APIs · Event‑Driven · Cloud', 'Databases · Testing · Observability · Agile'],
        interests: 'Off‑hours: guitar, films, languages and outdoor sports.',
        stats: [
          { value: '3+', label: 'Years coding' },
          { value: '8+', label: 'Microservices shipped' },
          { value: '88%', label: 'Test coverage' },
          { value: '25‑40%', label: 'Latency reduced' }
        ]
      },
      education: {
        degree: 'B.Sc. Computer Engineering',
        institution: 'Ege University · İzmir, Turkey',
        period: 'Sep 2020 – Jul 2025',
        details: [
          'GPA: 3.38 / 4.0',
          'Coursework: OOP, Data Structures, Algorithms, Operating Systems, Databases, Microarchitecture, Software Engineering, Microservices, Backend Engineering.'
        ]
      },
      experience: {
        intern: {
          date: 'Feb 2025 – Present',
          title: 'Software Engineer',
          company: 'Yapı Kredi Teknoloji · Istanbul, Turkey',
          bullets: [
            'Built and maintained backend and frontend features for digital banking applications supporting Yapı Kredi Bank Deutschland.',
            'Contributed to cross-border banking services using Spring Boot, PL/SQL, Redis and React.js.',
            'Designed and shipped 8+ microservices as part of the modernization of legacy monolithic banking systems.',
            'Reduced API and workflow latency by 25–40% via Redis caching, query optimization and improved service/data access patterns.',
            'Implemented event-driven integrations with Kafka, improving scalability of approval-driven business processes.',
            'Improved production observability and reliability through Grafana monitoring and proactive performance analysis.',
            'Raised code quality with JUnit/Mockito unit tests (~88% coverage), code reviews and defect resolution.'
          ]
        },
        parttime1: {
          date: 'Feb 2024 – Jan 2025',
          title: 'Software Engineer (Part‑Time)',
          company: 'Mobility Payment · Dubai, UAE',
          bullets: [
            'Developed and optimized the backend and frontend of a card‑issuing kiosk using Java Spring Boot microservices, Vue.js, MySQL and Redis.',
            'Integrated real-time banking systems across Africa and the Middle East for seamless card-issuing flows.',
            'Led the upgrade of Spring Boot from 1.5 to 3.2, introducing JUnit and integration testing with ~90% coverage.'
          ]
        },
        parttime2: {
          date: 'Jul 2023 – Jan 2024',
          title: 'Software Engineer (Part‑Time)',
          company: 'TPR Information Technologies · İzmir, Turkey',
          bullets: [
            'Built internal tools and integrations on a .NET stack, focusing on data flows and reporting.',
            'Collaborated in an agile team, contributing to backend services and database design.'
          ]
        },
        intern2: {
          date: 'Aug 2022 – Sep 2022',
          title: 'Finance 101 Intern',
          company: 'QNB Finansbank · Istanbul, Turkey',
          bullets: [
            'Completed a structured banking and finance program covering core banking operations and products.'
          ]
        }
      },
      projects: {
        repo: 'Source',
        demo: 'Watch demo',
        items: [
          {
            title: 'ExamiNation — Social Learning Platform',
            location: 'İzmir, Turkey',
            date: 'Jul 2024 – Jun 2025',
            description: [
              'Collaborative Android app for university exam prep with microservices, AI‑powered recommendations and a modern UI.'
            ],
            tech: ['Android', 'Spring Boot', 'PostgreSQL', 'Redis', 'Cloud'],
            demo: 'https://youtu.be/udNuJvmDvvk'
          },
          {
            title: 'Library App',
            location: 'İzmir, Turkey',
            date: 'Feb 2023 – Apr 2023',
            description: [
              'Android library app with user authentication, book listing and PDF viewing, powered by a Spring Boot backend.'
            ],
            tech: ['Android', 'Spring Boot', 'Hibernate'],
            repo: 'https://github.com/berkayblm/spring-library-hibernate-crud'
          }
        ]
      },
      contact: {
        title: "Let's build something",
        subtitle: "Have a role, project or just want to say hi? My inbox is open.",
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send message'
      },
      footer: {
        copyright: 'Berkay Bilimli. All rights reserved.',
        business: 'For business: berkayant4@gmail.com',
        built: 'Designed & built with React, Tailwind and Framer Motion.'
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
        redis: 'Redis',
        kafka: 'Kafka',
        grafana: 'Grafana'
      },
      skills: {
        title: 'Languages',
        java: 'Java',
        csharp: 'C#',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        htmlcss: 'HTML / CSS',
        sql: 'SQL / PL‑SQL'
      }
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
      sections: {
        about: { eyebrow: '01 · Hakkımda', headlineA: 'Kısa bir', headlineB: 'tanışma' },
        education: { eyebrow: '02 · Eğitim', headlineA: 'Akademik', headlineB: 'geçmiş' },
        experience: { eyebrow: '03 · Deneyim', headlineA: 'Çalıştığım', headlineB: 'yerler' },
        projects: { eyebrow: '04 · Projeler', headlineA: 'Seçilmiş', headlineB: 'çalışmalar' },
        skills: { eyebrow: '05 · Yetenekler', headlineA: 'Kullandığım', headlineB: 'teknolojiler' },
        contact: { eyebrow: '06 · İletişim' }
      },
      home: {
        greeting: 'Merhaba, ben',
        title: 'Berkay Bilimli',
        subtitle: 'Yazılım Mühendisi · Backend & Full‑Stack',
        tagline: 'Java, Spring Boot ve modern web teknolojileri ile ölçeklenebilir bankacılık ve fintek sistemleri geliştiriyorum.',
        roles: ['Backend Geliştirici', 'Full‑Stack Mühendis', 'Mikroservis Mimarı', 'Java · Spring Boot'],
        learnMore: 'Çalışmalarımı gör',
        contactCta: 'İletişime geç',
        scroll: 'Aşağı'
      },
      about: {
        name: 'Berkay Bilimli',
        role: 'Yazılım Mühendisi · Backend & Full‑Stack',
        location: 'İstanbul, Türkiye',
        description:
          'Backend sistemleri, mikroservisler ve full‑stack geliştirmeye odaklı bir yazılım mühendisiyim. Java, Spring Boot, PL/SQL, Redis, Kafka ve React.js ile çalışarak güvenilir bankacılık ve fintek platformları inşa ediyorum. Ege Üniversitesi Bilgisayar Mühendisliği mezunuyum (GNO 3.38/4.0).',
        skills: ['Mikroservisler · REST API · Olay Tabanlı · Bulut', 'Veritabanları · Test · Gözlemlenebilirlik · Çevik'],
        interests: 'Hobi: gitar, filmler, diller ve açık hava sporları.',
        stats: [
          { value: '3+', label: 'Yıl deneyim' },
          { value: '8+', label: 'Mikroservis' },
          { value: '%88', label: 'Test kapsamı' },
          { value: '%25‑40', label: 'Gecikme azaltımı' }
        ]
      },
      education: {
        degree: 'Bilgisayar Mühendisliği Lisans',
        institution: 'Ege Üniversitesi · İzmir, Türkiye',
        period: 'Eyl 2020 – Tem 2025',
        details: [
          'GNO: 3.38 / 4.0',
          'Dersler: OOP, Veri Yapıları, Algoritmalar, İşletim Sistemleri, Veritabanları, Mikro‑mimari, Yazılım Mühendisliği, Mikroservisler, Backend Mühendisliği.'
        ]
      },
      experience: {
        intern: {
          date: 'Şub 2025 – Şu Anda',
          title: 'Yazılım Mühendisi',
          company: 'Yapı Kredi Teknoloji · İstanbul, Türkiye',
          bullets: [
            'Yapı Kredi Bank Deutschland’ı destekleyen dijital bankacılık uygulamaları için backend ve frontend geliştirdim ve sürdürdüm.',
            'Spring Boot, PL/SQL, Redis ve React.js kullanarak sınır ötesi bankacılık servislerine katkıda bulundum.',
            'Monolitik bankacılık sistemlerinin modernizasyonu kapsamında 8+ mikroservis tasarladım ve hayata geçirdim.',
            'Redis önbellekleme, sorgu optimizasyonu ve veri erişim örüntüleri ile API ve iş akışı gecikmesini %25‑40 azalttım.',
            'Kafka ile olay tabanlı entegrasyonlar geliştirerek onay süreçlerinin ölçeklenebilirliğini artırdım.',
            'Grafana ile gözlemlenebilirliği ve üretim güvenilirliğini iyileştirdim.',
            'JUnit/Mockito birim testleri (~%88 kapsam), kod incelemeleri ve hata çözümü ile kod kalitesini yükselttim.'
          ]
        },
        parttime1: {
          date: 'Şub 2024 – Oca 2025',
          title: 'Yazılım Mühendisi (Yarı Zamanlı)',
          company: 'Mobility Payment · Dubai, BAE',
          bullets: [
            'Java Spring Boot mikroservisleri, Vue.js, MySQL ve Redis ile kart basım kiosk’unun backend ve frontend’ini geliştirdim ve optimize ettim.',
            'Afrika ve Orta Doğu’da gerçek zamanlı bankacılık sistemleri ile entegrasyonlar sağladım.',
            'Spring Boot’u 1.5’ten 3.2’ye yükselttim; ~%90 kapsamla JUnit ve entegrasyon testleri ekledim.'
          ]
        },
        parttime2: {
          date: 'Tem 2023 – Oca 2024',
          title: 'Yazılım Mühendisi (Yarı Zamanlı)',
          company: 'TPR Bilgi Teknolojileri · İzmir, Türkiye',
          bullets: [
            '.NET tabanlı dahili araç ve entegrasyonlar geliştirdim; veri akışları ve raporlama üzerine odaklandım.',
            'Çevik bir takımda backend servisleri ve veritabanı tasarımına katkı sağladım.'
          ]
        },
        intern2: {
          date: 'Ağu 2022 – Eyl 2022',
          title: 'Finans 101 Stajyeri',
          company: 'QNB Finansbank · İstanbul, Türkiye',
          bullets: [
            'Çekirdek bankacılık operasyonları ve ürünlerini kapsayan yapılandırılmış bir programı tamamladım.'
          ]
        }
      },
      projects: {
        repo: 'Kod',
        demo: 'Demoyu izle',
        items: [
          {
            title: 'ExamiNation — Sosyal Öğrenme Platformu',
            location: 'İzmir, Türkiye',
            date: 'Tem 2024 – Haz 2025',
            description: [
              'Mikroservisler, yapay zeka destekli öneriler ve modern bir arayüze sahip üniversite sınav hazırlık Android uygulaması.'
            ],
            tech: ['Android', 'Spring Boot', 'PostgreSQL', 'Redis', 'Cloud'],
            demo: 'https://youtu.be/udNuJvmDvvk'
          },
          {
            title: 'Kütüphane Uygulaması',
            location: 'İzmir, Türkiye',
            date: 'Şub 2023 – Nis 2023',
            description: [
              'Kullanıcı kimlik doğrulama, kitap listeleme ve PDF görüntüleme özellikli; Spring Boot ile beslenen Android kütüphane uygulaması.'
            ],
            tech: ['Android', 'Spring Boot', 'Hibernate'],
            repo: 'https://github.com/berkayblm/spring-library-hibernate-crud'
          }
        ]
      },
      contact: {
        title: 'Birlikte bir şeyler inşa edelim',
        subtitle: 'Bir pozisyon, proje ya da sadece selam için — kutum açık.',
        name: 'Adınız',
        email: 'E‑posta',
        message: 'Mesajınız',
        send: 'Mesajı gönder'
      },
      footer: {
        copyright: 'Berkay Bilimli. Tüm hakları saklıdır.',
        business: 'İş için: berkayant4@gmail.com',
        built: 'React, Tailwind ve Framer Motion ile tasarlandı ve geliştirildi.'
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
        redis: 'Redis',
        kafka: 'Kafka',
        grafana: 'Grafana'
      },
      skills: {
        title: 'Diller',
        java: 'Java',
        csharp: 'C#',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        htmlcss: 'HTML / CSS',
        sql: 'SQL / PL‑SQL'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
