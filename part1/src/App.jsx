// Creación de una función anónima que devuelve un div que
// contiene un párrafo con el texto "Hello world" y lo 
// almacena en la constante App

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}

// Muy importante el export para que no se rompa la app
export default App