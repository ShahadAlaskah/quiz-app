import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container p-4 w-50 mt-3">
        <section class="mb-4 w-100">
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly.<br></br> Our team will come back to you within a matter of
            hours to help you.
          </p>

          <div class="row">
            <div class="col">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label class="">Your name</label>
                      <input type="text" name="name" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label class="">Your email</label>
                      <input type="text" name="email" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <label class="">Subject</label>
                      <input type="text" name="subject" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <label>Your message</label>
                      <textarea
                        type="text"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>

              <button class="btn btn-outline-dark w-100 my-2">Send</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
