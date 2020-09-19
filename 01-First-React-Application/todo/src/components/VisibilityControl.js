import React, { Component } from 'react'

export default class VisibilityControl extends Component {
    render = () => (
            // description prop provides the label text the component displays.
            // isChecked prop provides the initial state of the checkbox
            // callback prop provides the function that is invokes when the
            // user toggles the checkbox and triggers the change event.
            <div className="form-check">
                <input className="form-check-input" 
                       type="checkbox" 
                       checked={ this.props.isChecked } 
                       onChange={ (e) => this.props.callback(e.target.checked) } />
                <label className="form-check-label">
                    Show { this.props.description }
                </label>
            </div>
        )
}
