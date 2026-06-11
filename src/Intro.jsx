import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

function Intro(){
    const firstRef = useRef(null);
    const lastRef = useRef(null);

    useEffect(() => {
        let typedLast = null;

        const typedFirst = new Typed(firstRef.current, {
            strings: ['Damian'],
            typeSpeed: 80,
            showCursor: true,
            cursorChar: '|',
            onComplete: (self) => {
                self.cursor.remove();
                typedLast = new Typed(lastRef.current, {
                    strings: ['Kakkar-Johnson'],
                    typeSpeed: 80,
                    showCursor: true,
                    cursorChar: '|',
                    loop: false,
                });
            }
        });

        return () => {
            typedFirst.destroy();
            if (typedLast) typedLast.destroy();
        };
    }, []);

    return(
        <div id="intro">
            <div id="introImg">
                <img src="/myFace.png" alt="Damian Kakkar-Johnson" />
                <ul>
                    <li><a href="https://linkedin.com/in/damian-kakkar-johnson-579723311" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
                    <li><a href="https://github.com/damiankakkarjohnson" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                    <li><a href="mailto:damiankakkarjohnson@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a></li>
                </ul>
            </div>

            <div id="introText">
                <h2>
                    <span ref={firstRef}></span>
                    <br/>
                    <span id="myNameIntro" ref={lastRef}></span>
                </h2>
                <h3>Computer Science Student from Ottawa, Ontario, Canada!</h3>
                <p>
                I'm studying Computer Science at Carleton University, specializing in Artificial Intelligence and Machine Learning, and I'm on track to graduate in 2029.
                I love to build things, whether that's co-founding a startup, building a Chrome extension, or simulating a cellular network from scratch in C. 
                I'm drawn to hard problems, and I'm always working on something. Outside of tech, I stay active through weightlifting and baseball. 
                I also try to give back where I can, from tutoring math to organizing a food bank fundraiser raffle. 
                I'm someone who enjoys learning new things, taking on challenges, and continuously improving both technically and personally.
                </p>
            </div>
        </div>
    );
}

export default Intro