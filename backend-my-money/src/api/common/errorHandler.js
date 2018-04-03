const _ = require('lodash');

module.exports = (req, res, next) => {  
  const bundle = res.locals.bundle;
  let hasError = (bundle.errors);

  if(hasError){    
    const erros = parserErros(bundle.errors)
    res.status(500).json({erros})
  }else{
    next()
  }
}

const parserErros = (nodeRestFulErros) => {
  console.log('bem aqui', nodeRestFulErros);
  const errors = [];
  _.forIn(nodeRestFulErros, error => errors.push(error.message));
  return errors;
}