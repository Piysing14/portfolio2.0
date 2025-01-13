import React, { useEffect } from "react";

function SplashScreen() {
  useEffect(() => {
    // Set a timeout to hide the splash screen and show the main content after 4 seconds
    setTimeout(() => {
      document.getElementById('splash').classList.add('hidden');
      document.getElementById('main-content').classList.remove('hidden');
    }, 4000);
  }, []);

  return (
    <div>
      {/* Splash Screen */}
      <div id="splash" className="fixed inset-0 z-50 flex justify-center items-center">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/dgg35phxr/video/upload/v1736348485/Intro_tmywel.mp4" 
            type="video/mp4"
          />

        </video>
      </div>

      {/* Main Content */}
      <div id="main-content" className="hidden">
        {/* Your main content here */}
        {/* More content */}
      </div>
    </div>
  );
}

export default SplashScreen;
