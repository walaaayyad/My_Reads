import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchPage from './Search'



class BooksApp extends React.Component {
  state = {
    books:[]
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

changeShelf= (book,shelf) => {
  book.shelf= shelf
  BooksAPI.update(book,shelf).then(() =>{
    let newBooks = this.state.books
    .filter(b => b.id !== book.id)
    .concat([book])
    this.setState({books: newBooks})
  })
}

  render() {
    

    return (
      <div className="app">

          <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
            
                <Route exact path='/' render={() =>(
                  <BookShelf
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                  />
                 )}/>
              </div>
            
          </div>

            <Route exact path='/Search' render={() =>(
              <SearchPage
            changeShelf={this.changeShelf}
            books={this.state.books}
            />
            )} /> 
        
        
      </div>
    
      
    )
  }
}

export default BooksApp
