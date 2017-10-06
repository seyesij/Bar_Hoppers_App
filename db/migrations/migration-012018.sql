\c bar_hoppers_dev;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_digest TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS bars (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  zip VARCHAR(255),
  image TEXT,
  user_id INT REFERENCES users(id)
);
