import React, { Component } from 'react'


class Shelf extends Component {

    constructor() {
        super()

    }




    render() {
        let mappedTitles = this.props.shelf;
        return (
            <>
                <h1>Shelf</h1>
            <button onClick={this.props.clearShelf}>clear shelf</button>
                {mappedTitles.map((title, idx) => (
                    <div key={idx}>
                        <h1>{title}</h1>
                    </div>
                ))
                }
            </>
        )
    }

}

export default Shelf

