import React, {useState} from "react";
import Header from "./header/Header";
import Navbar from "./nav/Navbar";
import About from "./about/About";
import Experience from "./experience/Experience";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Dark from "./Dark/Dark";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import ScrollPreviewWindow from "./ScrollPreviewWindow";
import Seperator from "./seperator/Seperator";



function App() {
    return (
        <div>
            <div className="main-content">
                <Header />
                <Navbar />
                <Dark />
                <About />
                <Seperator/>
                <Skills/>
                <Seperator/>
                {/* <Education /> */}
                {/* <Experience /> */}
                <Testimonials />
                <Seperator/>
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;

// import React, { useState } from 'react';
// import Header from './header/Header';
// import Navbar from './nav/Navbar';
// import About from './about/About';
// import Experience from './experience/Experience';
// import Testimonials from './testimonials/Testimonials';
// import Contact from './contacts/Contacts';
// import Footer from './footer/Footer';
// import Education from './education/Education';
// import ScrollPreviewWindow from './ScrollPreviewWindow';

// function App() {
//   const [scrollPos, setScrollPos] = useState(0);

//   const handleContentScroll = (previewScrollPos) => {
//     setScrollPos(previewScrollPos);
//   };

//   return (
//     <div>
      
//       <div className="main-content" onScroll={e => handleContentScroll(e.target.scrollTop)}>
//         <Header />
//         <Navbar />
//         <About />
//         <Education />
//         <Experience />
//         <Testimonials />
//         <Contact />
//         <Footer />
//       </div>
//       <ScrollPreviewWindow content={(
//         <div className="scroll-preview-content">
//           <Header />
//           <Navbar />
//           <About />
//           <Education />
//           <Experience />
//           <Testimonials />
//           <Contact />
//           <Footer />
//         </div>
//       )} scrollPosition={scrollPos} />
//     </div>
//   );
// }

// export default App;
