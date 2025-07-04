import React from 'react';
import bg from '../assets/bg.jpg';
import Dhrona from '../assets/icon/Dhrona.png';
import AYA from '../assets/icon/AYA.png';
import VelTam from '../assets/icon/VelTam.png';
import Balaji from '../assets/icon/Balaji.png';

const thanjavurCourts = [
  {
    name: "DHRONA'S ACADEMY",
    number: "95979 99979",
    location: "Evergreen Nagar, Thanjavur",
    image: Dhrona,
    mapLink: "https://maps.app.goo.gl/gZPAxxayjivgzL8WA"
  },
  {
    name: "A.Y.A Sports and Family Club",
    number: "95006 86829",
    location: "Aavin Milk Depot, Thanjavur",
    image: AYA,
    mapLink: "https://maps.app.goo.gl/pCiAmgpNza7qcnYK9" // example link
  },
  {
    name: "VelTam",
    number: "94865 79376",
    location: "Indira Nagar, Thanjavur",
    image: VelTam,
    mapLink: "https://maps.app.goo.gl/DLvcfXHccapghXDp7" // example link
  },
  {
    name: "Balaji Sports Academy",
    number: "73970 80403",
    location: "AVP Azhagammal Nagar, Thanjavur",
    image: Balaji,
    mapLink: "https://maps.app.goo.gl/DHWNnCf43Ztz3Xns8" // example link
  }
];

const Thanjavur = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full backdrop-blur-2xl bg-black/40">
        <div className="text-center py-6">
          <h1 className="text-white text-4xl font-bold bg-white/20 inline-block px-6 py-2 rounded-full shadow-md">
            🏸 Thanjavur District Clubs
          </h1>
        </div>
        <div className="h-[2px] w-[80%] mx-auto bg-white mb-6"></div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 pb-10">
          {thanjavurCourts.map((court, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-xl shadow-xl backdrop-blur-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={court.image}
                alt={court.name}
                className="w-full h-36 object-cover"
              />
              <div className="text-left p-5 text-gray-800">
                <h2 className="text-xl font-bold">{court.name}</h2>
                <h6 className="mt-1 text-sm">📍 {court.location}</h6>
                <p className="mt-1 text-sm">
  📞 {court.number} <br />
 <a
  href={court.mapLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-2 text-sm bg-cyan-600 text-white px-3 py-1.5 rounded-full hover:bg-cyan-700 transition duration-200 shadow"
>
  📍 View on Map
</a>
</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thanjavur;
