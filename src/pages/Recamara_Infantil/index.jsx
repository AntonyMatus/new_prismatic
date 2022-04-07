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
        title="Récamara Infantil"
        fullPath={[
          { id: 1, name: "Prismatic", url: "/" },
          { id: 2, name: "Proyectos", url: "/#portafolio" },
          { id: 3, name: "Detalles de proyecto", url: "/Recamara_Infantil" },
        ]}
        image="/assets/img/portfolio/project1/infantil-portada.jpg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="col">
            
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/interior_recamara.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/interior_recamara2.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/interior_recamara3.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/interior_recamara4.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/interior_recamara7.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/Interior-recamara-infantil.jpeg" />
            </a>
            
          </div>
        </div>
      </section>

    </MainLayout>
  );
};

export default ProjectDetails;
