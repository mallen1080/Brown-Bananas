# BrownBananas

[Heroku link][heroku]

[heroku]: https://brownbananas.win/

## Minimum Viable Product

BrownBananas is a web application inspired by RottenTomatoes built using Ruby on Rails and React.js. BrownBananas allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account
- [x] Log in / Log out
- [x] View show page for any movie in the db
- [x] Add a rating to a movie, by applying an up/down vote and optional text
- [x] An admin user can create/edit/delete movies from the db
- [ ] Browse movies and filter results based on genre, Banana Rating, release date, etc.(done last)

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
- [ ] BROWSE PAGE!! (will be done)
- [ ] Recommendation List becomes customized based on current users fav genre
- [ ] Have actor and director names dynamically display upon input of create movie form
- [ ] Ability to update user (change pw or fav genre)
- [ ] Password verify on sign up
