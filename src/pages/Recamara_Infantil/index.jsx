/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import CloseIcon from '@material-ui/icons/Close';


// images
import img1 from '../../../public/assets/img/portfolio/project1/interior_recamara.jpeg';
import img2 from '../../../public/assets/img/portfolio/project1/interior_recamara2.jpeg';
import img3 from '../../../public/assets/img/portfolio/project1/interior_recamara3.jpeg';
import img4 from '../../../public/assets/img/portfolio/project1/interior_recamara4.jpeg';
import img5 from '../../../public/assets/img/portfolio/project1/interior_recamara7.jpeg';
import img6 from '../../../public/assets/img/portfolio/project1/Interior-recamara-infantil.jpeg';



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
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
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
