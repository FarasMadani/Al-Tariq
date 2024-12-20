import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuranApp() {
  const [surahs, setSurahs] = useState([]); // List of surahs
  const [ayahs, setAyahs] = useState([]); // Ayahs of a selected surah
  const [selectedSurah, setSelectedSurah] = useState(null); // Currently selected surah
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch the list of surahs
  useEffect(() => {
    axios
      .get('https://api.alquran.cloud/v1/surah')
      .then((response) => {
        setSurahs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching surahs:', error);
        setLoading(false);
      });
  }, []);

  // Fetch the ayahs of a surah when clicked
  const fetchAyahs = (surahNumber) => {
    setLoading(true); // Show loading indicator while fetching ayahs
    axios
      .get(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
      .then((response) => {
        setSelectedSurah(response.data.data); // Set selected surah details
        setAyahs(response.data.data.ayahs); // Set ayahs of the surah
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching ayahs:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Quran Explorer</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {!selectedSurah ? (
            <ul>
              {surahs.map((surah) => (
                <li
                  key={surah.number}
                  style={{ cursor: 'pointer', color: 'blue', marginBottom: '8px' }}
                  onClick={() => fetchAyahs(surah.number)} // Fetch ayahs when clicked
                >
                  {surah.number}. {surah.englishName} ({surah.englishNameTranslation})
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <button onClick={() => setSelectedSurah(null)}>Back to Surahs</button>
              <h2>
                {selectedSurah.englishName} ({selectedSurah.englishNameTranslation})
              </h2>
              <ul className='bg-black'>
                {ayahs.map((ayah) => (
                  <li key={ayah.numberInSurah}>
                    <strong>{ayah.numberInSurah}:</strong> {ayah.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuranApp;