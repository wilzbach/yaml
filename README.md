yaml to json with optional validation schema.

## Usage

> `yaml` to `json`

```shell
$ echo 'hello: world' > test.yml
$ omg exec parse yaml:test.yml
{
  "hello": "world"
}
```

> `yaml` to `json` w/ validation using [AJV](https://github.com/epoberezkin/ajv)

```shell
$ echo '{"properties": {"hello": {"type": "string"}}}' > schema.json

$ echo 'hello: world' > test.yml
$ omg exec parse yaml:test.yml schema:schema.json
{
  "hello": "world"
}

$ echo 'hello: 1' > test.yml
$ omg exec parse yaml:test.yml schema:schema.json
Error
```
