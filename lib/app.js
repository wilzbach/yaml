var AJV = require('ajv')
var YAML = require('js-yaml')
const fs = require('fs');


function read(path){
  if (fs.existsSync(yaml)) {
    retun fs.readFileSync(path, 'utf8')
  } else {
    return path
  }
}


function validate(yaml, schema){
  // Load the yaml file
  yaml = YAML.safeLoad(read(yaml));

  // Load the schema
  schema = JSON.parse(read(schema));

  // Validate the yaml
  var ajv = new AJV({allErrors: true})
  valid = ajv.addSchema(schema, '_')
             .validate('_', yaml);

  // Return the results
  return {
    valid: valid,
    yaml: JSON.stringify(yaml),
    errors: ajv.errors,
    errorsText: ajv.errorsText()
  }

}

module.exports = {
  validate: validate
};
