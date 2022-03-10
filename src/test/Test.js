import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../App.css';

export default function Test() {
    const anim = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1
        },
        config: {
            delay: 1000,
            duration: 2000,
        }
    });

  return (
    <div>
        <animated.h1 style={anim}>test</animated.h1>
    </div>
  )
}

