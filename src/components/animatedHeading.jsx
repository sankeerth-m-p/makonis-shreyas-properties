import { useEffect, useState ,useRef} from "react";
const AnimatedHeading = ({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = 0.5,
  as = 'h1',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

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

  // Split text by \n to get lines
  const getText = () => {
    if (typeof children === 'string') {
      return children;
    }
    // Handle JSX children with \n
    if (Array.isArray(children)) {
      return children.join('');
    }
    return String(children);
  };
  
  const lines = getText().split('\n').map(line => line.trim()).filter(line => line);

  const Component = as;

  return (
    <Component 
      ref={containerRef} 
      className={className}
      style={{ 
        ...style,
        overflow: 'hidden' 
      }}
    >
      {lines.map((line, index) => (
        <span
          key={index}
          style={{
            display: 'block',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: `opacity 0.6s ease-out ${delay + index * staggerDelay}s, transform 0.6s ease-out ${delay + index * staggerDelay}s`,
          }}
        >
          {line}
        </span>
      ))}
    </Component>
  );
}; export default AnimatedHeading;