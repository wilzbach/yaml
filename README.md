# storyscript

An OMG service allowing to parse and format YAML.

Usage
-----

```coffee
# Storyscript
yaml parse data: '- item'
# ["item", "foo"]
yaml format data: [1, 2]
# "---\n- 1\n- 2\n"
```
