const express = require('express');
const router = express.Router();
const Laptop = require('../models/laptop-model');
const upload = require('../middleware/cloudinary-storage'); 

router.post('/addLaptop', upload.single('image'), async (req, res) => {
  try {
    const { name,price,brand,model,processor } = req.body;
    const image = req.file.path;

    const laptop = new Laptop({
      name,
      price,
      brand,
      model,
      processor,
      image:[
        {
            url:req.file.path,
            alt:`${brand} ${model}`
        }
      ]
    });

    await laptop.save();
    res.status(201).json({ message: 'Laptop added successfully', laptop: laptop });
  } catch (error) {
    res.status(500).json({ message: 'Error adding laptop', error: error.message });
  }
}
)

router.get('/fetch', async (req,res)=>{

})