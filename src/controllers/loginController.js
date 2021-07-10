//em desenvolvimento 
const Login = require("../models/login")

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const autentication = (req, res, next) => {
  const authorization = req.get("authorization")
  if (authorization == null) {
    res.status(401).json({ message: "Acesso negado." })
  }
  let token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
    req.usuarioAutenticado = data;
    if (error) {
      return res.status(400).json({ message: "Não autorizado ou token inválido." });
    }
    return next();
  })
}


const hashPassword = (password) => bcrypt.hashSync(password, 7);


const getAll = async (req, res) => {

  const todosUsuarios = await Login.find()
  return res.status(200).json(todosUsuarios)
};

const loginUsuario = async (req, res) => {

  const usuario = await Login.findOne({ email: req.body.email })

  if (usuario == null) {
    return res.status(400).json({ message: "Ops! Não encontramos o usuário ou senha. Verifique se está correto." })
  }
  let user
  if (bcrypt.compareSync(req.body.password, usuario.password)) {
    user = {
      name: usuario.name,
      email: usuario.email
    }
    jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7d' }, (error, token) => {
      if (error) {
        res.status(500).json({ message: error.message })
      }
      res.status(201).json({ token: token, data: user })
    })
  }
  else {
    res.status(400).json({ message: "Ops! Não encontramos o usuário ou senha. Verifique se está correto." })
  }
}

const registroLogin = async (req, res) => {
  const novoRegistro = new Login({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  novoRegistro.password = hashPassword(req.body.password)

  const emailJaExiste = await Login.findOne({ email: req.body.email })

  if (emailJaExiste) {
    return res.status(409).json({ error: 'Email já cadastrado!' })
  }
  else {
    const registroSalvo = await novoRegistro.save()
    res.status(201).json(registroSalvo)
  }
}

const substituiPassword = async (req, res) => {
  try {
    const usuario = await Login.find()
    if (usuario == null) {
      return res.status(401).json({ message: "Não foi possível encontrar usuário." })
    }
    usuario.password = hashPassword(req.body.password)
    usuario.save()
    return res.status(200).json({ message: "Senha atualizada com sucesso!" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const delById = async (req, res) => {
  try {
    const usuario = await Login.findByIdAndDelete(req.params.id)
    if (usuario == null) {
      return res.status(304).json({ message: "Sem modificações!" })
    }
    return res.status(200).json({ message: "Usuário deletado com sucesso!" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


module.exports = {
  loginUsuario,
  getAll,
  autentication,
  registroLogin,
  substituiPassword,
  delById
}
