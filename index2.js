// Authorable
const LIFF_ID_TEST2 = "2006459403-zRa7323K";

document.addEventListener("DOMContentLoaded", function() {
  liff.init({ liffId: LIFF_ID_TEST2 })
    .then(() => {
        lineGetProfile();
    })
    .catch(err => console.error('LIFF Initialization Failed', err));
  
  $('#btn-line-login').click(() => {
    liff.login();
  });

  $('#btn-line-logout').click(() => {
    lineLogout();
  });

  function lineLogout() {
    liff.logout();
    location.reload();
  }
  
  function lineGetProfile() {
    liff.getProfile().then(profile => {
      let isLoggedIn = liff.isLoggedIn();
      let accessToken = liff.getAccessToken();
      let userId = profile.userId;
      let isInClient = liff.isInClient();
      let email = liff.getDecodedIDToken().email;
      
      $('#isInCLient').text(isInClient);
      $("#isLoggedIn").text(isLoggedIn);
      $("#accessToken").val(accessToken);
      $("#lineUid").val(userId);
      $("#email").val(email);
    }).catch((err) => {
      console.log('lineGetProfile Error', err);
    });
  }
});

