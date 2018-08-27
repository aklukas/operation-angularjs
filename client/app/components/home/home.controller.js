class HomeController {
  developers = [];
  projects = [];
  constructor(userService) {
    this.userService = userService;
    this.getDevs();
    this.initForm();
  }

  getDevs() {
    this.userService.getUsers()
      .then(res => this.developers = res);
  }

  devsProjects(developer) {
    this.projects = developer.projects;
  }

  selectedDev(developer) {
    this.devsProjects(developer);
    this.form = Object.assign({}, developer);
  }

  saveDev(form) {
    if(form.id) {
      this.updateDev(form)
    } else {
      this.createDev(form);
    }
    console.log('SAVED');
  }

  createDev(dev) {
    console.log('Created',dev);
    this.userService.createUser(dev)
      .then(res => this.getDevs())
      .then(() => this.resetForm())
  }

  updateDev(dev) {
    console.log('developer to update', dev);
    this.userService.updateUser(dev)
      .then(res => this.getDevs())
      .then(() => this.resetForm());
  }

  deleteDev(id) {
    this.userService.deleteUser(id)
      .then(res => this.getDevs())
      .then(() => this.resetForm());
  }

  resetForm() {
    this.form = {
      id: null,
      name: '',
      repo: ''
    };
  }

  initForm() {
    this.form = {
      id: null,
      name: '',
      repo: ''
    }
  }
}

HomeController.$inject = ['userService'];
export default HomeController;
