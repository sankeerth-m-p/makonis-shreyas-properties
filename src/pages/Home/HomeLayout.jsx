import HeroSection from "./sections/HeroSection.jsx";
import ThoughtfulSection from "./sections/ThoughtfulSection.jsx";
import BespokeSection from "./sections/BespokeSection.jsx";
import SignatureSpaces from "./sections/SignatureSpaces.jsx";
import StoryBehindBrand from "./sections/StoryBehindBrand.jsx";
import WhatMakesUsDifferent from "./sections/WhatMakesUsDifferent.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import NatureSign from "./sections/NatureSign.jsx";
import ExpertsSection from "./sections/ExpertsSection.jsx";
import PromiseSection from "./sections/PromiseSection.jsx";
import { useEffect, useState } from "react";

import { useLenis } from "lenis/react";

const HomeLayout = () => {
  const lenis = useLenis();
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    // Don't enable snapping on mobile
    if (!lenis || isMobile) return;

    let scrollDirection = 0;
    let lastScrollY = window.scrollY;
    let snapTimeout;
    let isWithinTallSection = false;
    let currentTallSection = null;

    const snapToSection = () => {
      const sections = document.querySelectorAll(".snap-section");
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      let targetSection = null;
      let targetDistance = Infinity;

      // Check if we're currently within a tall section
      isWithinTallSection = false;
      currentTallSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTopAbs = window.scrollY + rect.top;
        const sectionBottomAbs = sectionTopAbs + rect.height;
        const sectionHeight = rect.height;

        if (scrollY >= sectionTopAbs && scrollY <= sectionBottomAbs) {
          if (sectionHeight > viewportHeight * 2) {
            isWithinTallSection = true;
            currentTallSection = section;
          }
        }
      });

      // ✅ NEW: allow leaving tall section at edges
      if (isWithinTallSection && currentTallSection) {
        const rect = currentTallSection.getBoundingClientRect();
        const tallTop = rect.top;
        const tallBottom = rect.bottom;

        // If scrolling DOWN and near bottom → snap to NEXT section
        if (scrollDirection > 0 && tallBottom <= viewportHeight + 80) {
          const all = Array.from(sections);
          const idx = all.indexOf(currentTallSection);
          const next = all[idx + 1];
          if (next) {
            lenis.scrollTo(next.offsetTop, {
              duration: 0.8,
              easing: (t) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            });
          }
          return;
        }

        // If scrolling UP and near top → snap to PREVIOUS section
        if (scrollDirection < 0 && tallTop >= -80) {
          const all = Array.from(sections);
          const idx = all.indexOf(currentTallSection);
          const prev = all[idx - 1];
          if (prev) {
            const prevRect = prev.getBoundingClientRect();
            const prevHeight = prevRect.height;

            // if prev smaller than screen, snap its bottom to viewport bottom
            const targetScroll =
              prevHeight < viewportHeight
                ? prev.offsetTop - (viewportHeight - prevHeight)
                : prev.offsetTop;

            lenis.scrollTo(targetScroll, {
              duration: 0.8,
              easing: (t) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            });
          }
          return;
        }

        // otherwise inside tall section: don't snap
        return;
      }

      // Normal snapping logic (same as before, with direction filter)
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const sectionHeight = rect.height;

        const sectionAbsTop = window.scrollY + sectionTop;
        const sectionAbsBottom = sectionAbsTop + sectionHeight;

        // ✅ direction blocking (prevents going back)
        if (scrollDirection > 0) {
          if (sectionAbsTop <= scrollY + 1) return;
        } else if (scrollDirection < 0) {
          if (sectionAbsBottom >= scrollY + viewportHeight - 1) return;
        }

        // Tall section logic (approaching from outside)
        if (sectionHeight > viewportHeight * 2) {
          if (scrollDirection > 0 && sectionTop > 0 && sectionTop < viewportHeight) {
            const visibleFromTop = Math.min(sectionHeight, viewportHeight - sectionTop);
            const percentVisible = (visibleFromTop / sectionHeight) * 100;

            if (percentVisible >= 10) {
              const distance = Math.abs(sectionTop);
              if (distance < targetDistance) {
                targetDistance = distance;
                targetSection = section;
              }
            }
          } else if (scrollDirection < 0 && sectionBottom > 0 && sectionBottom < viewportHeight) {
            const distance = Math.abs(sectionBottom - viewportHeight);
            if (distance < targetDistance) {
              targetDistance = distance;
              targetSection = section;
            }
          }
        } else {
          // Normal sections
          if (scrollDirection > 0 && sectionTop > 0 && sectionTop < viewportHeight) {
            const visibleFromTop = Math.min(sectionHeight, viewportHeight - sectionTop);
            const percentVisible = (visibleFromTop / sectionHeight) * 100;

            if (percentVisible >= 10) {
              const distance = Math.abs(sectionTop);
              if (distance < targetDistance) {
                targetDistance = distance;
                targetSection = section;
              }
            }
          } else if (scrollDirection < 0 && sectionBottom > 0 && sectionBottom < viewportHeight) {
            const visibleFromBottom = Math.min(sectionHeight, sectionBottom);
            const percentVisible = (visibleFromBottom / sectionHeight) * 100;

            if (percentVisible >= 10) {
              const distance = Math.abs(sectionBottom - viewportHeight);
              if (distance < targetDistance) {
                targetDistance = distance;
                targetSection = section;
              }
            }
          } else if (Math.abs(scrollDirection) < 1) {
            const visibleTop = Math.max(0, -sectionTop);
            const visibleBottom = Math.min(sectionHeight, viewportHeight - sectionTop);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visiblePercent = (visibleHeight / sectionHeight) * 100;

            if (visiblePercent >= 50) {
              const sectionCenter = rect.top + rect.height / 2;
              const viewportCenter = viewportHeight / 2;
              const distance = Math.abs(sectionCenter - viewportCenter);

              if (distance < targetDistance) {
                targetDistance = distance;
                targetSection = section;
              }
            }
          }
        }
      });

      if (targetSection) {
        const targetRect = targetSection.getBoundingClientRect();
        const targetHeight = targetRect.height;

        if (targetHeight > viewportHeight * 2) {
          if (scrollDirection < 0 && targetRect.bottom > 0 && targetRect.bottom < viewportHeight) {
            const targetScroll = targetSection.offsetTop + targetHeight - viewportHeight;
            lenis.scrollTo(targetScroll, {
              duration: 0.8,
              easing: (t) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            });
          } else {
            const targetScroll = targetSection.offsetTop;
            lenis.scrollTo(targetScroll, {
              duration: 0.8,
              easing: (t) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            });
          }
        } else {
          const targetScroll =
            targetHeight < viewportHeight
              ? targetSection.offsetTop - (viewportHeight - targetHeight)
              : targetSection.offsetTop;

          lenis.scrollTo(targetScroll, {
            duration: 0.8,
            easing: (t) =>
              t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
          });
        }
      }
    };

    const handleScrollEnd = () => {
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(snapToSection, 50);
    };

    const trackScroll = () => {
      scrollDirection = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", trackScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);

    let scrollEndTimer;
    const checkScrollEnd = () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        handleScrollEnd();
      }, 10);
    };

    window.addEventListener("scroll", checkScrollEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", trackScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("scroll", checkScrollEnd);
      clearTimeout(snapTimeout);
      clearTimeout(scrollEndTimer);
    };
  }, [lenis, isMobile]); // Add isMobile to dependency array
 // Add isMobile to dependency array

  return (
    <>
      
      <div className="snap-section "><HeroSection /></div>
      <div className="snap-section">
        <ThoughtfulSection />
      </div>
      <div className="snap-section">
        <BespokeSection />
      </div>
      <div className="snap-section">
  <SignatureSpaces />
</div>
      <div className="snap-section ">
        <StoryBehindBrand />
      </div>
      <div className="snap-section">
        <WhatMakesUsDifferent />
      </div>
      <div className="snap-section">
        <Testimonials />
      </div>
      <div className="snap-section">
        <NatureSign />
      </div>
      <div className="snap-section overflow-hidden">
        <ExpertsSection />
      </div>
      <div className="snap-section">
        <PromiseSection />
      </div>
    </>
  );
};

