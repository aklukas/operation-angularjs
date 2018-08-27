import angular from 'angular';
import Home from './home/home';
import Posts from './posts/posts'

let componentModule = angular.module('app.components', [
  Home,
  Posts
])

.name;

export default componentModule;
