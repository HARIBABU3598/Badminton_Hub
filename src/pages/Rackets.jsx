import React, { useState } from 'react';
import teni from '../assets/yonex/10i.png'
import T7i from '../assets/yonex/27i.png'
import light71 from '../assets/yonex/71light.png'
import d88 from '../assets/yonex/88d.png'
import s88 from '../assets/yonex/88s.png'
import lcw from '../assets/yonex/lcw.png'
import muscle from '../assets/yonex/musclepower.png'
import nanoray from '../assets/yonex/nanoray.png'
import smash from '../assets/yonex/smash.png'
import voltric from '../assets/yonex/voltric.png'

import k5 from '../assets/lining/5k.png'
import airforce from '../assets/lining/airforce.png'
import g3500 from '../assets/lining/g3500.png'
import g3800 from '../assets/lining/g3800.png'
import ignite from '../assets/lining/ignite.png'
import max10 from '../assets/lining/max10.png'
import turbo from '../assets/lining/turbo.png'
import wind from '../assets/lining/wind.png'
import x5 from '../assets/lining/x5.png'
import z8 from '../assets/lining/z8.png'

import accurate from '../assets/apacs/accurate.png'
import counter from '../assets/apacs/counter.png'
import dark from '../assets/apacs/dark.png'
import feather from '../assets/apacs/feather.png'
import finapi from '../assets/apacs/finapi.png'
import hitter from '../assets/apacs/hitter.png'
import nanofusion from '../assets/apacs/nanofusion.png'
import rage from '../assets/apacs/rage.png'
import x_tech from '../assets/apacs/x_tech.png'
import zigler from '../assets/apacs/zigler.png'

const racketImages = {
  'Yonex Astrox Smash (AXSM)': smash,
  'Yonex Astrox 27i': T7i,
  'Yonex Arcsaber Light 10i': teni,
  'Yonex Muscle Power 29': muscle,
  'Yonex Voltric Series': voltric,
  'Yonex Astrox 88D Pro': d88,
  'Yonex Astrox 88S Pro': s88,
  'Yonex Duora 77 LCW': lcw,
  'Yonex Arcsaber 71 Light': light71,
  'Yonex Nanoray 72 Light': nanoray,

  'Li-Ning G-Force 3500 Superlite': g3500,
  'LI-NING Turbo 99 Blue, Black Unstrung Badminton Racquet ': turbo,
  'Li-Ning Ignite Series Carbon Fibre Superlite Speed Racket wuth Full Cover': ignite,
  'Li-Ning G-Force 3800 Superlite': g3800,
  'Li-Ning G-Force 5K Superlite': k5,
  'Li-Ning AirForce G3': airforce,
  'Li-Ning Wind Lite II': wind,
  'Li-Ning G-Force X5': x5,
  'Li-Ning G-Force Superlite Max 10': max10,
  'LI-NING Combat Z8 Black, Gold, Red Strung Badminton Racquet': z8,

  'Apacs Z-Ziggler': zigler,
  'Apacs Finapi 232': finapi,
  'Apacs Dark Night Series': dark,
  'Apacs Counter Attack': counter,
  'Apacs Accurate 77': accurate,
  'Apacs Nano Fusion Speed 722': nanofusion,
  'Apacs Hard Hitter Pro': hitter,
  'Apacs Rage 7 Speed': rage,
  'Apacs Feather Weight 55': feather,
  'Apacs X-Tech Power': x_tech,
};

