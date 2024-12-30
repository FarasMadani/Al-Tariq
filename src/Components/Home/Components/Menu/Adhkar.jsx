import React from "react";
import NavBar from "../Navbar";

const adhkarData = [
  {
    id: 1,
    category: "الذكر بعد الفراغ من الوضوء",
    array: [
     {
				id: 1,
				text: "(أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ..).",
			},
			{
				id: 2,
				text: "(اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ)",
			},
			{
				"id": 3,
				"text": "(سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ).",
			}
      // More entries can be added here...
    ],
  },
  {
    id: 2,
    category: "أذكار النوم",
    array: [
      {
        id: 1,
        text: "((يَجْمَعُ كَفَّيْهِ ثُمَّ يَنْفُثُ فِيهِمَا...",
      },
      {
        id: 2,
        text: "﴿اللَّهُ لاَ إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
      },
      // More entries can be added here...
    ],
  },
  // More categories can be added here...
];

const AdhkarItem = ({ text }) => (
  <div className="mb-4 text-lg leading-relaxed">
    <p>{text}</p>
  </div>
);

const AdhkarCategory = ({ category, array }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-2xl text-teal-600 font-semibold mb-4">{category}</h2>
    <div className="pl-4">
      {array.map((item) => (
        <AdhkarItem key={item.id} text={item.text} />
      ))}
    </div>
  </div>
);

const AdhkarApp = () => (
  <>
  <NavBar />
  <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
    <h1 className="text-3xl text-gray-500 font-extrabold mb-8">Adhkar App</h1>
    <div className="w-full max-w-4xl">
      {adhkarData.map((category) => (
        <AdhkarCategory key={category.id} {...category} />
      ))}
    </div>
  </div>
  </>
);

export default AdhkarApp;