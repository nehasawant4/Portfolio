import { useState, useEffect, useRef } from "react";
import "./about.scss";

const About = () => {
    // Array of slides to display (both images and text)
    const slides = [
        //{ type: "image", content: "/neha.jpeg", alt: "Profile" },
        { type: "image", content: "/IMG_14332.jpeg", alt: "Profile" },
        { type: "text", content: <>
            Software Engineer with 3 years of experience in Software Development, Cloud Computing, Automation, and DevOps.
            <br/><br/>
            Based in Santa Clara, CA — in the heart of Silicon Valley.
        </> },
        { type: "text", content: "I’m looking for full-time roles where I can turn coffee into code, bugs into features, and ideas into production." },
        { type: "text", content: (
            <div className="technologies">
                <p>Whether it's building from scratch or fixing what's on fire, I speak these fluently:</p>
                <ul>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/java.png" alt="Java" className="tech-icon"/>
                            <span>Java</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/python.png" alt="Python" className="tech-icon"/>
                            <span>Python</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/api.png" alt="APIs" className="tech-icon" />
                            <span>APIs</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/react.png" alt="React" className="tech-icon" />
                            <span>React</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/javascript.png" alt="JavaScript" className="tech-icon" />
                            <span>JavaScript</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/node.png" alt="Node.js" className="tech-icon" />
                            <span>Node.js</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/devops.png" alt="CI/CD" className="tech-icon" />
                            <span>CI/CD</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/aws.png" alt="AWS" className="tech-icon" />
                            <span>AWS</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/gitlab.png" alt="GitLab" className="tech-icon" />
                            <span>GitLab</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/jenkins.png" alt="Jenkins" className="tech-icon" />
                            <span>Jenkins</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/kubernetes.png" alt="Kubernetes" className="tech-icon" />
                            <span>Kubernetes</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/linux.png" alt="Linux" className="tech-icon" />
                            <span>Linux</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/shell.png" alt="Shell" className="tech-icon" />
                            <span>Shell</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/perl.png" alt="Perl" className="tech-icon" />
                            <span>Perl</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/flutter.png" alt="Flutter" className="tech-icon" />
                            <span>Flutter</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/vmware.png" alt="Virtualization" className="tech-icon" />
                            <span>Virtualization (KVM, VMware)</span>
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src="/icons/cloud.png" alt="Cloud Networking" className="tech-icon" />
                            <span>Cloud Networking</span>
                        </div>
                    </li>
                </ul>
            </div>
        ) },
        { type: "text", content: "Scroll down to see my journey beyond my resume" },  
        { type: "text", content: "" }
    ];
    
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [allSlidesViewed, setAllSlidesViewed] = useState(false);
    const aboutRef = useRef(null);
    const viewedSlides = useRef(new Set([0])); // Start with the first slide already in the set
    const scrollAccumulator = useRef(0);
    
    // Function to reset carousel state
    const resetCarouselState = () => {
        setCurrentSlideIndex(0); // Reset to first slide
        setAllSlidesViewed(false);
        viewedSlides.current = new Set([0]); // Reset to only include the first slide
        scrollAccumulator.current = 0; // Reset scroll accumulator
    };
    
    // Use Intersection Observer to detect when About section becomes visible
    useEffect(() => {
        // Reset state on initial mount
        resetCarouselState();
        
        // Create observer to detect when About section enters/exits viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // When About section enters viewport from another section
                    if (entry.isIntersecting) {
                        resetCarouselState();
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the element is visible
        );
        
        // Start observing the About section
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }
        
        // Cleanup observer on component unmount
        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);
    
    useEffect(() => {
        let isTransitioning = false;
        let scrollTimeout = null;
        let touchStartY = 0;
        let touchEndY = 0;
        
        const handleWheel = (e) => {
            // If all slides have been viewed, allow normal scrolling
            if (allSlidesViewed && e.deltaY > 0) {
                return; // Don't prevent default, allow normal scrolling
            }
            
            e.preventDefault();
            
            // Don't process wheel events if we're already transitioning
            if (isTransitioning) return;
            
            // Accumulate scroll delta
            scrollAccumulator.current += Math.abs(e.deltaY);
            
            // Only change slide if accumulated scroll is above threshold
            // This prevents small scroll movements from triggering slide changes
            if (scrollAccumulator.current < 100) return;
            
            // Reset accumulator
            scrollAccumulator.current = 0;
            
            // Set transitioning flag to prevent rapid changes
            isTransitioning = true;
            
            // Clear any existing timeout
            if (scrollTimeout) clearTimeout(scrollTimeout);
            
            // Determine scroll direction
            changeSlide(e.deltaY > 0);
            
            // Allow next transition after delay
            scrollTimeout = setTimeout(() => {
                isTransitioning = false;
            }, 1000); // Adjust this delay to control transition speed
        };
        
        // Function to handle slide change based on direction
        const changeSlide = (isNext) => {
            if (isNext) {
                // Going to next slide
                setCurrentSlideIndex(prevIndex => {
                    // Always go to the next slide in sequence
                    const nextIndex = (prevIndex + 1) % slides.length;
                    
                    // Add this slide to viewed set
                    viewedSlides.current.add(nextIndex);
                    
                    // Check if all slides have been viewed
                    if (viewedSlides.current.size === slides.length) {
                        setAllSlidesViewed(true);
                    }
                    
                    // If this is the last slide, immediately scroll to the next section (Work)
                    if (nextIndex === slides.length - 1) {
                        document.getElementById('Work').scrollIntoView({ behavior: 'smooth' });
                    }
                    
                    return nextIndex;
                });
            } else {
                // Going to previous slide
                setCurrentSlideIndex(prevIndex => {
                    // Go to previous slide, wrap around to the end if at first slide
                    const prevIdx = prevIndex === 0 ? 0 : prevIndex - 1;
                    
                    // Add this slide to viewed set
                    viewedSlides.current.add(prevIdx);
                    
                    return prevIdx;
                });
            }
        };
        
        // Touch event handlers for mobile
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };
        
        const handleTouchMove = (e) => {
            // If all slides have been viewed and swiping down, allow normal scrolling
            if (allSlidesViewed && touchStartY > e.touches[0].clientY) {
                return; // Allow normal scrolling
            }
            e.preventDefault(); // Prevent default scrolling behavior
        };
        
        const handleTouchEnd = (e) => {
            touchEndY = e.changedTouches[0].clientY;
            
            // Don't process touch events if we're already transitioning
            if (isTransitioning) return;
            
            // Set minimum swipe distance threshold
            const minSwipeDistance = 50;
            const touchDiff = touchStartY - touchEndY;
            
            // Only trigger if the swipe distance is significant
            if (Math.abs(touchDiff) < minSwipeDistance) return;
            
            // Set transitioning flag to prevent rapid changes
            isTransitioning = true;
            
            // Clear any existing timeout
            if (scrollTimeout) clearTimeout(scrollTimeout);
            
            // Determine swipe direction
            changeSlide(touchDiff > 0); // If touchDiff > 0, swiped up (next slide)
            
            // Allow next transition after delay
            scrollTimeout = setTimeout(() => {
                isTransitioning = false;
            }, 1000);
        };
        
        const aboutElement = aboutRef.current;
        if (aboutElement) {
            // Add wheel event listener for desktop
            aboutElement.addEventListener('wheel', handleWheel, { passive: false });
            
            // Add touch event listeners for mobile
            aboutElement.addEventListener('touchstart', handleTouchStart, { passive: true });
            aboutElement.addEventListener('touchmove', handleTouchMove, { passive: false });
            aboutElement.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
        
        return () => {
            if (aboutElement) {
                // Remove all event listeners on cleanup
                aboutElement.removeEventListener('wheel', handleWheel);
                aboutElement.removeEventListener('touchstart', handleTouchStart);
                aboutElement.removeEventListener('touchmove', handleTouchMove);
                aboutElement.removeEventListener('touchend', handleTouchEnd);
            }
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [slides.length, allSlidesViewed]);
    
    return(
        <div className="about" ref={aboutRef}>
            <div className="wrapper">
                <div className="slideContainer">
                    {slides[currentSlideIndex].type === "image" ? (
                        <div className="image-container fade-in" key={`image-${currentSlideIndex}`}>
                            <img 
                                src={slides[currentSlideIndex].content} 
                                alt={slides[currentSlideIndex].alt} 
                            />
                            {slides[currentSlideIndex].caption && (
                                <div className="image-caption">{slides[currentSlideIndex].caption}</div>
                            )}
                        </div>
                    ) : (
                        <div 
                            className="text-slide fade-in"
                            key={`text-${currentSlideIndex}`} // Key helps with animation
                        >
                            {slides[currentSlideIndex].content}
                        </div>
                    )}
                </div>
                <div className="slideIndicator">
                    {slides.map((_, index) => (
                        <div 
                            key={index} 
                            className={`indicator ${index === currentSlideIndex ? 'active' : ''}`}
                            onClick={() => setCurrentSlideIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