const rackets = {
  Yonex: [
    {
      name: 'Yonex Astrox Smash (AXSM)',
      rating: 4.2,
      weight: '73g',
      tension: '28 lbs',
      balance: 'Head-heavy',
      frame: 'H.M. Graphite + Tungsten',
      grip: 'G4'
    },
    {
      name: 'Yonex Astrox 27i',
      rating: 4.0,
      weight: '78g',
      tension: '30 lbs',
      balance: 'Head-heavy',
      frame: 'Graphite',
      grip: 'G4'
    },
    {
      name: 'Yonex Arcsaber Light 10i',
      rating: 3.9,
      weight: '~78g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Graphite',
      grip: 'G4'
    },
    {
      name: 'Yonex Muscle Power 29',
      rating: 4.1,
      weight: '~85g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Aluminium/Graphite',
      grip: 'G4'
    },
    {
      name: 'Yonex Voltric Series',
      rating: 4.3,
      weight: '~83g',
      tension: '30 lbs',
      balance: 'Head-heavy',
      frame: 'Graphite + Tungsten',
      grip: 'G4'
    },
    {
      name: 'Yonex Astrox 88D Pro',
      rating: 4.4,
      weight: '83–88g',
      tension: '28–30 lbs',
      balance: 'Head-heavy',
      frame: 'HM Graphite + Tungsten',
      grip: 'G4'
    },
    {
      name: 'Yonex Astrox 88S Pro',
      rating: 4.3,
      weight: '83–88g',
      tension: '28–30 lbs',
      balance: 'Even-balance',
      frame: 'HM Graphite + Tungsten',
      grip: 'G4'
    },
    {
      name: 'Yonex Duora 77 LCW',
      rating: 4.1,
      weight: '88g',
      tension: '28 lbs',
      balance: 'Even-balance',
      frame: 'Graphite + Nanometric DR',
      grip: 'G4'
    },
    {
      name: 'Yonex Arcsaber 71 Light',
      rating: 3.8,
      weight: '~78g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Graphite',
      grip: 'G4'
    },
    {
      name: 'Yonex Nanoray 72 Light',
      rating: 3.9,
      weight: '77g',
      tension: '30 lbs',
      balance: 'Head-light',
      frame: 'Graphite',
      grip: 'G4'
    }
  ],
  'Li-Ning': [
    {
      name: 'Li-Ning G-Force 3500 Superlite',
      rating: 4.2,
      weight: '84–87g',
      tension: '28–30 lbs',
      balance: 'Head-heavy',
      frame: 'Carbon Fiber',
      grip: 'S2'
    },
    {
      name: 'LI-NING Turbo 99 Blue, Black Unstrung Badminton Racquet ',
      rating: 4.1,
      weight: '~85g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Carbon Fiber',
      grip: 'S2'
    },
    {
      name: 'Li-Ning Ignite Series Carbon Fibre Superlite Speed Racket wuth Full Cover',
      rating: 4.0,
      weight: '~83g',
      tension: '~30 lbs',
      balance: 'Even-balance',
      frame: 'Carbon Graphite',
      grip: 'S2'
    },
    {
      name: 'Li-Ning G-Force 3800 Superlite',
      rating: 4.2,
      weight: '84–87g',
      tension: '28–30 lbs',
      balance: 'Head-heavy',
      frame: 'Carbon Fiber',
      grip: 'S2'
    },
    {
      name: 'Li-Ning G-Force 5K Superlite',
      rating: 4.1,
      weight: '~78g',
      tension: '30 lbs',
      balance: 'Head-heavy',
      frame: 'Carbon Fiber',
      grip: 'S2'
    },
    {
      name: 'Li-Ning AirForce G3',
      rating: 4.0,
      weight: '83g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Carbon Fiber',
      grip: 'S2'
    },
    {
      name: 'Li-Ning Wind Lite II',
      rating: 3.9,
      weight: '~77g',
      tension: '30 lbs',
      balance: 'Head-light',
      frame: 'Carbon Graphite',
      grip: 'S2'
    },
    {
      name: 'Li-Ning G-Force X5',
      rating: 4.0,
      weight: '~82g',
      tension: '30 lbs',
      balance: 'Head-heavy',
      frame: 'Carbon Fiber',
      grip: 'S2'
    },
    {
      name: 'Li-Ning G-Force Superlite Max 10',
      rating: 4.1,
      weight: '~77g',
      tension: '30 lbs',
      balance: 'Even/Head-heavy',
      frame: 'Carbon Fiber',
      grip: 'S2'
    },
    {
      name: 'LI-NING Combat Z8 Black, Gold, Red Strung Badminton Racquet',
      rating: 4.1,
      weight: '~86g',
      tension: '30 lbs',
      balance: 'Head-heavy',
      frame: 'Carbon Graphite',
      grip: 'S2'
    }
  ],
  Apacs: [
    {
      name: 'Apacs Z-Ziggler',
      rating: 4.0,
      weight: '85g',
      tension: '35 lbs',
      balance: 'Head-heavy',
      frame: 'Hi Modulus Graphite',
      grip: 'G4'
    },
    {
      name: 'Apacs Finapi 232',
      rating: 3.9,
      weight: '85–87g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Graphite',
      grip: 'G4'
    },
    {
      name: 'Apacs Dark Night Series',
      rating: 4.0,
      weight: '~83g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Hi Modulus Graphite',
      grip: 'G4'
    },
    {
      name: 'Apacs Counter Attack',
      rating: 3.8,
      weight: '85g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Graphite',
      grip: 'G4'
    },
    {
      name: 'Apacs Accurate 77',
      rating: 4.0,
      weight: '~84g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Graphite',
      grip: 'G4'
    },
    {
      name: 'Apacs Nano Fusion Speed 722',
      rating: 3.9,
      weight: '~78g',
      tension: '30 lbs',
      balance: 'Head-light',
      frame: 'Graphite + Nano Fusion',
      grip: 'G4'
    },
    {
      name: 'Apacs Hard Hitter Pro',
      rating: 4.2,
      weight: '~87g',
      tension: '35 lbs',
      balance: 'Head-heavy',
      frame: 'Graphite',
      grip: 'G4'
    },
    {
      name: 'Apacs Rage 7 Speed',
      rating: 3.9,
      weight: '~82g',
      tension: '30 lbs',
      balance: 'Even-balance',
      frame: 'Hi Modulus Graphite',
      grip: 'G4'
    },
    {
      name: 'Apacs Feather Weight 55',
      rating: 4.3,
      weight: '55g',
      tension: '30 lbs',
      balance: 'Head-heavy',
      frame: 'Hi Modulus Graphite',
      grip: 'G5'
    },
    {
      name: 'Apacs X-Tech Power',
      rating: 4.1,
      weight: '~84g',
      tension: '30 lbs',
      balance: 'Head-heavy',
      frame: 'Graphite',
      grip: 'G4'
    }
  ]
};

