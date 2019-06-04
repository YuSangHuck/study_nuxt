export default ({ $axios, redirect, isDev }) => {
  $axios.onRequest((config) => {
    // $axios.setHeader('host', 'this is test-request', 'common')
    console.log(`plugin axios. onRequest\n ${JSON.stringify(config, null, 2)}`);
  });

  $axios.onResponse((res) => {
  });

  $axios.onError((err, redirect) => {
    const code = parseInt(err.response && err.response.status, 10);
    if (code === 400) {
      redirect('/400');
    }
  });

  $axios.onRequestError((err, redirect) => {
    const code = parseInt(err.response && err.response.status, 10);
    if (code === 400) {
      redirect('/400');
    }
  });

  $axios.onResponseError((err, redirect) => {
    const code = parseInt(err.response && err.response.status, 10);
    if (code === 400) {
      redirect('/400');
    }
  });
};



// requestSuccess(res) {
//   // console.log(`res.data: ${JSON.stringify(res.data)}`);
//   // console.log(`res.status: ${JSON.stringify(res.status)}`);
//   // console.log(`res.statusText: ${JSON.stringify(res.statusText)}`);
//   // console.log(`res.headers: ${JSON.stringify(res.headers)}`);
//   // console.log(`res.config: ${JSON.stringify(res.config)}`);
// }
// requestFail(err) {
//   if (err.response) {
//     // console.log(`err.response.data: ${JSON.stringify(err.response.data)}`);
//     // console.log(`err.response.status: ${JSON.stringify(err.response.status)}`);
//     // console.log(`err.response.headers: ${JSON.stringify(err.response.headers)}`);
//   } else if (err.request) {
//     // console.log(`err.request: ${JSON.stringify(err.request)}`);
//   } else {
//     // console.log(`err.message: ${JSON.stringify(err.message)}`);
//   }
//   // console.log(`err.config: ${JSON.stringify(err.config)}`);
// }