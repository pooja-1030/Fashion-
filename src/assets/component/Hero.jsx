import React from 'react'

const Hero = () => {
    return (
        <div>
            <header id="home" class="hero">
                <div class="container hero-content">
                    <div class="hero-text">
                        <div class="badge">🚀 Start learning today</div>
                        <h1>Unlock Your Potential with <span class="gradient-text">Online Learning</span></h1>
                        <p>
                            Access 2000+ courses from expert instructors. Learn at your own pace, anytime, anywhere.
                            Elevate your career with industry-recognized certifications.
                        </p>

                        <div class="hero-buttons">
                            <a href="#" class="btn btn-primary btn-lg">
                                Get Started <i class="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" class="btn btn-secondary btn-lg">
                                <i class="fas fa-play"></i> Watch Demo
                            </a>
                        </div>

                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number">50k+</span>
                                <span class="stat-label">Students</span>
                            </div>
                            <div class="video-divider"></div>
                            <div class="stat-item">
                                <span class="stat-number">120+</span>
                                <span class="stat-label">Instructors</span>
                            </div>
                            <div class="video-divider"></div>
                            <div class="stat-item">
                                <span class="stat-number">4.8</span>
                                <span class="stat-label">Rating</span>
                            </div>
                        </div>
                    </div>

                    <div class="hero-image">
                        <div class="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="E-learning illustration"
                                id="hero-img"
                            />

                            <div class="floating-card card-1">
                                <div class="icon-box"><i class="fas fa-code"></i></div>
                                <div class="text">
                                    <h4>Coding</h4>
                                    <p>Completed</p>
                                </div>
                                <div class="check"><i class="fas fa-check-circle"></i></div>
                            </div>

                            <div class="floating-card card-2">
                                <div class="avatar-group">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="Student" />
                                    <img src="https://i.pravatar.cc/100?img=5" alt="Student" />
                                    <span class="more">+2k</span>
                                </div>
                                <p>Active Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Hero