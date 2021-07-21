
import React from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }


  boxClick = (e) => {
    this.setState({
      bgColor: "blue"
    })
  }


  boxClick1 = (e) => {
    this.setState({
      bgColor: "red"
    })
  }

  render() {
    return (
      <div className="App">


        <article className='experimentsHolder'>
          <div className="boxClickCss" 
          style={{color: this.state.bgColor}}
           onClick={this.boxClick}>Test Click the buttons for change my color! This is an example of an onClick event 'renderd' by react.</div>
           <button type="submit" className="btn btn-primary" onClick={this.boxClick}>Blue</button>
           <button type="submit" className="btn btn-danger" onClick={this.boxClick1}>Red</button>
        </article>

      </div>
    );
  }
}

export { Contact};
