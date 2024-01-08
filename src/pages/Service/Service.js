import "./service.css";
import { useParams } from "react-router-dom";

const Service = () => {
  const projectId = useParams();

  return (
    <div className="service-container">
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default Service;
