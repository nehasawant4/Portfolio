import "./projectcarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { items } from "../projects/project-constants";
import { useState } from "react";

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
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  </div>
);

const ImageGallery = ({ images }) => (
  <div className="popup-gallery">
    {images.map((img, index) => (
      <div key={index} className="gallery-item">
        <img src={img} alt={`Project image ${index + 1}`} />
      </div>
    ))}
  </div>
);

const StatsDisplay = ({ stats }) => (
  <div className="popup-stats">
    <h3>Project Statistics</h3>
    <ul>
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectPopup = ({ project, onClose }) => {
  // Determine if the project has custom content
  const hasCustomContent = project.customContent !== undefined;
  
  return (
    <div className="project-popup-overlay">
      <div className="project-popup">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="popup-header">
          <h2>{project.title}</h2>
          <p className="popup-tech">{project.tech}</p>
        </div>
        
        <div className="popup-content">
          {/* Default content display */}
          {!hasCustomContent && (
            <>
              <div className="popup-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="popup-description">
                {project.desc.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </>
          )}
          
          {/* Custom content display */}
          {hasCustomContent && (
            <div className="custom-content">
              {/* If the project has a video */}
              {project.customContent.type === 'video' && (
                <VideoContent videoUrl={project.customContent.videoUrl} />
              )}
              
              {/* If the project has a YouTube video */}
              {project.customContent.type === 'youtube' && (
                <YouTubeVideo videoId={project.customContent.videoId} />
              )}
              
              <div className="popup-description">
                {project.desc.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {/* If the project has additional images */}
              {project.customContent.additionalImages && (
                <ImageGallery images={project.customContent.additionalImages} />
              )}
              
              {/* If the project has stats */}
              {project.customContent.stats && (
                <StatsDisplay stats={project.customContent.stats} />
              )}
            </div>
          )}
        </div>
        
        <div className="popup-footer">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    document.body.classList.add('popup-open'); // Add class to hide navbar wrapper
  };

  const closePopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    document.body.classList.remove('popup-open'); // Remove class to show navbar wrapper
  };

  return (
    <>
      <h1 className="project-title">Projects</h1>
      <div className="carousel-wrapper">
        <Swiper
          modules={[Mousewheel]}
          mousewheel
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={30}
          centeredSlides={false}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
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
                <button className="plus" onClick={(e) => {
                  e.stopPropagation(); // Prevent opening popup
                  window.open(proj.link, "_blank");
                }}>+</button>
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