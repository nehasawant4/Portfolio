import "./contact.scss"
import {motion} from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState({
        phone: false,
        email: false
    });
    
    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied({...copied, [type]: true});
                setTimeout(() => setCopied(prev => ({...prev, [type]: false})), 2000);
            })
            .catch(err => console.error('Could not copy text: ', err));
    };

    return(
        <div className="contact">
            <div className="wrapper">
                <div className="textContainer">
                    <h1>Let's Connect!</h1>
                    <div className="item">
                        <h2>Mail</h2>
                        <motion.span 
                            onClick={() => copyToClipboard("nehasawant4@gmail.com", "email")} 
                            style={{ cursor: "pointer", position: "relative", display: "inline-block" }}
                            whileHover={{ scale: 1.2 }} 
                            whileTap={{ scale: 0.98 }}
                        >
                            nehasawant4@gmail.com
                            {copied.email && 
                                <span 
                                    style={{
                                        position: "absolute",
                                        background: "#333",
                                        color: "white",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        fontSize: "16px",
                                        left: "100%",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        marginLeft: "10px",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    Copied to clipboard!
                                </span>
                            }
                        </motion.span>
                    </div>
                    <div className="item">
                        <h2>Phone</h2>
                        <motion.span 
                            onClick={() => copyToClipboard("+1 (408) 640-4982", "phone")} 
                            style={{ cursor: "pointer", position: "relative", display: "inline-block" }}
                            whileHover={{ scale: 1.2 }} 
                            whileTap={{ scale: 0.98 }}
                        >
                            +1 (408) 640-4982
                            {copied.phone && 
                                <span 
                                    style={{
                                        position: "absolute",
                                        background: "#333",
                                        color: "white",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        fontSize: "16px",
                                        left: "100%",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        marginLeft: "10px",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    Copied to clipboard!
                                </span>
                            }
                        </motion.span>
                    </div>
                    <div className="item">
                        <h2>Address</h2>
                        <span>Santa Clara, CA</span>
                    </div>
                </div>
                <div className="social">
                    <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }} href="mailto:nehasawant4@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                <g transform="scale(5.12,5.12)">
                                    <path d="M12,23.403v-0.013v-13.001l-0.12,-0.089h-0.01l-2.73,-2.02c-1.67,-1.24 -4.05,-1.18 -5.53,0.28c-0.99,0.98 -1.61,2.34 -1.61,3.85v3.602zM38,23.39v0.013l10,-7.391v-3.602c0,-1.49 -0.6,-2.85 -1.58,-3.83c-1.46,-1.457 -3.765,-1.628 -5.424,-0.403l-2.876,2.123l-0.12,0.089zM14,24.868l10.406,7.692c0.353,0.261 0.836,0.261 1.189,0l10.405,-7.692v-13.001l-11,8.133l-11,-8.133zM38,25.889v15.111c0,0.552 0.448,1 1,1h6.5c1.381,0 2.5,-1.119 2.5,-2.5v-21.003zM12,25.889l-10,-7.392v21.003c0,1.381 1.119,2.5 2.5,2.5h6.5c0.552,0 1,-0.448 1,-1z"></path>
                                </g>
                            </g>
                        </svg>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/nehasawant4/">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                <g transform="scale(5.12,5.12)">
                                    <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                                </g>
                            </g>
                        </svg>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }} href="https://github.com/nehasawant4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                <g transform="scale(8.53333,8.53333)">
                                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                                </g>
                            </g>
                        </svg>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
