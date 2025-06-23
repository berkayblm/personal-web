import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ icon, color = "#007991", size = 60, animationType = "bounce" }) => {
  const animations = {
    bounce: {
      animate: { y: [0, -10, 0] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    rotate: {
      animate: { rotate: 360 },
      transition: { duration: 3, repeat: Infinity, ease: "linear" }
    },
    pulse: {
      animate: { scale: [1, 1.1, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    float: {
      animate: { y: [0, -15, 0], x: [0, 5, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    wave: {
      animate: { rotate: [0, 10, -10, 0] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const currentAnimation = animations[animationType] || animations.bounce;

  return (
    <motion.div
      style={{ 
        width: size, 
        height: size, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: color
      }}
      {...currentAnimation}
    >
      {icon}
    </motion.div>
  );
};

export default AnimatedIcon; 