const express = require('express');
const router = express.Router();

const Phone = require('../models/phone');

router.get('/', (req, res) => {
    const phonesData = Phone.all
    res.send(phonesData);
});

router.post('/', (req, res) => {
    const data = req.body;
    const newPhone = Phone.create(data);
    res.status(201).send(newPhone);
    
});

router.delete("/:id", (req, res) => {
    const phoneId = parseInt(req.params.id);
    const phoneToDestroy = Phone.findById(phoneId);
    phoneToDestroy.destroy();
    res.send({message: `You let us know you no long want${phoneToDestroy.brand} It has been successfully deleted`});

  });


  router.get('/:brand', (req, res) => {
    try {
        const phoneBrand = req.params.brand;
        const selectedBrand = Phone.findByBrand(phoneBrand);
        res.send(selectedBrand);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }


});


router.put("/:id", (req, res) => {
    try {
        const phoneId = parseInt(req.params.id);
        const phoneToUpdate = Phone.findById(phoneId);
        phoneToUpdate.brand = req.body.brand
        phoneToUpdate.price = req.body.price
        phoneToUpdate.color = req.body.color

        res.send(phoneToUpdate);

    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }


});


// router.delete("/:id", (req, res) => {
//     const phoneId = parseInt(req.params.id);
//     const phoneToDestroy = Phone.findById(phoneId);
//     phoneToDestroy.destroy();
//     res.send({message: `You let us know you no long want${phoneToDestroy.brand} It has been successfully deleted`});

//   });


module.exports = router;