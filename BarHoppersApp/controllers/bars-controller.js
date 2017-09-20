const Bar = require('../models/bar');

const barController = {};

barController.index = (req, res) => {
  Bar.findUsersBars(req.params.id)
    .then(bars => {
      res.json(bars);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

barController.create = (req, res) => {
  Bar.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    zip: req.body.zip,
    image: req.body.image,
  }, req.user.id).then(bar => {
    res.json({
      message: 'Bar added successfully!',
      data: bar,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

barController.delete = (req, res) => {
  Bar.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Bar deleted successfully!',
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = barController;
