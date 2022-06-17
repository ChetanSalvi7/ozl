import React,{useState} from 'react'
import ReactTooltip from "react-tooltip";

const BackToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500){
          setVisible(true)
        } 
        else if (scrolled <= 500){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
      
  return (
    <>
     <button id="back-to-top" data-tip data-for="BTT" type="button" onClick={scrollToTop}  className="btn btn-primary text-light rounded-circle btn-lg back-to-top" style={{display: visible ? 'inline' : 'none'}} >
        <i  className="fas fa-angle-up"></i>
    </button>
    <ReactTooltip id="BTT" place="left" effect="solid">Back To Top</ReactTooltip>
    </>
  )
}

export default BackToTop;