# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Movies

- `POST /api/movies`
- `PATCH /api/movies/:id`
- `DELETE /api/movies/:id`
- `GET /api/movies`
  - Returns:
  - 5 newest in theaters
  - 11 Top Rated in theaters
  - 8 Newest to DVD
  - 8 Top Rated on DVD released within last year
- `GET /api/movies/:id`
  - Returns:
  - All movie attributes
  - Review counts (good and bad)
  - 10 most recent reviews

### Search

- `GET /api/search`
  - takes search param and return movies fitting search (limit 5)
