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
        title="Bar Tematico"
        fullPath={[
          { id: 1, name: "Prismatic", url: "/" },
          { id: 2, name: "Proyectos", url: "/#portafolio" },
          { id: 3, name: "Detalles de proyecto", url: "/Bar_Tematico" },
        ]}
        image="/assets/img/portfolio/project1/portada-bar.jpg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="col">
            
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/Interior-bar.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/portada_bar2.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar1.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar2.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar3.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar4.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar5.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar6.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar7.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar8.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar9.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar10.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar11.jpeg" />
            </a>
            <a id="popup"  className="col-lg-6 col-xl-6 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/bar12.jpeg" />
            </a>
            
           
          </div>
        </div>
      </section>

    </MainLayout>
  );
};

export default ProjectDetails;
