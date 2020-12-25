import React, { Component } from 'react';
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/authContext"; 


class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <div className="container">
          <h3>Hello World.</h3>
          <AuthContextProvider>
             <ThemeContextProvider>
                <BookList />
             </ThemeContextProvider>
          </AuthContextProvider>
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;