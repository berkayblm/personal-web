import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGif = ({ 
  src, 
  alt = "Animated GIF", 
  width = 200, 
  height = 200, 
  animationType = "fadeIn",
  className = "",
  style = {}
}) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 }
    },
    slideInLeft: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.8 }
    },
    slideInRight: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.8 }
    },
    slideInUp: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8 }
    },
    scaleIn: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.6 }
    },
    bounceIn: {
      initial: { scale: 0.3, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    float: {
      animate: { 
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0]
      },
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    },
    pulse: {
      animate: { scale: [1, 1.05, 1] },
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  const currentAnimation = animations[animationType] || animations.fadeIn;

  return (
    <motion.div
      className={className}
      style={{ 
        width, 
        height, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        ...style
      }}
      {...currentAnimation}
    >
      <img 
        src={src} 
        alt={alt} 
        style={{ 
          maxWidth: '100%', 
          maxHeight: '100%',
          objectFit: 'contain'
        }}
      />
    </motion.div>
  );
};

export default AnimatedGif; 