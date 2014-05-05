var require = {
  baseUrl: '..',

  paths: {
    'bootstrap': 'lib/bootstrap-3.1.1/js/bootstrap.min',

    'jquery': 'lib/jquery-1.11.1/jquery.min',
    'jquery-gray': 'lib/gray-1.3.2/js/jquery.gray.min'
  },

  shim: {
    'bootstrap': ['jquery'],
    'jquery-gray': ['jquery']
  }
};
