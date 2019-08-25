import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


//taken from https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              name: 'John',
              email: 'john@smith.com'
            },
          ]
        }
      }
    
      onSubmit = event => {
        event.preventDefault();
        const name = this.name.value;
        const email = this.email.value;
        const info = {name: name, email: email};
        const data = [...this.state.data, info];
        this.setState({
          data: data
        });
      };
    
      render() {
        return (
            <div className="container">
              <h3>Please Submit your info.</h3>
    
              <hr/>
    
              <div className="row">
                <form className="form-inline" onSubmit={this.onSubmit}>
                  <input
                      type="text"
                      className="form-control mb-2 mr-sm-2 mb-sm-0"
                      placeholder="Name"
                      ref={input => this.name = input}/>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        ref={input => this.email = input}/>
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>
                </form>
              </div>
    
              <hr/>
    
              <div className="row">
                {
                  this.state.data.map((info, index) => <Card key={index} info={info}/>)
                }
              </div>
    
            </div>
        )
      }
    }
    
    const Card = props =>
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3">
            <div className="card-body">
              <p className="card-title"><span>Name: </span>{props.info.name}</p>
              <p className="card-text">
                <span>Email: </span>{props.info.email}
              </p>
            </div>
          </div>
        </div>;

export default withLDConsumer()(LoginForm);