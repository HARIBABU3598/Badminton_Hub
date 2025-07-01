import React from 'react';
import bg from '../assets/bg.jpg';
import ShuttleBeez from '../assets/icon/ShuttleBeez.png'; // Replace with actual
import SaiAcademy from '../assets/icon/SaiAcademy.png';
import SomuAcademy from '../assets/icon/SomuAcademy.png';
import SmashIt from '../assets/icon/SmashIt.png';

const maduraiCourts = [
  {
    name: "Shuttlebeez Badminton Academy",
    number: "87782 19973",
    location: "Utchaparamedu, Madurai",
    image: ShuttleBeez,
    mapLink:"https://maps.app.goo.gl/dwdKJYeeytYe6o8Z6"
  },
  {
    name: "Sai Academy of Badminton",
    number: "99943 57070",
    location: "Narimedu, Madurai",
    image: SaiAcademy,
    mapLink:"https://maps.app.goo.gl/GdXoCsh9GR5xL7mq8"
  },
  {
    name: "Somu Badminton Academy",
    number: "096269 62733",
    location: "Gomathipuram, Madurai",
    image: SomuAcademy,
    mapLink:"https://maps.app.goo.gl/LBCMwJhK4yRcivQT9"
  },
  {
    name: "Smash It Badminton Academy",
    number: "93423 98226",
    location: "Namachivaya Nagar, Madurai",
    image: SmashIt,
    mapLink:"https://maps.app.goo.gl/jNQhrXxSVYcuAHY57"
  }
];

const Madurai = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full backdrop-blur-2xl bg-black/40">
        <div className="text-center py-6">
          <h1 className="text-white text-4xl font-bold bg-white/20 inline-block px-6 py-2 rounded-full shadow-md">
            🏸 Madurai District Clubs
          </h1>
        </div>
        <div className="h-[2px] w-[80%] mx-auto bg-white mb-6"></div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 pb-10">
          {maduraiCourts.map((court, index) => (
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

export default Madurai;
