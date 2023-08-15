import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  useEffect(() => {
    const options = {
      strings: ['Developer!', 'Student!', 'Competetive Programmer!'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typed-text gobli" style={{color: "black"}}></span>;
};

export default TypedText;
