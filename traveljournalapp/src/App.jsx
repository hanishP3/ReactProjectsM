import React from 'react';
import Header from './components/Header';
import Entry from './components/Entry';
import Footer from './components/Footer';

function App() {
  const data = [
    {
      imagesrc: 'https://lasmaplone.com/wp-content/uploads/2023/06/TRAVEL-PHOTO-VERTICAL.jpg',
      name: 'Japan',
      title: 'Mount Fuji',
      date: '11 jan 2025 - 11 feb 2025',
      matter: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
      map:'https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'
      
    },
    {
      imagesrc: 'https://thumbs.dreamstime.com/b/beautiful-aerial-view-rio-de-janeiro-christ-redeemer-corcovado-mountain-brazil-latin-america-vertical-selective-focus-139762166.jpg',
      name: 'Brazil',
      title: 'Brazil',
      date: '11 March 2025 - 11 May 2025',
      matter: 'Brazil, officially the Federative Republic of Brazil, is the largest and easternmost country in South America and Latin America. It is the world\'s fifth-largest country by area and the seventh largest by population, with over 203 million people.',
      map:'https://www.google.com/maps/place/Christ+the+Redeemer/@-22.951911,-43.2130621,17z/data=!3m1!4b1!4m6!3m5!1s0x997fd5984aa13f:0x9dc984d7019502de!8m2!3d-22.951916!4d-43.2104872!16zL20vMDNneXR3?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'

    },
    {
      imagesrc: 'https://thumbs.dreamstime.com/b/vertical-scenic-view-lake-brienz-iseltwald-village-switzerland-vertical-scenic-view-lake-brienz-iseltwald-village-262636430.jpg',
      name: 'Lake Brienz',
      title: 'Lake Brienz',
      date: '11 July 2025 - 11 Aug 2025',
      matter: 'Lake Brienz is a lake just north of the Alps, in the canton of Bern in Switzerland. It has a length of about 14 kilometres, a width of 2.8 kilometres and a maximum depth of 260 metres. Its area is 29.8 square kilometres; the surface is 564 metres above sea level.',
      map:'https://www.google.com/maps/place/Lake+Brienz/@46.7267426,7.8850754,12z/data=!4m10!1m2!2m1!1sLake+Brien!3m6!1s0x478fbd607bfad2fb:0x19281ec105cab0c7!8m2!3d46.7267426!4d7.9674729!15sCgpMYWtlIEJyaWVuWgwiCmxha2UgYnJpZW6SAQRsYWtl4AEA!16zL20vMDJoX255?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'
    },
  ];

  return (
    <>
      <Header />
      {/* Dynamically generate Entry components */}
      {data.map((entry, index) => (
        <Entry
          key={index}
          imagesrc={entry.imagesrc}
          name={entry.name}
          title={entry.title}
          date={entry.date}
          matter={entry.matter}
          map = {entry.map}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
