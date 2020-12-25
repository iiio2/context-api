import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/authContext';
import Toggle from './Toggle';
import AuthToggle from './authToggle';

class BookList extends Component {
  state = {
    books: [
      { name: 'The Dark Flower', id: 1 },
      { name: 'Mr. Robot', id: 2 },
      { name: 'High Pressure', id: 3 },
    ],
  };
  render() {
    const { books } = this.state;
    return (
      <AuthContext.Consumer>
        {(auth) => {
          console.log(auth);
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const theme = themeContext.isLightTheme
                  ? themeContext.light
                  : themeContext.dark;
                return (
                  <div
                    className='card'
                    style={{ backgroundColor: theme.bg, color: theme.color }}
                  >
                    {auth.isAuthenticated ? 'Logged In' : 'Sign In'}
                    <AuthToggle toggle={auth.auth} />
                    {books.map((book) => {
                      return (
                        <div className='card-body' key={book.id}>
                          <h4>{book.name}</h4>
                        </div>
                      );
                    })}
                    <Toggle toggle={themeContext.toggleTheme} />
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default BookList;
