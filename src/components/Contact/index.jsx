import React from "react";
import appData from "../../data/app.json";

const Contact = () => {
  return (
    <>
      <section id="contactanos" className="contact cont-map">
        <div className="container">
          <div className="col">
            <div
              className="col-lg-7 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form  id="contact-form" method="post" action="contact.php" style={{ textAlign: "center"}}>
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
                      name="name"
                      placeholder="Nombre"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
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
