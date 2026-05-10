import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Prayersconnect</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Architecting and maintaining a schema-first GraphQL API using Nest.js
              for a platform serving 200k+ monthly users. Integrating
              Apollo/GraphQL with Next.js for real-time prayer time updates and
              complex global state management. Specialized in building performant,
              type-safe APIs and scalable backend architectures. (01/2024 –
              Present)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee JavaScript Developer</h4>
                <h5>Servic Engine ltd.</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Collaborated with a 9-member team on multiple high-stakes projects.
              Responsible for converting complex design concepts into interactive
              web banners using HTML5, CSS3, jQuery, and JavaScript, specifically
              optimized for Google Ads, Campaign Manager 360, and Adform.
              (06/2022 – 12/2022)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
