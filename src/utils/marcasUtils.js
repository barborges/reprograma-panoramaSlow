let filtrarMarca = (model, id)=>{
    let marcaFiltrada = model.find(marca => marca.id == id)
    return marcaFiltrada
 }
 
 module.exports = {
     filtrarMarca
 }