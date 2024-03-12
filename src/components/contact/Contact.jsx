import "./contact.scss"

const Contact = () => {
    return(
        <div className="contact">
            <div className="wrapper">
                <div className="textContainer">
                    <h1>Let's Connect!</h1>
                    <div className="item">
                        <h2>Mail</h2>
                        <span>nsawant@scu.edu</span>
                    </div>
                    <div className="item">
                        <h2>Phone</h2>
                        <span>+1 (408) 640-4982</span>
                    </div>
                    <div className="item">
                        <h2>Address</h2>
                        <span>Santa Clara, CA</span>
                    </div>
                </div>
                <div className="social">
                    <a href="mailto:nsawant@scu.edu"><img src="/gmail.png" alt=""/></a>
                    <a href="https://www.linkedin.com/in/nehasawant4/"><img src="/linkedin.png" alt=""/></a>
                    <a href="https://github.com/nehasawant4"><img src="/github.png" alt=""/></a>
                    <a href="https://www.instagram.com/art_birt/"><img src="/instagram.png" alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
