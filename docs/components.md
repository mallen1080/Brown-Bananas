## Component Hierarchy

* `App`
  * `Navbar`
  * `SignUpPage` (will be display: none unless signup button is clicked)
  * `LogInPage` (will be display: none unless login button is clicked)
  * `HomePage`
    * `BoxOfficeIterator`
    * `MovieIndex`
      * `MovieList`
        * `MovieListItem`
    * `Recomendations`
      * `MovieList`
        * `MovieListItemPic`
  * `MovieShowPage`
    * `Sidebar`
      * `MovieList`
        * `MovieListItem`
    * `Main`
      * `Trailer`
      * `BasicInfo`
      * `MoreInfo`
      * `Reviews`
        * `ReviewItem`
  * `Footer`
