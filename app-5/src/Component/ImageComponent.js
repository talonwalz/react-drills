import React, {Component} from 'react';

class Image extends Component {
    constructor() {
        super()
        this.setState = {

        }
    }
    render() {
        return(
            <section>
                <img src={this.props.url} alt="beach"/>
                <p>Beachin'</p>
            </section>
        )
    }
}

export default Image;