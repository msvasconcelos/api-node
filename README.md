<h1 align="center"><img src="https://i2.wp.com/www.zeptobook.com/wp-content/uploads/2019/01/RESTfulAPIs_NodeJS__mongodb_large.png?fit=728%2C360&ssl=1" alt="Flutter" /></h1>
<p align="center">API NODE REST</p>
<p align="center">
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/static/v1?label=Node&message=JS&color=blue?style=plastic&logo=Node.js" alt="Node" />
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/static/v1?label=MongoDB&message=database&color=blue?style=plastic&logo=MongoDB" alt="MongoDB" />
  </a>
  <a href="https://www.npmjs.com/package/express/">
    <img src="https://img.shields.io/static/v1?label=Express&message=JS&color=blue?style=plastic&logo=Express" alt="Express" />
  </a>
</p>

---

## About

Uma API utilizando Node, Express e MongoDB realizando as requisição Get, Post, Delete e Put para realizar CRUD completo. Com o objetivo de grava uma frase e o seu autor.

API using Node, Express and MongoDB performing the Get, Post, Delete and Put requests to perform complete CRUD. In order to record a sentence and its author.

### Technologies

<ul>
    <li>Node</li>
    <li>Express</li>
    <li>MongoDB</li>
</ul>

## Installation

## Development setup

Clone Project

```git
git clone git@github.com:msvasconcelos/api-node.git
```

```
Create account https://www.mongodb.com/cloud and configure the .env file with the bank connections
```

```ssh
cd api-node
npm install
npm run dev
```
## HTTP Methods
```get
Get: localhost:3000/mentions
```

```post
Post: localhost:3000/mentions
{
	"friend": "Lorem ipsum",
	"mention": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```

```put
Put: localhost:3000/mentions/{id:}
{
	"mention": "This is a new mention added via PUT"
}

```

```delete
Delete: localhost:3000/mentions/{id:}

```

## Release History

- 0.0.1
  - Work in progress

## Author

## Matheus Vasconcelos - [GitHub](https://github.com/msvasconcelos) / [Linkedin](www.linkedin.com/in/matheus-vasconcelos-dev) / [Email](mailto:matheus-s.v@edu.unifor.br)

Distributed under the MIT license. See `LICENSE` for more information.

## Contributing

1. Fork it (<https://github.com/msvasconcelos/api-node/fork>)
2. Create your feature branch (`git checkout -b feature/`)
3. Commit your changes (`git commit -am 'Add something'`)
4. Push to the branch (`git push origin feature/`)
5. Create a new Pull Request

<p align="center">Develop by <a href="https://github.com/msvasconcelos">Matheus Vasconcelos</a></p>
