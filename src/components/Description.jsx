import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const text1 = 'Описание';
const text2 = 'Ниже представлена крутящаяся картинка. Крутится по нажатию на неё.'
const text3 = 'Нажмите на картинку, чтобы увеличить её...'
;const Description = () => {
  return (    
    <div>
      <div>        
        <motion.div id='divText1' initial={{opacity: 0}} animate={{x: (window.innerWidth/10), opacity: 1}} transition={{delay:0, duration:2}}>
          <h3 id='text1' className='col-md-8 offset-md-1 align-items-center'>
            Описание
          </h3>
        </motion.div>

        <motion.div id='divText2' initial={{opacity: 0}} animate={{x: (window.innerWidth/10), opacity: 1}} transition={{delay:1, duration:2}}>
          <h4>Ниже представлена крутящаяся картинка.</h4>
        </motion.div>

        <motion.div id='img1' initial={{opacity: 0}} animate={{x: (window.innerWidth/10), opacity: 1}} transition={{delay:2, duration:2}}>
            <motion.img src='img/banner-new.jpeg' className='banner' width={850} initial={{opacity:0.6}} transition={{duration:5}} whileTap={{rotate:360}}/>
        </motion.div>

        <motion.div id='divText3' initial={{opacity: 0}} animate={{x: (window.innerWidth/10), opacity: 1}} transition={{delay:3, duration:2}}>
          <h4>Нажмите на картинку, чтобы увеличить её...</h4>
        </motion.div>

        <motion.div id='img2' initial={{opacity:0, scale:0.5}} animate={{x: (window.innerWidth/10), scale:1, opacity:1}} transition={{delay:4, duration:2}}>
          <motion.img src='img/sun.jpg' className='sun' width={500} initial={{opacity:0.6}} transition={{duration:5}} whileHover={{scale:1.5, transition:{duration:2}}}/>
        </motion.div>

        {/* <motion.button className='btn btn-primary' whileHover={{scale:1.2}} initial={{opacity: 0}} animate={{x: (window.innerWidth/2), opacity: 1}} transition={{delay:3, duration:2}}>
          Нажми
        </motion.button> */}

      </div>
    </div>
  )
}

export default Description