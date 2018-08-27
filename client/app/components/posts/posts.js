import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postsComponent from './posts.component';

let postsModule = angular.module('posts', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('posts', {
        url: '/posts',
        component: 'posts'
      });
  })

.component('posts', postsComponent)

.name;

export default postsModule;
