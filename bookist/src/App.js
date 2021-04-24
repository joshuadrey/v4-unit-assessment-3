import React, { Component } from 'react'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './react-starter/data'
import SearchBar from './components/SearchBar'

console.log(data)

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }


  addToShelf(title) {
    const that = this
    return function () {
      const shelf = that.state.shelf;
      let isInShelf = false;
      for (let i = 0; i < shelf.length; i++) {
        if (shelf[i].indexOf(title) >= 0) {
          isInShelf = true;
        }
      }
      if (!isInShelf) {
        that.state.shelf.push(title)
        console.log(that.state.shelf)
        that.setState({ shelf: that.state.shelf });
      }
    }
  }


  clearShelf() {
    this.state.shelf = []
    this.setState({ shelf: this.state.shelf })
  }



  filterBooks(input) {
    this.state.Books.filter((input) => {
    })
    let filteredBooks = this.state.books
    return filteredBooks
  }



  reset(){
    return (this.state.books = data)
  }


  render() {
    return (
      <div>
        <Header />
        <BookList books={this.state.books} addToShelf={this.addToShelf} />
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        <SearchBar filterBooks = {this.filterBooks} reset = {this.reset}/>
      </div >
    )
  }

}

export default App

