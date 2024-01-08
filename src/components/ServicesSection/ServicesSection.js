import "./style.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import service1 from "../../assets/serviceImages/service1.jpg";
import service2 from "../../assets/serviceImages/service2.jpg";
import service3 from "../../assets/serviceImages/service3.jpg";
import service4 from "../../assets/serviceImages/service4.jpg";
import service5 from "../../assets/serviceImages/service5.jpg";
import service6 from "../../assets/serviceImages/service6.jpg";
import service7 from "../../assets/serviceImages/service7.jpg";
import service8 from "../../assets/serviceImages/service8.jpg";

const ActionAreaCard = ({ serviceName, context, img, serviceId }) => {
  return (
    <Card className="ActionAreaCard">
      <Link to={`/service/${serviceId}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent className="CardContent">
            <Typography gutterBottom variant="h5" component="div">
              {serviceName}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {context}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
const ServicesSection = () => {
  // Placeholder icons. Replace with actual icons or images.
  const icons = ["🏢", "🌆", "💧", "🌍", "🍃", "📐", "📊", "📏"];

  const services = [
    {
      title: "Building / Structures",
      icon: icons[0],
      description:
        "Design, construction, and maintenance of various structures, including residential, commercial, and industrial buildings.",
      image: service1,
    },
    {
      title: "Urban Development",
      icon: icons[1],
      description:
        "Planning and development of urban areas, including infrastructure, housing, and public spaces.",
      image: service2,
    },
    {
      title: "Water Supply & Sanitation",
      icon: icons[2],
      description:
        "The provision of clean water and sanitation facilities to communities, addressing public health and environmental concerns.",
      image: service3,
    },
    {
      title: "Geo Technical",
      icon: icons[3],
      description:
        "The study of soil and rock mechanics to support engineering projects such as foundations, slopes, and retaining structures.",
      image: service4,
    },
    {
      title: "Environmental",
      icon: icons[4],
      description:
        "Projects related to environmental conservation, pollution control, and sustainable resource management.",
      image: service5,
    },
    {
      title: "Planning & Management",
      icon: icons[5],
      description:
        "Strategic planning, project management, and coordination of various engineering initiatives.",
      image: service6,
    },
    {
      title: "Quantity & Estimation",
      icon: icons[6],
      description:
        "Around accurate estimation of materials, costs, and resources for construction and engineering projects.",
      image: service7,
    },
    {
      title: "Surveying",
      icon: icons[7],
      description:
        "Land surveying, mapping, and spatial data collection for construction and development projects.",
      image: service8,
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ActionAreaCard
            key={index}
            serviceName={service.title}
            context={service.description}
            img={service.image}
            serviceId={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
