function index(req, res) {
    res.json({
      base_url: 'localhost:3000',
      endpoints: [
        {
          method: 'GET', path: '/api', description: 'Describes available endpoints'
        }
      ]
    });
  }
  
  module.exports = {
    index: index
  }
  