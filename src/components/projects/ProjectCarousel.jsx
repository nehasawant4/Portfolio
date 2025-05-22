import "./projectcarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { items } from "../projects/project-constants";
import { useState, useEffect } from "react";

// Specific content components for different project types
const VideoContent = ({ videoUrl }) => (
  <div className="popup-video">
    <video controls width="100%" src={videoUrl}>
      Your browser does not support the video tag.
    </video>
  </div>
);

const YouTubeVideo = ({ videoId }) => (
  <div className="popup-youtube">
    <iframe 
      width="100%" 
      height="315" 
      src={`https://www.youtube.com/embed/${videoId}?rel=0&playlist=${videoId}`}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  </div>
);

const ImageGallery = ({ images }) => (
  <div className="popup-gallery">
    {images.map((item, index) => (
      <div key={index} className="gallery-item">
        {typeof item === 'string' ? (
          <img src={item} alt={`Project image ${index + 1}`} />
        ) : (
          <div className="captioned-image">
            <div className="image-caption">{item.caption}</div>
            <div className="image-container">
              <img src={item.src} alt={item.caption || `Project image ${index + 1}`} />
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);

const ProjectPopup = ({ project, onClose }) => {
  // Determine if the project has a custom layout
  const hasCustomLayout = project.layout !== undefined;
  
  const handleOverlayClick = (e) => {
    // Only close if the click was directly on the overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Function to render a specific content section based on its type
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={index} className="popup-description">
            {section.content.split('\n').map((paragraph, pIndex) => (
              <p key={`${index}-${pIndex}`}>{paragraph}</p>
            ))}
          </div>
        );
      case 'image':
        return (
          <div key={index} className="popup-image">
            {section.caption ? (
              <div className="captioned-image">
                <div className="image-caption">{section.caption}</div>
                <div className="image-container">
                  <img src={section.src} alt={section.caption || `Project visual ${index}`} />
                </div>
              </div>
            ) : (
              <img src={section.src} alt={`Project visual ${index}`} />
            )}
          </div>
        );
      case 'youtube':
        return <YouTubeVideo key={index} videoId={section.videoId} />;
      case 'video':
        return <VideoContent key={index} videoUrl={section.videoUrl} />;
      case 'gallery':
        return <ImageGallery key={index} images={section.images} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="project-popup-overlay" onClick={handleOverlayClick}>
      <div className="project-popup">
        <div className="popup-header">
          <h2>{project.title}</h2>
          <p className="popup-tech">{project.tech}</p>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="popup-content">
          {/* Custom layout display */}
          {hasCustomLayout && (
            <div className="custom-content">
              {project.layout.map((section, index) => renderSection(section, index))}
            </div>
          )}

          {/* Default content display (fallback if no custom layout) */}
          {!hasCustomLayout && (
            <>
              <div className="popup-description">
                {project.desc.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {project.img && (
                <div className="popup-image">
                  <img src={project.img} alt={project.title} />
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="popup-footer">
          <button className="view-project-btn" onClick={() => window.open(project.github)}>
            Github
          </button>
          {project.link && (
            <button className="view-project-btn" onClick={() => window.open(project.link)}>
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open a project popup and update URL hash
  const openPopup = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    document.body.classList.add('popup-open'); // Add class to hide navbar wrapper
    
    // Update URL hash without causing a page reload
    window.history.pushState(null, null, `#project=${project.id}`);
  };

  // Function to close popup and clear URL hash
  const closePopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    document.body.classList.remove('popup-open'); // Remove class to show navbar wrapper
    
    // Clear URL hash without causing a page reload
    window.history.pushState(null, null, window.location.pathname);
  };
  
  // Check URL hash for direct project links on component mount and hash changes
  useEffect(() => {
    // Function to handle hash changes and direct links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('project=')) {
        const projectId = parseInt(hash.split('=')[1]);
        if (!isNaN(projectId)) {
          const project = items.find(item => item.id === projectId);
          if (project) {
            openPopup(project);
          }
        }
      }
    };
    
    // Check hash on initial load
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <h1 className="project-title">Projects</h1>
      <div className="carousel-wrapper">
        <Swiper
          modules={[Mousewheel]}
          mousewheel
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={false}
          grabCursor={true}
          breakpoints={{
            1294: {
              slidesPerView: 2.3,
            },
            1920: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((proj) => (
            <SwiperSlide key={proj.id}>
              <div
                className="card"
                style={{ backgroundImage: `url(${proj.img})` }}
                onClick={() => openPopup(proj)}
              >
                <div className="overlay">
                  <span className="category">{proj.tech}</span>
                  <h3>{proj.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}
    </>
  );
};

export default ProjectCarousel;