import React from 'react'
import './Experience.css'
import { FaHandPointRight } from 'react-icons/fa';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });
   


    const imageValue = useTransform(scrollYProgress, [0, 1], ["-60%", "10%"]);
    const imageValue1 = useTransform(scrollYProgress, [0, 1], ["60%", "-10%"]);

    return (
        <section className='experience' ref={containerRef}>
            <h5> What skills I Have</h5>
            <h2> My Expertise</h2>

            <div className="container experience_container">
                <motion.div className="experience_frontend" style={{ translateX: imageValue1 }}>
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>BootStrap</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>Angularjs</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>Expressjs</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>Sass</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                    </div>
                    <h3>Content Management System</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>WordPress</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </motion.div>

                <motion.div className="experience_backend" style={{ translateX: imageValue }}>
                    
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>Nodejs</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>.Net</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                    <h3>DataBase</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>SQL</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                    <h3>Version Control System</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon' />
                            <div>
                                <h4>Git</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                    
                </motion.div>
            </div>


        </section >
    )
}

export default Experience