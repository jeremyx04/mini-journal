CREATE DATABASE entries;

CREATE TABLE entry_table(
    id SERIAL PRIMARY KEY,
    liked VARCHAR(500),
    disliked VARCHAR(500)
);