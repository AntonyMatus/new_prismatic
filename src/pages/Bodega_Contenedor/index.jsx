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
        title="Bodega con Contenedor"
        fullPath={[
          { id: 1, name: "Prismatic", url: "/" },
          { id: 2, name: "Proyectos", url: "/#portafolio" },
          { id: 3, name: "Detalles de proyecto", url: "/Bodega_Contenedor" },
        ]}
        image="/assets/img/portfolio/project1/bodega-portada.jpg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="col">
            
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bodega1.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/portada.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bodega2.jpeg" />
            </a>
          </div>
        </div>
      </section>

    </MainLayout>
  );
};

export default ProjectDetails;
