/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import CloseIcon from '@material-ui/icons/Close';



// images

import img1 from '../../../public/assets/img/portfolio/project1/bodega1.jpeg';
import img2 from '../../../public/assets/img/portfolio/project1/portada.jpeg';
import img3 from '../../../public/assets/img/portfolio/project1/bodega2.jpeg';







const ProjectDetails = () => {

 
    let data = [
  
      {
        id: 1,
        imgSrc: img1,
      },
      {
        id: 2,
        imgSrc: img2,
      },
      {
        id: 3,
        imgSrc: img3,
      },
  
    ]
  
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
    }
  
  
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
          
          <div className={model? "model open" : "model"}>
              <img src={tempimgSrc}  />
             <CloseIcon onClick={() => setModel(false)} />
          </div>
          
          <div className="gallery">
            {data.map((item, index) =>{
              return (
                <div className="pics" key={index}>
                  <img src={item.imgSrc.src} style={{width: '100%'}} onClick={() => getImg(item.imgSrc.src)} />
                </div>
              )
            })}
            </div>
           
        </div>
      </section>

        
    </MainLayout>
    
  );
 
};

export default ProjectDetails;
