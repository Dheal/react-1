import React, {Component} from 'react';

class Tambahan extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
          hitung: 0
          };
          
      }

      berhenti() {
        if (this.hitung>0) {
            this.setState({ hitung: this.state.hitung - 1 }) 
        }
      } 
      
    
      render() {
        return (
          <div>
            <p>{this.state.hitung}</p>
            <button onClick={() => this.setState({ hitung: this.state.hitung + 1 })}>
              +
            </button>
            <button onClick={this.berhenti}>
              -
            </button>
          </div>
        );
      }
    
}

export default Tambahan;