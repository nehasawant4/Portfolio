import { useEffect } from "react";
import { items } from "./project-constants";

/**
 * Component that redirects to a specific project popup
 * This can be used as a route in your application to handle direct links
 * @param {Object} props - Component props
 * @param {string|number} props.projectId - ID of the project to open
 */
const ProjectPopupLink = ({ projectId }) => {
  useEffect(() => {
    // Convert projectId to number if it's a string
    const id = typeof projectId === "string" ? parseInt(projectId) : projectId;
    
    // Redirect to the main page with the project hash
    window.location.href = `/#project=${id}`;
  }, [projectId]);

  // This component doesn't render anything visible
  return null;
};

export default ProjectPopupLink;
