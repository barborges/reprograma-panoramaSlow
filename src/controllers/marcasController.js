const Marcas = require("../models/marcasSchema")
const mongoose = require('mongoose')
//const { response } = require("express")
//const utils = require("../utils/marcasUtils")

const getAll = async (req, res) => {
    try {
        const marcasAll = await Marcas.find()
        return res.status(200).json(marcasAll)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getById = async (req, res) => {
    try {
        const marcasId = await Marcas.findById(req.params.id)
        if (marcasId == null) {
            return res.status(404).json({ message: 'Marca não encontrada!' })
        }
        return res.json(marcasId)
    } catch (err) {
        return res.status(500).json({ message: error.message })
    }
}

/* const getByEstado = async (req, res)=>{
    try {
     const estadoEncontrado = await Marcas.findOne({estado: req.body.estado})
      if(estadoEncontrado == null) {
             return res.status(404).json({message: 'Estado não encontrado!'})
      }
         return res.json(estadoEncontrado)
     } catch (err) {
        return res.status(500).json({ message: error.message })
     }
 }
 */
const criaMarcas = async (req, res) => {
    const novaMarca = new Marcas({
        _id: new mongoose.Types.ObjectId(),
        nomeMarca: req.body.nomeMarca,
        descricao: req.body.descricao,
        motivacao: req.body.motivacao,
        causasQueCumpreAtualmente: req.body.causasQueCumpreAtualmente,
        cidade: req.body.cidade,
        estado: req.body.estado,
        marcaFeitaPorPessoaNegra: req.body.marcaFeitaPorPessoaNegra,
        fundadaEm: req.body.fundadaEm,
        classificacao: req.body.classificacao,
        contato: req.body.contato,
        cnpj: req.body.cnpj
    })
    const marcaJaExiste = await Marcas.findOne({ nomeMarca: req.body.nomeMarca })

    if (marcaJaExiste) {
        return res.status(400).json({ error: 'Marca já cadastrada!' })
    }
    try {
        const marcaSalva = await novaMarca.save()
        res.status(201).json(marcaSalva)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const atualizaMarca = async (req, res) => {
    try {
        const marcasAtualizar = await Marcas.findById(req.params.id)
        if (marcasAtualizar == null) {
            return res.status(404).json({ message: 'Marca não encontrada!' })
        }

        if (req.body.dataCriacao != null) {
            filme.dataCriacao = req.body.dataCriacao
        }
        if (req.body.nomeMarca != null) {
            filme.nomeMarca = req.body.nomeMarca
        }
        if (req.body.descricao != null) {
            filme.descricao = req.body.descricao
        }
        if (req.body.motivacao != null) {
            filme.motivacao = req.body.motivacao
        }
        if (req.body.causasQueCumpreAtualmente != null) {
            filme.causasQueCumpreAtualmente = req.body.causasQueCumpreAtualmente
        }
        if (req.body.cidade != null) {
            filme.cidade = req.body.cidade
        }
        if (req.body.estado != null) {
            filme.estado = req.body.estado
        }
        if (req.body.fundadaEm != null) {
            filme.fundadaEm = req.body.fundadaEm
        }
        if (req.body.classificacao != null) {
            filme.classificacao = req.body.classificacao
        }
        if (req.body.contatos != null) {
            filme.contatos = req.body.contatos
        }
        if (req.body.cnpj != null) {
            filme.cnpj = req.body.cnpj
        }

        const marcasAtualizadas = await Marcas.save()
        res.json(marcasAtualizadas)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteMarca = async (req, res) => {
    try {
        const marcasDeletar = await Marcas.findById(req.params.id)
        if (marcasDeletar == null) {
            return res.status(404).json({ message: 'Marca não encontrada!' })
        }
        await marcasDeletar.remove()
        res.json({ message: 'Marca deletada com sucesso!' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getAll,
    getById,
    criaMarcas,
    atualizaMarca,
    deleteMarca
}