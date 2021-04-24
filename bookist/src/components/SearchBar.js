import React, { Component } from 'react'


class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }


    handleChange(value) {
        this.setState({ userInput: value })
    }


    handleClick(currentUserInput) {
        this.props.filterBooks(currentUserInput)
        this.setState({ userInput: '' })
    }


    handleClear() {

        this.setState({ userInput: '' })
        this.props.reset()
    }


    render() {

        return (
            <>
                <input type='text' placeholder='search books' onChange={this.handleChange} value={this.state.input} />
                <button onClick={this.handleClick}>Search</button>
                <button onClick={this.handleClear}>Clear</button>
            </>
        )
    }

}

export default SearchBar

