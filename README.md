# BrownBananas

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

BrownBananas is a web application inspired by RottenTomatoes built using Ruby on Rails and React.js. BrownBananas allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] View show page for any movie in the db
- [ ] Add a rating to a movie, by applying an up/down vote and optional text
- [ ] An admin user can create/edit/delete movies from the db
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
- [ ] setup `APIUtil` to interact with the API
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router

### Phase 5: Movie Create / Edit form (0.5 days)

**Objective:** Movies can be created and edited with the user interface.

- [ ] create MovieCreateForm component
- [ ] saves movies to db after submitting form
- [ ] basic styling on movie creation form

### Phase 6: Navbar / footer (0.5 days)

**Objective:** Create navbar / footer components.

- [ ] searchbar dynamically shows movies matching search
- [ ] create buttons for browse, log-in, and sign-up
- [ ] Show button to create movie if current user is admin

### Phase 7: Log In / Sign Up (0.5 days)

**Objective:** Create log in / sign up form.

- [ ] signs a user in upon submission
- [ ] basic styling

### Phase 8: Home Page (1.5 day)

**Objective:** Create all components for homepage.

- build out API, Flux loop, and components for:
  - [ ] BoxOfficeIterator
  - [ ] MovieListTable
  - [ ] MovieListItem
  - [ ] MovieListItemPic
- [ ] Basic styling

### Phase 9: Movie Show Page (1.5 days)

**Objective:** Create all components for movie show page.

- build out API, Flux loop, and components for:
  - [ ] Sidebar
  - [ ] Trailer
  - [ ] BasicInfo
  - [ ] Detail Info
  - [ ] Review List
  - [ ] ReviewListItem
  - [ ] ReviewInputForm
  - [ ] Show button to edit / delete movie if current user is admin
- [ ] Basic styling

### Phase 10: Detail Styling of Home Page (1 days)

- [ ] Iterator
- [ ] MovieListTables
- [ ] MovieListItems
- [ ] RecommendationList
- [ ] MovieListItemPic

### Phase 11: Detail Styling of Show Page (1 days)

- [ ] Sidebar
- [ ] Trailer
- [ ] BasicInfo
- [ ] Detail Info
- [ ] Review List
- [ ] ReviewListItem
- [ ] ReviewInputForm


### Bonus Features (TBD)
- [ ] BROWSE PAGE!! (will be done)
- [ ] Recommendation List becomes customized based on current users fav genre
- [ ] Have actor and director names dynamically display upon input of create movie form
- [ ] Ability to update user (change pw or fav genre)