export default HomeLayout;




// import HeroSection from "./sections/HeroSection.jsx";
// import ThoughtfulSection from "./sections/ThoughtfulSection.jsx";
// import BespokeSection from "./sections/BespokeSection.jsx";
// import SignatureSpaces from "./sections/SignatureSpaces.jsx";
// import StoryBehindBrand from "./sections/StoryBehindBrand.jsx";
// import WhatMakesUsDifferent from "./sections/WhatMakesUsDifferent.jsx";
// import Testimonials from "./sections/Testimonials.jsx";
// import NatureSign from "./sections/NatureSign.jsx";
// import ExpertsSection from "./sections/ExpertsSection.jsx";
// import PromiseSection from "./sections/PromiseSection.jsx";
// import { useEffect, useState } from "react";

// import { useLenis } from "lenis/react";

// const HomeLayout = () => {
//   const lenis = useLenis();
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if mobile on mount and resize
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
//     };

//     // Initial check
//     checkIfMobile();

//     // Add resize listener
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   useEffect(() => {
//     // Don't enable snapping on mobile
//     if (!lenis || isMobile) return;

//     let scrollDirection = 0;
//     let lastScrollY = window.scrollY;
//     let snapTimeout;
//     let isWithinTallSection = false;
//     let currentTallSection = null;

//     const snapToSection = () => {
//       const sections = document.querySelectorAll(".snap-section");
//       const scrollY = window.scrollY;
//       const viewportHeight = window.innerHeight;

//       let targetSection = null;
//       let targetDistance = Infinity;

//       // Check if we're currently within a tall section
//       isWithinTallSection = false;
//       currentTallSection = null;

//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         const sectionTopAbs = window.scrollY + rect.top;
//         const sectionBottomAbs = sectionTopAbs + rect.height;
//         const sectionHeight = rect.height;

//         // Check if we're currently inside this section
//         if (scrollY >= sectionTopAbs && scrollY <= sectionBottomAbs) {
//           if (sectionHeight > viewportHeight * 2) {
//             isWithinTallSection = true;
//             currentTallSection = section;
//           }
//         }
//       });

//       // If we're inside a tall section, don't snap to its top
//       // Only snap to other sections
//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         const sectionTop = rect.top;
//         const sectionBottom = rect.bottom;
//         const sectionHeight = rect.height;

//         const sectionAbsTop = window.scrollY + sectionTop;
//         const sectionAbsBottom = sectionAbsTop + sectionHeight;

//         // Skip if this is the tall section we're currently in
//         if (isWithinTallSection && section === currentTallSection) {
//           return;
//         }

//         // ✅ KEY FIX:
//         // When scrolling DOWN → only allow snapping to sections BELOW current position
//         // When scrolling UP   → only allow snapping to sections ABOVE current position
//         if (scrollDirection > 0) {
//           // scrolling DOWN
//           if (sectionAbsTop <= scrollY + 1) return; // block previous/current sections
//         } else if (scrollDirection < 0) {
//           // scrolling UP
//           if (sectionAbsBottom >= scrollY + viewportHeight - 1) return; // block next/current sections
//         }

//         // For TALL SECTIONS (if not currently inside one)
//         if (sectionHeight > viewportHeight * 2) {
//           // When approaching a tall section from above (scrolling down)
//           if (scrollDirection > 0 && sectionTop > 0 && sectionTop < viewportHeight) {
//             const visibleFromTop = Math.min(sectionHeight, viewportHeight - sectionTop);
//             const percentVisible = (visibleFromTop / sectionHeight) * 100;

//             if (percentVisible >= 10) {
//               const distance = Math.abs(sectionTop);
//               if (distance < targetDistance) {
//                 targetDistance = distance;
//                 targetSection = section;
//               }
//             }
//           }

//           // When approaching a tall section from below (scrolling up)
//           else if (scrollDirection < 0 && sectionBottom > 0 && sectionBottom < viewportHeight) {
//             // For tall sections, when scrolling up, only snap to the BOTTOM of the section
//             // not the top
//             const distance = Math.abs(sectionBottom - viewportHeight);
//             if (distance < targetDistance) {
//               targetDistance = distance;
//               targetSection = section;
//             }
//           }
//         }

//         // For NORMAL SECTIONS
//         else {
//           // DOWNWARD SCROLLING
//           if (scrollDirection > 0 && sectionTop > 0 && sectionTop < viewportHeight) {
//             const visibleFromTop = Math.min(sectionHeight, viewportHeight - sectionTop);
//             const percentVisible = (visibleFromTop / sectionHeight) * 100;

//             if (percentVisible >= 10) {
//               const distance = Math.abs(sectionTop);
//               if (distance < targetDistance) {
//                 targetDistance = distance;
//                 targetSection = section;
//               }
//             }
//           }

//           // UPWARD SCROLLING
//           else if (scrollDirection < 0 && sectionBottom > 0 && sectionBottom < viewportHeight) {
//             const visibleFromBottom = Math.min(sectionHeight, sectionBottom);
//             const percentVisible = (visibleFromBottom / sectionHeight) * 100;

//             if (percentVisible >= 10) {
//               const distance = Math.abs(sectionBottom - viewportHeight);
//               if (distance < targetDistance) {
//                 targetDistance = distance;
//                 targetSection = section;
//               }
//             }
//           }

//           // Minimal scroll
//           else if (Math.abs(scrollDirection) < 1) {
//             const visibleTop = Math.max(0, -sectionTop);
//             const visibleBottom = Math.min(sectionHeight, viewportHeight - sectionTop);
//             const visibleHeight = Math.max(0, visibleBottom - visibleTop);
//             const visiblePercent = (visibleHeight / sectionHeight) * 100;

//             if (visiblePercent >= 50) {
//               const sectionCenter = rect.top + rect.height / 2;
//               const viewportCenter = viewportHeight / 2;
//               const distance = Math.abs(sectionCenter - viewportCenter);
//               if (distance < targetDistance) {
//                 targetDistance = distance;
//                 targetSection = section;
//               }
//             }
//           }
//         }
//       });

//       if (targetSection) {
//         const targetRect = targetSection.getBoundingClientRect();
//         const targetHeight = targetRect.height;

//         // For tall sections, if scrolling UP to them, snap to BOTTOM
//         // If scrolling DOWN to them, snap to TOP
//         if (targetHeight > viewportHeight * 2) {
//           if (scrollDirection < 0 && targetRect.bottom > 0 && targetRect.bottom < viewportHeight) {
//             // Scrolling up to tall section - snap to its bottom
//             const targetScroll = targetSection.offsetTop + targetHeight - viewportHeight;
//             lenis.scrollTo(targetScroll, {
//               duration: 0.8,
//               easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
//             });
//           } else {
//             // Scrolling down to tall section - snap to its top
//             const targetScroll = targetSection.offsetTop;
//             lenis.scrollTo(targetScroll, {
//               duration: 0.8,
//               easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
//             });
//           }
//         } else {
//           // For normal sections:
//           const targetScroll =
//             targetHeight < viewportHeight
//               ? targetSection.offsetTop - (viewportHeight - targetHeight)
//               : targetSection.offsetTop;

//           lenis.scrollTo(targetScroll, {
//             duration: 0.8,
//             easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
//           });
//         }
//       }
//     };

//     const handleScrollEnd = () => {
//       clearTimeout(snapTimeout);
//       snapTimeout = setTimeout(snapToSection, 50);
//     };

//     const trackScroll = () => {
//       scrollDirection = window.scrollY - lastScrollY;
//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener("scroll", trackScroll, { passive: true });
//     window.addEventListener("scrollend", handleScrollEnd);

//     let scrollEndTimer;
//     const checkScrollEnd = () => {
//       clearTimeout(scrollEndTimer);
//       scrollEndTimer = setTimeout(() => {
//         handleScrollEnd();
//       }, 10);
//     };

//     window.addEventListener("scroll", checkScrollEnd, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", trackScroll);
//       window.removeEventListener("scrollend", handleScrollEnd);
//       window.removeEventListener("scroll", checkScrollEnd);
//       clearTimeout(snapTimeout);
//       clearTimeout(scrollEndTimer);
//     };
//   }, [lenis, isMobile]); 

