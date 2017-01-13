angular.module('configuration', []);
angular.module('services', ['configuration']);
angular.module('controllers', ['services']);
angular.module('directives', []);
angular.module('hotelApp', ['controllers', 'directives', 'services']);