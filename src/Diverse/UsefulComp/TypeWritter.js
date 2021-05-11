import React, { useEffect } from 'react';

export const TypeWritter = () => {
  class Writter {
    constructor(txtElement, words, wait = '3000') {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of Word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Type Speed
      let typeSpeed = 300;
  
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      //if word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at the end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  };

  useEffect(() => {
    const txtElement = document.querySelector('.txt-type');
    const words = ['Developer', 'Photographer', 'Creator'];
    const wait = '3000';
    new Writter(txtElement, words, wait)
  });

  return (
    <h1>
      Diego The <span className="txt-type"></span>
    </h1>
  );
};
