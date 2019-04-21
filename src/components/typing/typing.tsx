
import Typed from 'typed.js'
import React, { Component } from 'react'


// https://github.com/mattboldt/typed.js/#customization
export default class Typing extends Component<any, any> {

  private _el: any;
  private _typed: any;

  componentDidMount() {
    const { strings } = this.props;

    if (this._typed) {
      this._typed.destroy();
    }
    const options = {
    	strings: strings,
      typeSpeed: 10,
      backSpeed: 40,
      loop: true,
    };
    this._typed = new Typed(this._el, options);
  }
  componentWillUnmount() {
    this._typed.destroy();
  }
  render() {
    return (
      <div className="type-wrap">>
        <span
          style={{ whiteSpace: 'pre' }}
          ref={(el) => { this._el = el; }}
        />
      </div>
    )
  }
}
