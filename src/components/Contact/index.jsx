import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c8lpc3x',
      'template_jbrg16u',
      form.current, 
      'e7SDOY9USqBt0XvZI')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          swal({
            position: 'center',
            icon: 'success',
            title: 'El Correo ha sido enviado con exito!',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
          console.log(error.text);
          swal({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo no se pudo enviar por favor verifique sus datos!',
           
          })
          
      });
  };
  return (
    <>
      <section id="contactanos" className="contact cont-map">
        <div className="container">
          <div className="col">
            <div
              className="col-lg-7 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form  id="contact-form" ref={form} onSubmit={sendEmail} style={{ textAlign: "center"}}>
                <div className="section-head">
                  <h6>Estamos para servirte</h6>
                  <h4 className="playfont">¡Contáctanos!</h4>
                </div>

                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="user_name"
                      placeholder="Nombre"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="user_email"
                      placeholder="Mail"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-curve btn-color">
                    <span>Enviar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        
      </section>
    </>
  );
};

export default Contact;
