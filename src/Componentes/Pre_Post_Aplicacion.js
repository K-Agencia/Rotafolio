import React from 'react';
import { PPAplicacion } from '../Constantes/Images';
import '../css/Pre_Post_Aplicacion.css';

const Pre_Post_Aplicacion = () => {

   let swidth = window.screen.width;

   return (
      <div>

         <div className={swidth > 700 ? "Pre_Post_Aplicacion" : "noVisible"}>
            <img src={PPAplicacion.PPAplication} alt="" className='img_ppa' />
         </div>

         <div className={swidth < 700 ? "divMovil" : "noVisible"}>
            <img src={PPAplicacion.LogoColgate} alt="" className='logoColgate_ppa' />
            <div>
               <img src={PPAplicacion.PPAplicationImagen} alt="" className='imgBoton' />
               <h2><b>Protocolo aplicación Barniz de Flúor Colgate Duraphat</b></h2>
            </div>
            <img src={PPAplicacion.PPAplicationM} alt="" />
         </div>
      </div>
   );
};

export default Pre_Post_Aplicacion;