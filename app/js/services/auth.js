app.factory('AuthService', ['User','$q', '$rootScope', function(User, $q,
      $rootScope) {
    function login(email, password) {
      return User
        .login({email: email, password: password})
        .$promise
    }

    function logout() {
      return User
       .logout()
       .$promise
    }

    function register(email, password) {
      return User
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);
