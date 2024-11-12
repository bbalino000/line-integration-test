const LIFF_ID_TEST2 = "2006459403-zRa7323K";

// document.addEventListener("DOMContentLoaded", function() {
//   let isInClient = liff.isInClient();
//   $('#isInCLient').text(isInClient);

//   liff.init({ liffId: LIFF_ID_TEST2 }, successCallback, errorCallback);

//   // if (!liff.isLoggedIn()) {
//   //   lineGetProfile();
//   // }
    
  // $('#btn-line-samepage').click(() => {
  //   liff.login();
  // });
// });

document.addEventListener("DOMContentLoaded", function() {
  liff.init({ liffId: LIFF_ID_TEST2 })
    .then(() => {
      if (!liff.isLoggedIn() && !liff.isInClient()) {
        liff.login();
      } else {
        lineGetProfile();
      }
    })
    .catch(err => console.error('LIFF Initialization Failed', err));
  
  $('#btn-line-samepage').click(() => {
    liff.login();
  });

  function lineLogout() {
    liff.logout();
    window.location.reload();
  }
  
  function lineGetProfile() {
    liff.getProfile().then(profile => {
      let isLoggedIn = liff.isLoggedIn();
      let accessToken = liff.getAccessToken();
      let userId = profile.userId;
      let isInClient = liff.isInClient();
      
      $('#isInCLient').text(isInClient);
      $("#isLoggedIn").text(isLoggedIn);
      $("#accessToken").val(accessToken);
      $("#lineUid").val(userId);
    }).catch((err) => {
      console.log('lineGetProfile Error', err);
    });
  }
});

// function successCallback() {
//   console.log('LIFF successCallback');
//   if(liff.isLoggedIn()) {
//     lineGetProfile();
//   }
// }

// function errorCallback() {
//   console.log('LIFF errorCallback');
//   console.log('Error Callback...');
// }

