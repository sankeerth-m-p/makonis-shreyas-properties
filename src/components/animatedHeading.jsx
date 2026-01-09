import { useEffect, useState ,useRef} from "react";

const AnimatedHeading = ({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = 0.15,
  as = 'h1'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Split text into lines based on actual line breaks in the rendered text
    if (textRef.current) {
      const text = children;
      const words = text.split(' ');
      setLines([text]); // For now, treat as single line, will split visually
      
      // Better approach: split by \n or let CSS handle wrapping
      if (text.includes('\n')) {
        setLines(text.split('\n'));
      } else {
        // Split into chunks for multi-line effect
        const wordsPerLine = Math.ceil(words.length / Math.ceil(words.length / 4));
        const lineArray = [];
        for (let i = 0; i < words.length; i += wordsPerLine) {
          lineArray.push(words.slice(i, i + wordsPerLine).join(' '));
        }
        setLines(lineArray.length > 1 ? lineArray : [text]);
      }
    }
  }, [children]);

  const Component = as;

  return (
    <Component ref={containerRef} className={className} style={{ overflow: 'hidden' }}>
      <div ref={textRef}>
        {lines.map((line, index) => (
          <div
            key={index}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s ease-out ${delay + index * staggerDelay}s, transform 0.6s ease-out ${delay + index * staggerDelay}s`,
              display: 'block'
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </Component>
  );
}; export default AnimatedHeading;