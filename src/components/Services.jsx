const Services = ({ myServicesRef }) => {
  const servicesData = [
    {
      icon: "fa-solid fa-mobile-screen",
      title: "Android Development",
      description:
        "Building high-performance native Android apps using Kotlin, Jetpack Compose, and modern UI/UX principles. Experienced in REST APIs, Firebase, Maps, video processing, and real-time features.",
    },
    {
      icon: "fa-brands fa-apple",
      title: "iOS & Flutter Development",
      description:
        "Creating smooth and scalable iOS apps using Flutter. Expertise in cross-platform development, animations, state management, and integrating native modules.",
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Cross-Platform Apps",
      description:
        "Developing efficient cross-platform mobile apps with a single codebase. Ensuring native-like performance, responsive layouts, and seamless API integrations.",
    },
    {
      icon: "fa-solid fa-server",
      title: "RESTful & GraphQL API Integration",
      description:
        "Expert in connecting apps with secure APIs using REST and GraphQL. Optimizing performance, caching, pagination, and real-time synchronization.",
    },
    {
      icon: "fa-solid fa-fire",
      title: "Firebase & Cloud Services",
      description:
        "Integrations including Authentication, Firestore, Realtime DB, Storage, Cloud Messaging, Crashlytics, and Analytics for scalable mobile applications.",
    },
    {
      icon: "fa-solid fa-sack-dollar",
      title: "Payment Gateway Integration",
      description:
        "Implementing secure payments using Stripe, Apple Pay, Google Pay, and in-app purchases with proper validation and subscription flows.",
    },
    {
      icon: "fa-solid fa-video",
      title: "Video Processing & Streaming",
      description:
        "Advanced video solutions using FFmpeg, custom video players, live streaming, Agora SDK, and low-latency real-time communication.",
    },
    {
      icon: "fa-solid fa-brain",
      title: "AI & TensorFlow Integrations",
      description:
        "Implementing ML-powered features like face detection, text recognition, and custom TensorFlow Lite models optimized for mobile devices.",
    },
    {
      icon: "fa-solid fa-globe",
      title: "Real-Time Communication",
      description:
        "Building real-time features with WebSockets, Pushers, and event-driven architecture for chat, live location, notifications, and collaboration tools.",
    },
    {
      icon: "fa-solid fa-map-location",
      title: "Google Maps & Location Services",
      description:
        "Building map-based apps with navigation, route drawing, live tracking, geofencing, and location-based services.",
    },
  ];

  return (
    <div
      ref={myServicesRef}
      class="tmp-service-area tmp-section-gapBottom"
      id="service"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head mb--50">
              <div class="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span class="subtitle theme-gradient">Worked On</span>
              </div>
              <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                Technologies & Services I Work With
              </h2>
            </div>
          </div>
        </div>
        <div class="about-us-section-card row g-5 animation-action-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              class="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image"
            >
              <div class="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in">
                <div class="card-head">
                  <div class="logo-img">
                    <i class={service.icon}></i>
                  </div>
                  <h3 class="card-title">{service.title}</h3>
                </div>
                <p class="card-para">{service.description}</p>
                <div class="tmp-light light-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
