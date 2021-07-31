const express = require("express")
const router = express.Router()
const { User, Carrito } = require("../models")
const { validateToken, isAdmin } = require("../middlewares");
const { Op } = require("sequelize");


//EDIT USER
router.put("/:id", (req, res, next) => {
    User.update(req.body, {
        where: {
            id: req.params.id,
        },
        returning: true,
        plain: true
    })
        .then(([, data]) => {
            res.status(201).json(data)
        })
        .catch(next)
})

//RETORNAR UN USUARIO LOGUEADO EN CASO DE QUE LO HAYA
router.get("/logged", validateToken, (req, res, next) => {
    User.findByPk(req.user.id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})

router.get("/carritos", validateToken, (req, res, next) => {
    Carrito.findAll({
        where: {
            userId: req.user.id,
            state: {
                [Op.ne]: "inUse"
            }
        },
    }
    ).then((data) => {
        res.status(200).json(data)
    }).catch(next)
})

//RUTAS ADMIN
//Con isAdmin verificamos que a estas rutas solo se puede acceder siendo ADMIN 

//PROMOVER ADMINISTRADORES (ADMIN)
router.put("/:id/admin", isAdmin, (req, res, next) => {
    User.update({ isAdmin: true }, {
        where: {
            id: req.params.id
        },
        returning: true,
        plain: true
    })
        .then(([, data]) => {
            res.status(201).json(data)
        })
        .catch(next)
})

//DELETE USER (ADMIN)
router.delete("/:id", isAdmin, (req, res, next) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.sendStatus(200)
        })
        .catch(next)
})


//SEE ALL USERS (ADMIN)
router.get("/", isAdmin, (req, res, next) => {
    User.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})


module.exports = router
