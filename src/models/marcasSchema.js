const mongoose = require('mongoose');

const marcaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dataCriacao: {
         type: Date,
         default: new Date,
         required: true
         },
    nomeMarca: { 
        type: String,
        required: true,
        unique: true
        },
    descricao: { 
        type: String,
        required: true,
        unique: true
    },
    motivacao: { 
        type: String,
        required: true,
    },
    causasQueCumpreAtualmente: { 
        type: String,
        required: true,
    },
    cidade: { 
        type: String,
        required: true
    },
    estado: { 
        type: String,
        required: true
    },
    marcaFeitaPorPessoaNegra: { type: Boolean,
        default: false 
    },
    fundadaEm: { 
        type: Date,
        required: true
    },
    classificacao: { 
        type: String,
        validate: empresa => ["MEI", "EI", "EIRELI", "LTDA"] .includes(empresa.toUpperCase())
    },
    contatos: { 
        type: String 
    },
    cnpj: { 
        type: Number,
        required: true
    },
    
})

const marca = mongoose.model('marca', marcaSchema);

module.exports = marca;







/* [

    {
        "id": 1,
        "data criação": "30/06/2021",
        "nome marca": "Loja Phink It",
        "descricao": "Slow Fashion Pernambucana, independente, revolucionando a moda desde 2017",
        "motivacao": "(?)",
        "causas que cumpre atualmente": ["Agenda 2030 ONU - 12", "Fashion Revolution Brasil", "Processo manual"],
        "estado": "Pernambuco",
        "cidade": "Recife",
        "é uma marca feita por pessoa negra?": null,
        "fundada em": 2017,
        "classificação": "microempresa",
        "contatos": ["Instagram: @lojaphinkit", "Whatsapp: (81) 9 9945-3125", "Facebook: Loja Phink It", "Email: contato@lojaphinkit.com.br"]  
    }
]
 */