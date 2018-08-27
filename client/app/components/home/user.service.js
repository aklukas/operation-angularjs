import angular from 'angular';

class UserService {
  url = 'https://levelup-json.now.sh/developers';
  constructor($http) {
    this.http = $http;
  }

  getUsers() {
    return this.http.get(this.url).then(res => res.data);
  }

  createUser(user) {
    console.log('CREATE DEV');
    return this.http.post(this.url, user).then(res => res);
  }

  updateUser(user) {
    console.log('UPDATE DEV');
  return this.http.patch(`${this.url}/${user.id}`, user)
  }

  deleteUser(id) {
    console.log('DELETE DEV');
    return this.http.delete(`${this.url}/${id}`)
  }
}

UserService.$inject = ['$http'];
let userService = angular.module('userService', [])
  .service('userService', UserService).name;

export default userService;
