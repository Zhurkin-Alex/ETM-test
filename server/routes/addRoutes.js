const express = require('express')
const router = express.Router()
const rows = require('../obg/obg')

router.get('/addAll', async(req,res)=>{
  // console.log('addall',rows);
    try {
      res.status(200).json({ rows})
    } catch (error) {
      res.status(404).json({ succes: false, msg: error.message });
    }
})





module.exports=router
