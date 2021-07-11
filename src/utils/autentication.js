const jwt = require('jsonwebtoken')


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
  
 module.exports = {
     autentication
 }