const racketBuyLinks = {
  'Yonex Astrox Smash (AXSM)': 'https://www.amazon.in/s?k=Yonex+Astrox+Smash',
  'Yonex Astrox 27i': 'https://www.flipkart.com/search?q=yonex+astrox+27i',
  'Yonex Arcsaber Light 10i': 'https://www.amazon.in/s?k=Yonex+Arcsaber+Light+10i',
  'Yonex Muscle Power 29': 'https://www.flipkart.com/search?q=Yonex+Muscle+Power+29',
  'Yonex Voltric Series': 'https://www.amazon.in/s?k=Yonex+Voltric+Series',
  'Yonex Astrox 88D Pro': 'https://www.flipkart.com/search?q=Yonex+Astrox+88D+Pro',
  'Yonex Astrox 88S Pro': 'https://www.amazon.in/s?k=Yonex+Astrox+88S+Pro',
  'Yonex Duora 77 LCW': 'https://www.flipkart.com/search?q=Yonex+Duora+77+LCW',
  'Yonex Arcsaber 71 Light': 'https://www.amazon.in/s?k=Yonex+Arcsaber+71+Light',
  'Yonex Nanoray 72 Light': 'https://www.flipkart.com/search?q=Yonex+Nanoray+72+Light',

  'Li-Ning G-Force 3500 Superlite': 'https://www.amazon.in/s?k=Li-Ning+G-Force+3500+Superlite',
  'LI-NING Turbo 99 Blue, Black Unstrung Badminton Racquet ': 'https://www.amazon.in/s?k=Li-Ning+Turbo+99',
  'Li-Ning Ignite Series Carbon Fibre Superlite Speed Racket wuth Full Cover': 'https://www.flipkart.com/search?q=Li-Ning+Ignite+Series',
  'Li-Ning G-Force 3800 Superlite': 'https://www.amazon.in/s?k=Li-Ning+G-Force+3800+Superlite',
  'Li-Ning G-Force 5K Superlite': 'https://www.flipkart.com/search?q=Li-Ning+G-Force+5K+Superlite',
  'Li-Ning AirForce G3': 'https://www.amazon.in/s?k=Li-Ning+AirForce+G3',
  'Li-Ning Wind Lite II': 'https://www.flipkart.com/search?q=Li-Ning+Wind+Lite+II',
  'Li-Ning G-Force X5': 'https://www.amazon.in/s?k=Li-Ning+G-Force+X5',
  'Li-Ning G-Force Superlite Max 10': 'https://www.flipkart.com/search?q=Li-Ning+G-Force+Superlite+Max+10',
  'LI-NING Combat Z8 Black, Gold, Red Strung Badminton Racquet': 'https://www.amazon.in/s?k=Li-Ning+Combat+Z8',

  'Apacs Z-Ziggler': 'https://www.amazon.in/s?k=Apacs+Ziggler',
  'Apacs Finapi 232': 'https://www.flipkart.com/search?q=Apacs+Finapi+232',
  'Apacs Dark Night Series': 'https://www.amazon.in/s?k=Apacs+Dark+Night+Series',
  'Apacs Counter Attack': 'https://www.flipkart.com/search?q=Apacs+Counter+Attack',
  'Apacs Accurate 77': 'https://www.amazon.in/s?k=Apacs+Accurate+77',
  'Apacs Nano Fusion Speed 722': 'https://www.flipkart.com/search?q=Apacs+Nano+Fusion+Speed+722',
  'Apacs Hard Hitter Pro': 'https://www.amazon.in/s?k=Apacs+Hard+Hitter+Pro',
  'Apacs Rage 7 Speed': 'https://www.flipkart.com/search?q=Apacs+Rage+7+Speed',
  'Apacs Feather Weight 55': 'https://www.amazon.in/s?k=Apacs+Feather+Weight+55',
  'Apacs X-Tech Power': 'https://www.flipkart.com/search?q=Apacs+X-Tech+Power'
};

