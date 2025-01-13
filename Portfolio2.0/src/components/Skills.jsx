import React from 'react';

function Skills() {
  const skillData = [
    { src: "https://res.cloudinary.com/dgg35phxr/image/upload/v1736328327/HTML_qsxsit.png", alt: "HTML" },
    { src: "https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo", alt: "CSS" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png", alt: "JavaScript" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vPwfiJSj26vNSX05o6W5-RDFmWPeHfxkeA&s", alt: "C" },
    { src: "https://i.pinimg.com/originals/51/45/df/5145df1033fa60f13b3b7125d2b69554.jpg", alt: "C++" },
    { src: "https://lh5.googleusercontent.com/NpCFEToPJTrK4VZ7i4-ggNHgWfOGnLYh7S059c25TOCZunHJv8ljPOHIjnoWB_Y1cxCIQ6dbXf-x4J9G2SXvuUEoo2C3r2tWj3qekRyZRQhk0JT-vGtnVk5oOEFGcRn8hQ-I3CH-5FZXgPJFlG7-4pI", alt: "MongoDB" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfIAbhsVQnM44fbWK7Z5W36azK5EBjDHGi7MTqVZhvKwES-_U7iKHZHinhMM2zr9PbHY&usqp=CAU", alt: "Express.js" },
    { src: "https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg", alt: "React.js" },
    { src: "https://usefulangle.s3.amazonaws.com/thumbs/nodejs.png", alt: "Node.js" },
    { src: "https://dotbadges.com/wp-content/uploads/2023/01/Bootstrap-Sticker.webp", alt: "Bootstrap" },
    { src: "https://dsq.uk/images/News-Views/_1200x900_crop_center-center_none/tailwind-css-logo.jpg", alt: "Tailwind CSS" },
    { src: "https://cdn.dribbble.com/users/6569/screenshots/16471177/vs_code_dribbble_4x.png", alt: "VSCode" },
    { src: "https://www.bleepstatic.com/content/hl-images/2024/06/06/GitHub.jpg", alt: "Git" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lNCH_ATbLokCfQwAfYieRwgSFftV-52OTg&s", alt: "REST APIs" },
    { src: "https://excellence-it.co.uk/wp-content/uploads/2020/05/azure-1024x576.jpg", alt: "Azure" },
    { src: "https://5.imimg.com/data5/PC/FS/PG/SELLER-6917958/ux-ui-design-services-500x500.png", alt: "UI/UX Design" },
  ];

  return (
    <section id="skills" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 font-poppins animate__animated animate__fadeInUp font-serif">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <div key={index} className="relative bg-gray-100 rounded-lg shadow-sm overflow-hidden">
              <img src={skill.src} alt={skill.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center text-center text-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
