import React from 'react';
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Experience() {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                {/* ======== Start of FrontEnd ======== */}
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <p className='text-light'>Experienced</p>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <p className='text-light'>Intermediate</p>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <p className='text-light'>Intermediate</p>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>ReactJS</h4>
                                <p className='text-light'>Experienced</p>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <p className='text-light'>Intermediate</p>
                            </div>
                        </article>
                    </div>
                </div>
                {/* ======== End of FrontEnd ======== */}

                {/* ======== Start of BackEnd ======== */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <p className='text-light'>Intermediate</p>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <p className='text-light'>Basic</p>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Express JS</h4>
                                <p className='text-light'>Basic</p>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Firebase</h4>
                                <p className='text-light'>Basic</p>
                            </div>
                        </article>
                    </div>
                </div>
                {/* ======== End of BackEnd ======== */}
            </div>
        </section>
    )
}
