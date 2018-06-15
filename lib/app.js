#!/usr/bin/env node

AJV = require('ajv')
YAML = require('js-yaml')
const fs = require('fs');


function read(path){
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, 'utf8')
  } else {
    return path
  }
}


function parse(yaml, schema){
  // Load the yaml file
  yaml = YAML.safeLoad(read(yaml))

  // Load the schema
  if (schema !== undefined) {
    schema = JSON.parse(read(schema))

    // Validate the yaml
    ajv = new AJV({allErrors: true})
    valid = ajv.validate(schema, yaml)
    return {
      valid: valid,
      yaml: JSON.stringify(yaml),
      errors: ajv.errors,
      errorsText: ajv.errorsText()
    }

  } else {
    return {
      valid: true,
      yaml: JSON.stringify(yaml)
    }
  }
}

module.exports = {
  parse: parse
}
