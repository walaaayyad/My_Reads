import React, { Component } from 'react'
import Books from './Book'
import {Link} from 'react-router-dom'


class BookShelf extends Component{
    render() {
      console.log(this.props.books);
        return(
          
          <div>
             <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books
                        .filter(book => book.shelf === 'currentlyReading')
                        .map(book => (
                        <li key={book.id}>

                        <Books
                        book= {book}
                        changeShelf={this.props.changeShelf}
                        shelfTitle='currentlyReading'
                        />

                        </li>
                        ))
                      }
                      </ol>
                  </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books
                      .filter((book) => book.shelf === 'wantToRead')
                      .map((book) => (
                      <li key={book.id} >

                      <Books
                      book= {book}
                      changeShelf={this.props.changeShelf}
                      shelfTitle='wantToRead'
                      />
                        </li>
                      ))
                    }
                    </ol>
                   </div>
               </div>


              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books
                      .filter((book) => book.shelf === 'read')
                      .map((book) => (
                      <li key={book.id} >

                      <Books
                      book= {book}
                      changeShelf={this.props.changeShelf}
                      shelfTitle='read'  
                      />
                      </li>
                    ))
                   }
                   </ol>             
                  </div>
               </div>
               <div className="open-search">
              <Link to='/Search' >Add a book</Link>
         </div>
        </div>
        
        );
                
        
    }
}

export default BookShelf