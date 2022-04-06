/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";


const ProjectDetails = () => {

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Búnker para 4 Personas"
        fullPath={[
          { id: 1, name: "Prismatic", url: "/" },
          { id: 2, name: "Proyectos", url: "/#portafolio" },
          { id: 3, name: "Detalles de proyecto", url: "/Bunker" },
        ]}
        image="/assets/img/portfolio/project1/portada-bunker.jpeg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="col">
            
            <a id="popup" href="#" className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/portada-bunker.jpeg" />
            </a>
            <a id="popup" href="#" className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bunker1.jpeg" />
            </a>
            <a id="popup" href="#" className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bunker2.jpeg" />
            </a>
            <a id="popup" href="#" className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bunker3.jpeg" />
            </a>
            <a id="popup" href="#" className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bunker4.jpeg" />
            </a>
            <a id="popup" href="#" className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bunker5.jpeg" />
            </a>
            
           
          </div>
        </div>
      </section>

    </MainLayout>
  );
};

export default ProjectDetails;
