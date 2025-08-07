import { HiArrowLongRight } from "react-icons/hi2";

export const Contact = () => {

  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputsData = Object.fromEntries(formData.entries());
    // console.log(formInputsData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input className="form-control" type="text" required autoComplete="on" placeholder="Your Name" />
          <input className="form-control" type="email" required autoComplete="on" placeholder="Your Email" />
          <textarea className="form-control" rows="10" required autoComplete="on" placeholder="Your Message"></textarea>
          <button className="btn btn-darken" type="submit">Send Message <HiArrowLongRight /></button>
        </form>
      </div>
        
      
    </section>
  )
}

export default Contact;