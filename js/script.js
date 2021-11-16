function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var nome = (profile.getName());
    var img = (profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    document.getElementById("nome").innerHTML=nome
    document.getElementById("foto").src = img
    document.getElementById("foto").style.display="block"
    document.getElementById("out").style.display="block"
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      document.getElementById("nome").innerHTML=""
      document.getElementById("foto").style.display="none"
      document.getElementById("out").style.display="none"
    });
  }