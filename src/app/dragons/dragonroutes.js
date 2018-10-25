export default { 
    'get': { 'index': 'https://dragons-api.herokuapp.com/api/dragons',
             'show': 'https://dragons-api.herokuapp.com/api/dragons/:slug' },
    'post': { 'create': 'https://dragons-api.herokuapp.com/api/dragons/' },
    'delete': 'https://dragons-api.herokuapp.com/api/dragons/:slug',
    'put': 'https://dragons-api.herokuapp.com/api/dragons/:slug'
};