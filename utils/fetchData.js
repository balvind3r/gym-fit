const http = require('https');
const axios = require('axios');
const apiKey = process.env.REACT_APP_RAPID_API_KEY;


export const exerciseOptions = {	
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {
    limit: '0',
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};


export const getBodyPartList = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
}

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });



// export const exerciseOptions = {
//   method: "GET",
//   hostname: "exercisedb.p.rapidapi.com",
//   port: null,
//   path: "/exercises/bodyPartList",
//   headers: {
//     "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//     "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//   },
// };
// method: 'GET',
// headers: {
//   'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
// },

//   export const youtubeOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//     },
//   };

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
