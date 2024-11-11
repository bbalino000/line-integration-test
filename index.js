const LIFF_ID_TEST1 = "2006459403-LdVrj6jz";
const LIFF_ID_TEST2 = "2006459403-zRa7323K";

$(document).ready(function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // let code = urlParams.get('code');
  // let state = urlParams.get('state');
  // let liffClientId = urlParams.get('liffClientId');
  // let liffRedirectUri = urlParams.get('liffRedirectUri');

  // liff.init({ liffId: LIFF_ID_TEST2 }, successCallback, errorCallback);
  $('#btn-line-proconnect').click(() => {
    lineLoginTest1();
  });

  $('#btn-line-samepage').click(() => {
    lineLogin();
  });
});

function successCallback() {
  alert('LIFF successCallback');
  if(liff.isLoggedIn()) {
    lineGetProfile();
  }
}

function errorCallback() {
  alert('LIFF errorCallback');
  console.log('Error Callback...');
}

function lineLogin() {
  alert(liff.isInClient());
  liff.init({ liffId: LIFF_ID_TEST2 }, successCallback, errorCallback);
  liff.login();
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

function lineLoginTest1() {
  liff.init({ liffId: LIFF_ID_TEST1 }, successCallback, errorCallback);
  liff.login();
}