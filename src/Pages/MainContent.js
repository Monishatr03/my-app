import React from 'react';
import './MainContent.css';
import logoImage from '../Images/logo.svg';
import heroImage from '../Images/hero-image.png';
import profilepic from '../Images/profilepic.png';
import assignment1 from '../Images/img1.jpg';
import assignment2 from '../Images/img2.jpg';

function MainContent() {
    return (
        <div className="main-wrapper">
            <div className="container">
                <img src={logoImage} alt="Digital Tool" className="main-image" />
                <p className="image-caption">
                    Taken & built upon <strong>one of the most trusted & authentic public repository</strong> from <strong>DSM-5-TR Online Assessment Measures</strong>
                </p>

                <div className="main-content-container">
                    <main className="main-content left">
                        <h2 className="bold-heading">#TalkToMissMp's</h2>
                        <h2 className="bold-heading">Digital Tool for</h2>
                        <h2 className="bold-heading">Psychological Assessments</h2>
                        <p>
                            For further clinical evaluation and research, the APA is offering a number of “emerging measures” in
                        </p>
                        <p>
                            Section III of DSM-5-TR. These patient assessment measures were developed to be administered at the
                        </p>
                        <p>
                            initial patient interview and to monitor treatment progress...
                        </p>
                        <img src={profilepic} alt="Dr. Manpreet" className="profile-pic" />
                        <button className="appointment-button">
                            Book a Psychological Appointment with Dr. Manpreet
                        </button>
                    </main>

                    <div className="image-section">
                        <img src={heroImage} alt="Brain Illustration" className="brain-image" />
                    </div>
                </div>

                <div className="container-search">
                    <div className="search-bar">
                        <input type="text" placeholder="Search assessments..." />
                        <button>
                            <span role="img" aria-label="search">🔍</span>
                        </button>
                    </div>
                    <div className="assessments">
                        <div className="assessment-card">
                            <h3>Assessment 1</h3>
                            <img src={assignment1} alt="Assessment 1" />
                            <p>This is assessment 1.</p>
                            <div className="buttons">
                                <button className="take-test">Take Test</button>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="assessment-card">
                            <h3>Assessment 2</h3>
                            <img src={assignment2} alt="Assessment 2" />
                            <p>This is assessment 2.</p>
                            <div className="buttons">
                                <button className="take-test">Take Test</button>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
