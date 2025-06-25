import React from "react";
import bg from '../assets/bg.jpg';
import lee from '../assets/contact.jpg'
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen bg-black flex items-center justify-end"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="shadow-lg rounded-2xl h-[100%] w-[96%] mr-[2%] border text-white p-4"
        style={{ backdropFilter: "blur(50px)" }}
      >
        {/* Scrollable content wrapper */}
        <div className="h-full  pr-4">
          <center>
            {/* <h1 className="text-4xl font-bold mb-[10px] bg-white/10 w-[18%] py-1 rounded">
              Contact Us
            </h1> */}
          </center>

          

          <div className="bg-white/80 text-black rounded w-[101%] flex items-start justify-between p-4 mb-6">
            {/* Text Section */}
            <div className="w-[100%] space-y-4">
              <center><h1 className="text-3xl bg-black/50 w-[200px] rounded text-white">Contact Us</h1></center>
              <p className="text-[20px] mb-6 leading-relaxed font-serif">
            We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello,
            feel free to reach out. Our team is passionate about building a vibrant badminton community, and
            your feedback helps us grow stronger every day.
          </p>
              <center>
              <table className="border rounded" style={{backdropFilter:"blur(10px)"}}>
                <tr>
                <td className="p-4 text-xl"><strong>Instructor Name :</strong></td>
                <td className="p-4 text-xl">HARIBABU</td>
                </tr>
                <tr>
                <td className="p-4 text-xl"><strong>Email :</strong></td>
                <td className="p-4 text-xl"><a
                  href="mailto:harirom5444v@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  harirom5444v@gmail.com
                </a></td>
                </tr>
                <tr>
                <td className="p-4 text-xl"><strong>Instagram :</strong></td>
                <td className="p-4 text-xl"><a
                  href="https://www.instagram.com/_birdie_blaster_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  @_birdie_blaster_
                </a></td>
                </tr>
              </table>
              </center>
              <button className="bg-black/80 text-white px-4 border py-2 rounded font-serif mt-[5%]"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdHE_eQ69cFdD7q181iel_0RfdRZe_LZqZ4DZus7ngrAtMrxQ/viewform?usp=header">FeedBack</a></button>
            </div>

            {/* Image Section */}
            <img src={lee} className="w-[300px] h-[480px] object-cover rounded" alt="Instructor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
