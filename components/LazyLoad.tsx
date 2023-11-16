import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
}

const LazyLoad: React.FC<AnimatedSectionProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation happens only once
  });

  // Define your animation properties
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  // Update animation controls based on whether the section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
    >
      {children}
    </motion.section>
  );
};

export default LazyLoad;