const Rackets = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedBalances, setSelectedBalances] = useState([]);
  const [filteredRackets, setFilteredRackets] = useState(rackets);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleSearch = () => {
    const result = {};
    Object.entries(rackets).forEach(([brand, models]) => {
      if (selectedBrands.length === 0 || selectedBrands.includes(brand)) {
        const filteredModels = models.filter((r) => selectedBalances.length === 0 || selectedBalances.includes(r.balance));
        if (filteredModels.length > 0) result[brand] = filteredModels;
      }
    });
    setFilteredRackets(result);
  };

  const handleCheckboxChange = (type, value) => {
    const setter = type === 'brand' ? setSelectedBrands : setSelectedBalances;
    setter((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return '★'.repeat(fullStars) + (halfStar ? '⯪' : '') + '☆'.repeat(emptyStars);
  };

  return (
    <div className="p-6 text-white bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">🏸 Badminton Rackets Overview</h1>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-10 bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
        <h2 className="text-2xl font-semibold text-center text-cyan-300 mb-6">🎯 Filter Rackets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">Brand</h3>
            <div className="flex flex-wrap gap-4">
              {['Yonex', 'Li-Ning', 'Apacs'].map((brand) => (
                <label key={brand} className="flex items-center gap-2 bg-cyan-800/20 px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-700/30">
                  <input
                    type="checkbox"
                    className="accent-cyan-400"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleCheckboxChange('brand', brand)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">Balance Type</h3>
            <div className="flex flex-wrap gap-4">
              {['Head-heavy', 'Even-balance', 'Head-light'].map((balance) => (
                <label key={balance} className="flex items-center gap-2 bg-cyan-800/20 px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan-700/30">
                  <input
                    type="checkbox"
                    className="accent-cyan-400"
                    checked={selectedBalances.includes(balance)}
                    onChange={() => handleCheckboxChange('balance', balance)}
                  />
                  <span>{balance}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center pt-6">
          <button
            onClick={handleSearch}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full text-white font-semibold tracking-wide transition duration-200 shadow-md hover:shadow-lg"
          >
            🔍 Apply Filters
          </button>
        </div>
      </div>


      {/* Modal */}
      {showModal && modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-gradient-to-tr from-slate-800 to-gray-900 text-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative border border-cyan-400">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-white hover:text-red-400 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-extrabold mb-6 text-cyan-400 tracking-wide border-b border-cyan-500 pb-2">
              {modalData.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400">⭐</span>
                <span><strong>Rating:</strong> {modalData.rating}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-400">⚖️</span>
                <span><strong>Weight:</strong> {modalData.weight}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400">🎯</span>
                <span><strong>Tension:</strong> {modalData.tension}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">📏</span>
                <span><strong>Balance:</strong> {modalData.balance}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400">🔧</span>
                <span><strong>Frame:</strong> {modalData.frame}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400">🖐️</span>
                <span><strong>Grip:</strong> {modalData.grip}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Racket Display */}
      {Object.entries(filteredRackets).map(([brand, models]) => (
        <div key={brand} className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-cyan-300">{brand}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((racket, idx) => (
              <div
                key={idx}
                className="bg-white/10 hover:bg-white/20 border border-white/20 p-5 rounded-md shadow backdrop-blur-sm text-xs transition"
              >
                <div className="w-full aspect-square rounded mb-3 flex items-center justify-center bg-white">
                  <img
                    src={racketImages[racket.name] || ''}
                    alt={racket.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1 break-words line-clamp-2">
                  {racket.name}
                </h3>
                <span className="items-left text-yellow-400 text-sm">{renderStars(racket.rating)}</span><br />
                <div className="mt-2 flex flex-row flex-wrap justify-center items-center gap-2">
  <button
    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded text-xs font-medium w-fit mx-auto sm:mx-0"
    onClick={() => { setModalData(racket); setShowModal(true); }}
  >
    View Features
  </button>
  {racketBuyLinks[racket.name] && (
    <a
      href={racketBuyLinks[racket.name]}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-xs font-medium w-fit mx-auto sm:mx-0"
    >
      Buy Now
    </a>
  )}
</div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rackets;