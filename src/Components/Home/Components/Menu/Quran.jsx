import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../Components/Navbar';

function QuranApp() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readStatus, setReadStatus] = useState({});
  
  const textApi = 'http://api.alquran.cloud/v1/quran/quran-uthmani';
  const audioApi = 'http://api.alquran.cloud/v1/quran/ar.alafasy';

  useEffect(() => {
    setLoading(true);
    axios.get(textApi)
      .then(response => {
        const surahsData = response.data.data.surahs;
        setSurahs(surahsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching surahs:', error);
        setLoading(false);
      });
  }, []);

  const fetchSurahAyahs = (surahNumber) => {
    setLoading(true);
    Promise.all([
      axios.get(textApi),
      axios.get(audioApi),
    ])
      .then(([textResponse, audioResponse]) => {
        const surahText = textResponse.data.data.surahs.find(surah => surah.number === surahNumber);
        const surahAudio = audioResponse.data.data.surahs.find(surah => surah.number === surahNumber);
        const combinedAyahs = surahText.ayahs.map((ayah, index) => ({
          ...ayah,
          audio: surahAudio.ayahs[index].audio,
          page: Math.ceil((index + 1) / 5),
        }));
        setAyahs(combinedAyahs);
        setSelectedSurah(surahText);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching surah data:', error);
        setLoading(false);
      });
  };

  const playAudio = (audioUrl, ayahNumber) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  const handleCheckboxChange = (ayahNumber) => {
    setReadStatus(prevState => ({
      ...prevState,
      [ayahNumber]: !prevState[ayahNumber],
    }));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center bg-gray-100 py-8 font-kitab">
        <h1 className="text-4xl text-center text-gray-700 mb-8">Quran Explorer</h1>
        {loading ? (
          <p className="text-xl text-gray-500">Loading...</p>
        ) : (
          <div className="w-full max-w-4xl px-4">
            {!selectedSurah ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {surahs.map((surah) => (
                  <div
                    key={surah.number}
                    className="cursor-pointer bg-white rounded-lg shadow-lg p-6 text-center"
                    onClick={() => fetchSurahAyahs(surah.number)}
                  >
                    <h3 className="text-xl text-blue-600 font-semibold">{surah.number}. {surah.name}</h3>
                    <p className="text-sm text-gray-600">{surah.englishName}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative bg-white border rounded-lg shadow-xl p-6">
                <button
                  className="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-lg"
                  onClick={() => setSelectedSurah(null)}
                >
                  Back to Surahs
                </button>
                <h2 className="text-2xl text-center text-gray-700 mb-6">{selectedSurah.englishName}</h2>
                <div className="ayah-list space-y-4">
                  {ayahs.map((ayah) => (
                    <div key={ayah.numberInSurah} className="p-4 border-b border-gray-300 rounded-lg bg-gray-50">
                      <p className="text-right text-xl">{ayah.text}</p>
                      <p className="text-sm text-gray-500">Page: {ayah.page}</p>
                      <div className="flex items-center mt-2">
                        <button
                          className="bg-blue-500 text-white p-2 rounded-lg mr-4"
                          onClick={() => playAudio(ayah.audio, ayah.numberInSurah)}
                        >
                          Play
                        </button>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={readStatus[ayah.numberInSurah] || false}
                            onChange={() => handleCheckboxChange(ayah.numberInSurah)}
                            className="mr-2"
                          />
                          Mark as read
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default QuranApp;