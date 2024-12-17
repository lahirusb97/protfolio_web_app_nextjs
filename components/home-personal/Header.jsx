"use client";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Header() {
  const [currentWord, setCurrentWord] = useState("");
  const words = [
    "Branding",
    "Marketing",
    "Web Development",
    "Graphic Design",
    "Advertising",
    "Shopify Development",
  ];

  const wordIndex = useRef(0);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();

    const typeWord = (word) => {
      const tl = gsap.timeline();
      const chars = word.split("");
      setCurrentWord(""); // Clear the current word

      // Type one letter at a time
      chars.forEach((char, i) => {
        tl.to({}, { duration: 0.1 }); // Delay for each character
        tl.add(() => setCurrentWord((prev) => prev + char));
      });

      // Pause before starting to erase
      tl.to({}, { duration: 1 });

      // Erase the word
      chars.forEach(() => {
        tl.to({}, { duration: 0.05 });
        tl.add(() => setCurrentWord((prev) => prev.slice(0, -1)));
      });

      return tl;
    };

    const loopWords = () => {
      const timeline = gsap.timeline({ repeat: -1 });
      words.forEach((word) => {
        timeline.add(typeWord(word));
      });
    };

    loopWords();

    return () => gsap.globalTimeline.clear(); // Cleanup on unmount
  }, []);

  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/images/planet.png"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h3>
                <span className="hero_text_color">
                  AI-Powered Multi-Disciplinary Marketing Agency Specialized in{" "}
                </span>
                <span className="hero_text_animation">{currentWord}</span>.
              </h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      AI-powered technology, strategic insight, and creative
                      expertise seamlessly unite to deliver customized solutions
                      that maximize results at every step.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
