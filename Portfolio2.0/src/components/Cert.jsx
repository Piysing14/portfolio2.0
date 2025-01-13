import React from "react";

function Certifications() {
  const certifications = [
    {
      imgSrc:
        "https://res.cloudinary.com/dgg35phxr/image/upload/v1736326767/Screenshot_2025-01-08_at_14.29.08_aavzqq.png",
      alt: "Full-Stack Web Development Certificate",
      title: "Full-Stack Web Development",
      issuer: "Apna College",
      year: "2024",
      link: "https://www.linkedin.com/in/piysing14/overlay/1723433727793/single-media-viewer/?profileId=ACoAADMKxeoB-gXTlZJd8623XEsMvLCCrh_hRn8",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dgg35phxr/image/upload/v1736326984/Screenshot_2025-01-08_at_14.32.50_stmaqq.png",
      alt: "C for Everyone Certificate",
      title: "C for Everyone: Programming Fundamentals",
      issuer: "University of California, Santa Cruz",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/9KGGDM6TWA3R",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dgg35phxr/image/upload/v1736327130/Screenshot_2025-01-08_at_14.35.15_jjnztv.png",
      alt: "Crash Course on Python",
      title: "Crash Course on Python",
      issuer: "Google",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/2CBNJ6D8SGNC",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dgg35phxr/image/upload/v1736327353/41385315172392_wpojkc.png",
      alt: "AWS Certificate",
      title: "Competency Challenge",
      issuer: "AlmaBetter",
      year: "2025",
      link: "https://verified.sertifier.com/en/verify/41385315172392/",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-gray-800 text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 font-poppins animate__animated animate__fadeInUp font-serif">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group transform transition hover:scale-105"
            >
              <img
                src={cert.imgSrc}
                alt={cert.alt}
                className="w-full h-62 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-semibold text-white">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {cert.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-300">Issued by: {cert.issuer}</p>
                <p className="text-sm text-gray-300">Year: {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
