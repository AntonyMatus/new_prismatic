import React from "react";
import Link from "next/link";

const ProjectIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>Introducción</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus aspernatur quod eaque, doloremque quia facilis ducimus, eos
                qui deleniti reiciendis tempora saepe minima rerum repudiandae quae temporibus corrupti voluptatum ut.
              </p>
            </div>
          </div>

          
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Fecha</h6>
              <p>6 August 2022</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categoría</h6>
              <p>
                <Link href="#">Bodega </Link>,
                
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
