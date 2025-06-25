import React from 'react';
import bg from '../assets/bg.jpg';
import about from '../assets/about.png';

const About = () => {
  return (
    <div
      className="bg-cover bg-center h-screen bg-black flex items-center justify-end"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="h-screen w-[100%] p-4 rounded text-left text-white border overflow-y-auto"
        style={{ backdropFilter: 'blur(50px)' }}
      >
        <center>
          <h1 className="text-4xl font-bold mt-[20px] mb-[10px] bg-white/10 w-[18%] py-1 rounded">
            About Us
          </h1>
        </center>

        <marquee className="bg-white/20 rounded py-2 text-xl">
          Welcome to Badminton Hub, your ultimate destination for everything related to badminton!
        </marquee>

        <div className="bg-white/10 rounded w-[100%]  mt-4 p-4 border">
          <p className="text-[20px] mb-[3%]">
            <center><p className="text-2xl bg-red-500 w-[130px] rounded mb-[2%]">Our mission</p></center>To provide free and comprehensive knowledge about badminton to enthusiasts,
            players, and beginners alike. Whether you're picking up a racket for the first time or
            refining your game to compete at the highest level, we’re here to support your journey.
          </p>
          <center><img src={about} className="h-[300px] w-[700px] mb-[5%] rounded border"/></center>

          <p className=" text-[20px] ">
            <center><p className='text-2xl bg-red-500 w-[160px] rounded'>What We Offer</p></center><br />
            At Badminton Hub, you’ll find a wide range of resources including:
          </p>

          <table className="table-auto w-full text-[20px] mb-8">
  <tbody>
  
    <tr>
      <td className="align-top pr-4">✅ <strong>Rules & Regulations</strong></td>
      <td>: Understand the official rules of badminton, from scoring systems to match conduct.</td>
    </tr>
    <tr>
      <td className="align-top pr-4">✅ <strong>Fitness & Training</strong></td>
      <td>: Learn about badminton-specific exercises and routines to boost agility, strength, and endurance.</td>
    </tr>
    <tr>
      <td className="align-top pr-4">✅ <strong>Equipment Guides</strong></td>
      <td>: Get expert insights on rackets, shuttlecocks, shoes, and other essential gear.</td>
    </tr>
    <tr>
      <td className="align-top pr-4">✅ <strong>Court Locator</strong></td>
      <td>: Find and explore badminton courts available near you.</td>
    </tr>
    <tr>
      <td className="align-top pr-4">✅ <strong>Master the Shots</strong></td>
      <td>: Discover tutorials and breakdowns of all types of shots — smashes, drops, clears, and more.</td>
    </tr>
  </tbody>
</table>



          <p className="mb-4 text-[20px]">
            <center><p className="text-2xl bg-red-500 w-[160px] rounded  ">Engage & Play</p></center><br />
            We don’t stop at just information — we make badminton fun and interactive too!
          </p>

          <ul className="list-disc pl-5 mb-4 text-[20px]">
            <li>🏆 <strong>Live Scoreboard</strong>: Track scores from tournaments and matches in real-time.</li>
            <li>📅 <strong>League Scheduler</strong>: Organize or join local leagues and friendly matches with ease.</li>
            <li>🎯 <strong>Fun Quizzes</strong>: Test your knowledge of the game and challenge your friends!</li>
          </ul>

          <p className="mb-4 text-[20px]">
            We believe badminton should be accessible and enjoyable for everyone. That’s why all our
            content and features are completely free — because knowledge shared is passion multiplied.
          </p>

          <center><p className="mb-4 text-[20px] bg-black/70 w-[65%] text-center rounded">
            Thank you for being a part of our community. Let’s grow the game together!
            <br />
            <strong>Badminton Hub — Badminton Begins Here.</strong>
          </p></center>
        </div>
      </div>
    </div>
  );
};

export default About;
