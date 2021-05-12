import React, { useEffect, useState } from 'react';

const words = ['Developer', 'Photographer', 'Creator'];
const wait = '3000';

export const TypeWritter2 = () => {
  const [text, wordIndex, isDeleting, typeSpeed] = useTypeWritting(words, wait);

  return (
    <div>
      <h1>The {text}</h1>
      <p>wordIndex={wordIndex}</p>
      <p>isDeleting={isDeleting ? 'true' : 'false'}</p>
      <p>typeSpeed={typeSpeed}</p>
    </div>
  );
};

const useTypeWritting = (words, wait) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(parseInt(wait, 10));

  const type = () => {
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    isDeleting
      ? setText(fullTxt.substring(0, text.length - 1))
      : setText(fullTxt.substring(0, text.length + 1));

    setTypeSpeed(300);

    if (isDeleting) {
      setTypeSpeed(150);
    }

    if (!isDeleting && text === fullTxt) {
      setTypeSpeed(3000);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex(wordIndex + 1);
      setTypeSpeed(500);
    }
  };

  useEffect(() => {
    const id = setTimeout(() => type(), typeSpeed);
    return () => clearTimeout(id);
  });

  return [text, wordIndex, isDeleting, typeSpeed];
};
