# BrownBananas

BrownBananas is a web application for browsing and leaving reviews on movies in theaters and on DVD.
It was inspired by RottenTomatoes and built using Ruby on Rails and React.js.

Leave your mark at: [BrownBananas][heroku]

[heroku]: http://www.brownbananas.win/


## Home Page
![home1]
![home2]

## Movie Show Page
![showinfo]
![showreview]

## Browse Page
![browse]

## Add / Edit Movie
![edit]

[home1]: ./docs/final/HomePage-Top.png
[home2]: ./docs/final/HomePage-Bottom.png
[showinfo]: ./docs/final/ShowPage-Info.png
[showreview]: ./docs/final/ShowPage-Reviews.png
[browse]: ./docs/final/BrowsePage.png
[edit]: ./docs/final/Edit-Movie.png

## Features

An Admin user can:
- Add, edit, and delete movies from the database through a user interface

A standard user can:
- Browse movies on the home page based on their release dates and rating values
- View basic info about a movie when hovering over the link on the homepage
- Create an account / log in with username or facebook account
- Watch youtube trailer on movie show page
- View all movie details on show page
- View all reviews for the movie
- Create, edit, and delete a review for each movie (only one per movie)
- Get redirected to a random movie's show page using the random movie generator
- Browse and filter movies based on their release, genre, and rating on browse page
- Search for movies using the search bar on the navbar

## Future work

- [x] BROWSE PAGE!!
- [ ] Recommendation List becomes customized based on current users fav genre
- [ ] Have actor and director names dynamically display upon input of create movie form
- [ ] Ability to update user (change pw or fav genre) through interface
- [ ] Password verify on sign up
- [ ] Add more filters to browse page

<!--

- [x] Create an account
- [x] Log in / Log out
- [x] View show page for any movie in the db
- [x] Add a rating to a movie, by applying an up/down vote and optional text
- [x] An admin user can create/edit/delete movies from the db
- [x] Browse movies and filter results based on genre, Banana Rating, release date, etc.(done last)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline


### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] setup Heroku
- [x] create `User` model
- [x] authentication

### Phase 2: Movie Model, API, and basic APIUtil (1 days)

**Objective:** Movies can be created, read, edited, indexed and destroyed through
the API.

- [x] create `Movie` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for movies (`MoviesController`)
- [x] Movie Query methods for Movie#index, Movie#show
- [x] jBuilder views for movies

### Phase 3: Review Model, API, and basic APIUtil (0.5 days)

**Objective:** Reviews can be created and edited through the API.

- [x] create `Review` model
- [x] seed the database with a small amount of test data
- [x] CE API for reviews (`ReviewsController`)

### Phase 4: Frontend Architecture and Router (0.5 days)

- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` for movies
- [x] setup `APIUtil` for reviews
- [x] setup `APIUtil` for users/sessions
- [x] setup the flux loop with skeleton files
- [x] setup React Router

### Phase 5: Movie Create / Edit form (0.5 days)

**Objective:** Movies can be created and edited with the user interface.

- [x] create MovieCreateForm component
- [x] saves movies to db after submitting form
- [x] basic styling on movie creation form

### Phase 6: Navbar / footer (0.5 days)

**Objective:** Create navbar / footer components.

- [x] searchbar dynamically shows movies matching search
- [x] create buttons for browse, log-in, and sign-up
- [x] Show button to create movie if current user is admin

### Phase 7: Log In / Sign Up (0.5 days)

**Objective:** Create log in / sign up form.

- [x] signs a user in upon submission
- [x] basic styling

### Phase 8: Home Page (1.5 day)

**Objective:** Create all components for homepage.

- build out API, Flux loop, and components for:
  - [x] BoxOfficeIterator
  - [x] MovieListTable
  - [x] MovieListItem
  - [x] MovieListItemPic
- [x] Basic styling

### Phase 9: Movie Show Page (1.5 days)

**Objective:** Create all components for movie show page.

- build out API, Flux loop, and components for:
  - [x] Sidebar
  - [x] Trailer
  - [x] BasicInfo
  - [x] Detail Info
  - [x] Review List
  - [x] ReviewListItem
  - [x] ReviewInputForm
  - [x] Show button to edit / delete movie if current user is admin
- [x] Basic styling

### Phase 10: Detail Styling of Home Page (1 days)

- [x] Iterator
- [x] MovieListTables
- [x] MovieListItems
- [x] RecommendationList
- [x] MovieListItemPic

### Phase 11: Detail Styling of Show Page (1 days)

- [x] Sidebar
- [x] Trailer
- [x] BasicInfo
- [x] Detail Info
- [x] Review List
- [x] ReviewListItem
- [x] ReviewInputForm


### Bonus Features (TBD)
- [x] BROWSE PAGE!! (will be done)
- [ ] Recommendation List becomes customized based on current users fav genre
- [ ] Have actor and director names dynamically display upon input of create movie form
- [ ] Ability to update user (change pw or fav genre)
- [ ] Password verify on sign up -->
