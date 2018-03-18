AJV = require('ajv')
YAML = require('js-yaml')
fs = require('fs');


function validate(yaml_filepath, schema_filepath){
  // Load the yaml file
  yaml = YAML.safeLoad(
    fs.readFileSync(yaml_filepath, 'utf8')
  );

  // Load the schema
  schema = JSON.parse(
    fs.readFileSync(schema_filepath, 'utf8')
  );

  // Validate the yaml
  ajv = new AJV({allErrors: true})
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
