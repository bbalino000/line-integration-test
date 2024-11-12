const LIFF_ID_TEST1 = "2006459403-LdVrj6jz";
const LIFF_ID_TEST2 = "2006459403-zRa7323K";

document.addEventListener("DOMContentLoaded", function() {
  // liff.init({ liffId: LIFF_ID_TEST2 }, successCallback, errorCallback);
  // lineGetProfile();
  
  $('#btn-line-samepage').click(() => {
    // liff.login();
    liff
    .init({
      liffId: "123456-abcedfg", // Use own liffId
    })
    .then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        lineGetProfile();
      }
    })
    .catch((err) => {
      // Error happens during initialization
      console.log(err.code, err.message);
    });
  });
});

function successCallback() {
  console.log('LIFF successCallback');
  if(liff.isLoggedIn()) {
    lineGetProfile();
  }
}

function errorCallback() {
  console.log('LIFF errorCallback');
  console.log('Error Callback...');
}

function lineLogout() {
  liff.logout();
  location.reload();
}

function lineGetProfile() {
  liff.getProfile().then(profile => {
    let isLoggedIn = liff.isLoggedIn();
    let accessToken = liff.getAccessToken();
    let userId = profile.userId;

    $("#isLoggedIn").text(isLoggedIn);
    $("#accessToken").val(accessToken);
    $("#lineUid").val(userId);
  }).catch((err) => {
    console.log('Profile', err);
  });
}