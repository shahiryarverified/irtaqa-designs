import "./service.css";
// import { useParams } from "react-router-dom";

const Service = () => {
  //   const projectId = useParams();

  return (
    <div className="service-container">
      <div className="project-title-container">
        <h1>Service Name</h1>
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
      <div className="marquee">
        <p>
          This Architecture Service is Under Maintenance. This Architecture
          Service is Under Maintenance. This Architecture Service is Under
          Maintenance.
        </p>
      </div>
    </div>
  );
};

export default Service;
