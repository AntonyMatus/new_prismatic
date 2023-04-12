/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import CloseIcon from '@material-ui/icons/Close';

// images

import img1 from '../../../public/assets/img/portfolio/project1/Interior-bar.jpeg';
import img2 from '../../../public/assets/img/portfolio/project1/portada_bar2.jpeg';
import img3 from '../../../public/assets/img/portfolio/project1/bar1.jpeg';
import img4 from '../../../public/assets/img/portfolio/project1/bar2.jpeg';
import img5 from '../../../public/assets/img/portfolio/project1/bar3.jpeg';
import img6 from '../../../public/assets/img/portfolio/project1/bar4.jpeg';
import img7 from '../../../public/assets/img/portfolio/project1/bar5.jpeg';
import img8 from '../../../public/assets/img/portfolio/project1/bar6.jpeg';
import img9 from '../../../public/assets/img/portfolio/project1/bar7.jpeg';
import img10 from '../../../public/assets/img/portfolio/project1/bar8.jpeg';
import img11 from '../../../public/assets/img/portfolio/project1/bar9.jpeg';
import img12 from '../../../public/assets/img/portfolio/project1/bar10.jpeg';
import img13 from '../../../public/assets/img/portfolio/project1/bar11.jpeg';
import img14 from '../../../public/assets/img/portfolio/project1/bar12.jpeg';

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
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
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
        <div className={model? "model open" : "model"}>
              <img src={tempimgSrc}  alt="img-2"/>
             <CloseIcon onClick={() => setModel(false)} />
          </div>
        
        <div className="gallery">
            {data.map((item, index) =>{
              return (
                <div className="pics" key={index}>
                  <img src={item.imgSrc.src} style={{width: '100%'}} onClick={() => getImg(item.imgSrc.src)} alt="img"/>
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
