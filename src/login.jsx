import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoginF from './LoginForm';

function Login() {
  const [showLogin, setShowLogin] = useState(false);

  // Define the animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Handle the transition to the login form
  const handleTransition = () => {
    setShowLogin(true);
  };

  return (
    <div style={{ backgroundColor: '#C41230' }}>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        {!showLogin ? (
          <>
            <motion.h1
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                color: 'white',
                fontSize: 100,
                fontWeight: 'bolder',
                fontFamily: 'Friz Quadrata, Arial, sans-serif',
              }}
            >
              FINGER
            </motion.h1>
            <motion.h1
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 1.5, duration: 1 }}
              style={{
                color: 'white',
                fontSize: 100,
                fontWeight: 'bolder',
                fontFamily: 'Friz Quadrata, Arial, sans-serif',
              }}
            >
              LICKIN'
            </motion.h1>
            <motion.h1
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 2.5, duration: 1 }}
              style={{
                color: 'white',
                fontSize: 100,
                fontWeight: 'bolder',
                fontFamily: 'Friz Quadrata, Arial, sans-serif',
              }}
            >
              GOOD
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              onAnimationComplete={handleTransition}
            ></motion.div>
          </>
        ) : (
          <div className='login-container'>
            <LoginF />
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
