const express = require("express");
const router = express.Router();
const { Category, ProductsCategories } = require("../models");
const { isAdmin } = require("../middlewares");

//Devuelvo los pares Producto-Categoría con un categoryId dado
router.get('/' , (req, res, next) => {
    if(req.query.categoryId){
        ProductsCategories.findAll({
          where : {
            categoryId : req.query.categoryId
          }
        })
        .then(data => res.status(200).json(data))
      } else {
        Category.findAll()
            .then(data => {
                res.status(200).json(data)
            })
      }
})

//Creo una categoría pasándole un nombre nuevo
router.post('/', isAdmin, (req, res, next) => {
    if(!req.query.name) res.status(400).json({ messsage: "No name entered." })
    Category.create({name: req.query.name})
        .then(data => res.status(201).json(data))
        .catch(next)
})

//Borro una categoría por su ID
router.delete('/', isAdmin, (req, res, next) => {
    if(!req.query.id) res.status(400).json({ message: "No ID entered." })
    Category.destroy({ where: { id: req.query.id } })
        .then(() => { res.sendStatus(200) })
        .catch(next)
})

//Edito el nombre de una categoría por su ID
router.put('/', isAdmin, (req, res, next) => {
    if(!req.query.id || !req.query.name) res.status(400).json({ message: "No ID entered." })
    Category.findByPk(req.query.id)
        .then(cat => { console.log("- - - - CAT:", cat)
            cat.name = req.query.name 
            cat.save()
            res.status(201).json({
                message: 'Updated successfully',
                category: cat
                })
    }).catch(next)
})


module.exports = router;