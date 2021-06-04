import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}/>
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6d8955f4011d58f70ad8b50472d588246d4d15aef44e70db5c85fa56d183060ea2361a2b95f0ea8f9af4f1417ffb9c6fb3'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://w.namu.la/s/16c62517c7af89b2adc7f4841488292f142d5d99d8d9ea762b5fe757aa0cffd4fc71380f8a6179109683ec9419a66b77e999f949b18282e3e59e2b829fe7d70fd0b2c178b9b1a19d562314b6f1ed93d19191377f59779c030f313b19db0c4cf16fed978af48bebbd68ef509ed4efe14a'
  },
  {
    name: 'Bibimbap',
    image: 'https://w.namu.la/s/02034f3c4f5bce39b228d9e368727f091d03ac093efec038a1bcd28f1d046eacfc918db2fad3d98bdda454966eb61895654f4ec4e68a4c35de5a337759028cc4694cd0e9a9634128248c7a9b0df2c3df7fb5fe04c5882617df80cc5e522e4b1dd83036349eed15f9d00bb78a74d2582b'
  },
  {
    name: 'Doncasu',
    image: 'https://w.namu.la/s/2ceb50c734a752d27b67846e19a4d0c82830692576da4e9028cc58278b6b23ab07a3df76d84a15f8017dfca3940fa9a79479c00c3e7334139c49b03efdc438951fc6f372f96241ea08fe1ffe9255d4c464945b39dc5e42d81065ded11c1d3de8758cdd20f93a2d61d7501473fe20bfab'
  },
  {
    name: 'Kimbap',
    image: 'https://ww.namu.la/s/33c9509d550db600898d73c2583211037408f060b2d4f8748fb39d34c8159a2e9867520fb83885e0dbe2ab3884f98c12ed4d9892ea11f54802ab291517037881d2707eda9d66c9c828a4050fdca20a1d8f87912c5297dbe5a64510f850e83ca2'
  },
];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}/>;
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
