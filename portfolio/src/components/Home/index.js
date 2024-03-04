import { Link } from 'react-router-dom'
import './index.scss'
import LogoTitle from '../../assets/images/logo_a.png'
import letterClass from '../AnimatedLetters/index.js'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/index.js'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const intro = 'Hey,'
    const tell = 'This is Aditya.'
    const job =
        'I am a Computer Science and Engineering student from North South University, Dhaka. I work with web applications and deep learning or machine learning and also I am a Linux enthusiast. Currently I am working on my "Senior Design Project" where I am basically working with deep learning and on some pet projects as well.'

    const introArray = intro.split()
    const tellArray = tell.split()
    const jobArray = job.split()

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={introArray}
                        idx={11}
                    />
                </h1>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={tellArray}
                        idx={11}
                    />
                </h1>
                <br />
                <h2>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={11}
                    />
                </h2>
                <Link to="/contact" className="flat-button">
                    Feel Free to Connect With Me
                </Link>
            </div>
        </div>
    )
}

export default Home
