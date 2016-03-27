# Schema Information

## movies
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
image_url    | string    | not null
trailer_url  | string    | not null
genre_id     | integer   | not null, foreign key
in_theatures | date      | not null
on_dvd       | date      |
director_id  | integer   | not null, foreign key
actor1_id    | integer   | not null, foreign key
actor2_id    | integer   | not null, foreign key
concenseus   | text      | not null
description  | text      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
movie_id    | integer   | not null
value       | boolean   | not null
text        | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
