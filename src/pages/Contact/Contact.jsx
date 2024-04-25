import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import contractImg from "../../assets/contact.json";
import Lottie from "lottie-react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ql40avj",
        "template_uh95dw2",
        form.current,
        "gZOj8ng9VNhUIxCVE"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section className="bg-white my-16 section-container dark:bg-gray-900">
        <div className=" py-8 lg:py-16 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-500  ">
            Contact Us
          </h2>
          <p className="subtitle text-gray-500">
            Reach Out, Connect, and Let&apos;s Make Task Management Work for You
          </p>
          <div className="flex  flex-col-reverse md:flex-row items-center justify-between">
            {/* form */}
            <div className="flex-1 space-y-3">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  className="shadow-sm   border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2   "
                  placeholder="Your name"
                />
                <br />

                <input
                  type="email"
                  name="user_email"
                  className="shadow-sm  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-2 w-full  my-4  "
                  placeholder="Your Email Adress"
                  required
                />
                <br />

                <textarea
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900   rounded-lg shadow-sm border border-gray-700 focus:ring-primary-500 focus:border-primary-500"
                  placeholder=" Your Message..."
                />
                <input
                  type="submit"
                  value="Send your Message"
                  className="btn-style mt-4"
                />
              </form>
            </div>
            <div className="flex-1 mb-12">
              <Lottie className="w-3/4" animationData={contractImg} loop={false}></Lottie>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
