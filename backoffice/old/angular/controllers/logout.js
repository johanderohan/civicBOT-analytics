angular.module('civicBot')
  .controller('LogoutCtrl', function($location, $auth, toastr) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toastr.info('Te has desconectado!');
        $location.path('file:///home/ximo/Escritorio/civicBot-analytics/backoffice/login.html');
      });
  });
