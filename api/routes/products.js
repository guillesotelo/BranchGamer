const express = require("express");
const router = express.Router();
const { Product, ProductsCategories } = require("../models");
const { Op } = require("sequelize");

router.get("/:id", (req, res, next) => {
  Product.findByPk(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  //Example query
  //Req.query = {item : "mouse"}
  if (req.query.item) {
    const filter = req.query.item.split(" ")[0]; //Solo la primera palabra del query
    Product.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${filter}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${filter}%`,
            },
          },
          {
            marca: {
              [Op.like]: `%${filter}%`,
            },
          },
        ],
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(next);
      
  } else {
    Product.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(next);
  }
});

// router.post("/", (req, res, next) => {
//   Product.create(req.body)
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch(next);
// });

router.post("/", (req, res, next) => {
  Product.create(req.body)
    .then((data) => {
      ProductsCategories.create({productId: data.id, categoryId: req.body.categoryId})
      res.status(201).json(data);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([, data]) => {
      res.status(201).json(data);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
});

module.exports = router;
