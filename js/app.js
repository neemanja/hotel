angular.module('configuration', []);
angular.module('services', ['configuration']);
angular.module('controllers', ['services']);
angular.module('directives', ['services']);
angular.module('hotelApp', ['controllers', 'directives', 'services']);