class HomeController {
  API = 'https://levelup-json.herokuapp.com/developers';
  developers = [];

  constructor($http) {
    this.http = $http;
    this.getDevs();
    this.initForm();
  }
  initForm() {
    this.form = {
      id: null,
      name: '',
      repo: '',
      projects: [{
        name: ''
      }]
    }
  }

  getDevs() {
    this.http.get(this.API).then(res => this.developers = res.data);
  }

  selectedDev(developer) {
    this.form = developer;
  }

  saveDev(form) {
    if(form) {
      this.createDev(form);
    }
    if (form.id) {
      this.updateDev(form)
    }
    console.log('SAVED');
  }

  createDev(form) {
    this.http.post(this.API, form).then(res => this.getDevs())
      .then(this.resetForm())
  }

  updateDev(form) {
    this.http.patch(`${this.API}/${form.id}`, form)
      .then(res => this.getDevs())
      .then(this.resetForm());
  }

  deleteDev(id) {
    this.http.delete(`${this.API}/${id}`)
      .then(res => this.getDevs());
  }

  resetForm() {
    this.form = [{
      id: null,
      name: '',
      repo: ''
    }]
  }
}

HomeController.$inject = ['$http'];
export default HomeController;
