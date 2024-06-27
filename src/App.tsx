import React from 'react';
import DataTable from './components/DataTable/DataTable';
import './App.css'; 

const sampleData = [
  { name: 'Tiger Nixon', position: 'System Architect', salary: '$320,800' },
  { name: 'Garrett Winters', position: 'Accountant', salary: '$170,750' },
  { name: 'Ashton Cox', position: 'Junior Technical Author', salary: '$86,000' },
  { name: 'Cedric Kelly', position: 'Senior Javascript Developer', salary: '$433,060' },
  { name: 'Airi Satou', position: 'Accountant', salary: '$162,700' },
  { name: 'Brielle Williamson', position: 'Integration Specialist', salary: '$372,000' },
  { name: 'Herrod Chandler', position: 'Sales Assistant', salary: '$137,500' },
  { name: 'Rhona Davidson', position: 'Integration Specialist', salary: '$327,900' },
  { name: 'Colleen Hurst', position: 'Javascript Developer', salary: '$205,500' },
  { name: 'Sonya Frost', position: 'Software Engineer', salary: '$103,600' },
  { name: 'Jena Gaines', position: 'Office Manager', salary: '$90,560' },
  { name: 'Quinn Flynn', position: 'Support Lead', salary: '$342,000' },
  { name: 'Charde Marshall', position: 'Regional Director', salary: '$470,600' },
  { name: 'Haley Kennedy', position: 'Senior Marketing Designer', salary: '$313,500' },
  { name: 'Tatyana Fitzpatrick', position: 'Regional Director', salary: '$385,750' },
  { name: 'Michael Silva', position: 'Marketing Designer', salary: '$198,500' },
  { name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', salary: '$725,000' },
  { name: 'Gloria Little', position: 'Systems Administrator', salary: '$237,500' },
  { name: 'Bradley Greer', position: 'Software Engineer', salary: '$132,000' },
  { name: 'Dai Rios', position: 'Personnel Lead', salary: '$217,500' },
  { name: 'Jenette Caldwell', position: 'Development Lead', salary: '$345,000' },
  { name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', salary: '$675,000' },
  { name: 'Caesar Vance', position: 'Pre-Sales Support', salary: '$106,450' },
  { name: 'Doris Wilder', position: 'Sales Assistant', salary: '$85,600' }
];

const App = () => (
  <div>
    <h1 className="heading">DataTable</h1>
    <DataTable data={sampleData} />
  </div>
);

export default App;


// import React from 'react';
// import './App.css';
// import OtRegn from './Form';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <OtRegn />
//     </div>
//   );
// };

// export default App;