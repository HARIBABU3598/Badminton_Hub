import React from 'react';
import group2020 from '../assets/group20200.jpg';
import group2021 from '../assets/group2021.jpg';
import group2022 from '../assets/group2022.jpg';
import group2023 from '../assets/group2023.jpg';
import group2025 from '../assets/group2025.jpg';
import banner from '../assets/banner.jpg';
import Bala from '../assets/players/Bala.png'
import Kathir from '../assets/players/Kathir.png'
import Munish from '../assets/players/Munish.png'
import Sabarish from '../assets/players/Sabarish.png'
import Santhosh from '../assets/players/Santhosh.png'
import Vasi from '../assets/players/vasi.png'
import Harikrishnan from '../assets/players/HK.png'
import Haribabu from '../assets/players/Hari.png'
import Saravanan from '../assets/players/Sarav.jpg'
import Yudhan from '../assets/players/Yudhan.png'
import Arul from '../assets/players/Arul.png'



const players = [
  "Arul Gnanaprakasam", "Saravana Kumar", "Balamurugan", "Yudhan Prakash",
  "Haribabu", "Vasishtan", "Harikrishnan", "Santhosh", "Sriram",
  "Balamurugan", "Sabarish", "Munish", "Kathirvelan"
];

const leaders = [
  { role: "Honorary President", name: "G. Thirumavalavan M.E." },
  { role: "Head of Club", name: "Balamurugan D.M.E." },
  { role: "Vice Presidents", name: "S.R. Manikandan M.B.A. & J. Ananthkumar D.E.C.E." },
  { role: "General Secretary", name: "Gopinathan D.C.Tech" },
  { role: "Treasurer", name: "Arul Gnanaprakasam M.B.A." }
];

const groupPhotos = [
  { year: 2020, image: group2020 },
  { year: 2021, image: group2021 },
  { year: 2022, image: group2022 },
  { year: 2023, image: group2023 },
  { year: 2024, image: group2023 },
  { year: 2025, image: group2025 }
];

const player = [
  { name: "Arul Gnanaprakasam", qualification: "M.B.A" ,image:Arul},
    { name: "Balamurugan", qualification: "M.A.B.ED",image:Vasi },
  { name: "Saravana Kumar", qualification: "B.Sc" ,image:Saravanan},
  { name: "Yudhan Prakash", qualification: "BA. LLB",image:Yudhan },
  { name: "Haribabu", qualification: "B.Tech IT",image: Haribabu},
  { name: "Vasishtan", qualification: "Vis.Com" ,image:Vasi},
  { name: "Harikrishnan", qualification: "B.E E.C.E" ,image:Harikrishnan},
  { name: "Santhosh", qualification: "B.E CIVIL" ,image:Santhosh},
  { name: "Sriram", qualification: "XII" ,image:Vasi},
  { name: "Balamurugan", qualification: "XII" ,image:Bala},
  { name: "Sabarish", qualification: "X" ,image:Sabarish},
  { name: "Munish", qualification: "IX",image: Munish},
  { name: "Kathirvelan", qualification: "VIII" ,image:Kathir}
];


const ClubPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
          Ayya Abdul Kalam Badminton Club
        </h1>
        <img src={banner} alt="Club Banner" className="w-full h-auto rounded-xl shadow-md mb-6 border" />
        <p className="text-center text-lg text-gray-600 mb-6">
          Sethiyathope, North Senninatham, Cuddalore - 608702 | Established 2020
        </p>

        <section className="bg-white p-6 rounded-xl shadow-md mb-6 border">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">About Us</h2>
          <p>
            Founded in 2020 by a group of passionate street players and their families, our club is committed to developing badminton at the grassroots level.
            Every Pongal, we conduct our signature Street Tournament, promoting sportsmanship with high-quality prizes like rackets and kit bags.
          </p>
        </section>

       <section className="bg-white p-6 rounded-xl shadow-md mb-6 border">
  <h2 className="text-2xl font-semibold text-green-700 mb-4">Leadership</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {leaders.map((leader, idx) => (
      <div key={idx} className="bg-gray-50 p-4 rounded-md flex items-center shadow">
        <img
          src={`https://via.placeholder.com/64?text=Photo`}
          alt={leader.name}
          className="w-16 h-16 rounded-full object-cover border border-gray-300 mr-4"
        />
        <div>
          <p className="font-semibold text-green-800">{leader.role}</p>
          <p className="text-gray-700">{leader.name}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        <section className="bg-white p-6 rounded-xl shadow-md mb-6 border">
  <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Players</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {player.map((playerr, index) => (
      <div key={index} className="bg-green-50 p-3 rounded-lg flex items-center shadow-md">
        <img
          src={playerr.image}
          alt={playerr.name}
          className="w-15 h-15 object-cover border border-gray-300 mr-3"
        />
        <div>
          <p className="text-green-900 font-medium">{playerr.name}</p>
          <p className="text-sm text-gray-700">Qualification: {playerr.qualification}</p>
        </div>
      </div>
    ))}
  </div>
</section>




        <section className="bg-white p-6 rounded-xl shadow-md border mb-7">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Tournaments & Events</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Annual Pongal Street Tournament (Junior & Senior Category)</li>
            <li>Winners awarded with rackets, kit bags, and medals</li>
            <li>Participated in several open-level district & state tournaments</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md mb-6 border">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Annual Group Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupPhotos.map(({ year, image }) => (
              <div key={year}>
                <img
  src={image}
  alt={`Group Photo ${year}`}
  className="w-full h-64 object-cover rounded-lg shadow-md"
/>

                <p className="text-center mt-2 font-medium text-gray-700">{year}</p>
              </div>
            ))}
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default ClubPage;
