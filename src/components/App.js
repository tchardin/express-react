import React, { Component } from 'react'

const Header = () => {
  return <h1>Header!</h1>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.initialState
  }

  render() {
    return (
      <div>
        {this.state.header? <Header /> : <p>No header</p>}
      </div>
    )
  }
}

export default App
