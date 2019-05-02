CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE user_login (
    login_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password TEXT
);

CREATE TABLE balances(
    balance_id SERIAL PRIMARY KEY,
    balance INT
);

INSERT INTO user_login (username , password)
VALUES ('its_bryan',
        'test123'
        );

INSERT INTO users (firstname , lastname , email)
VALUES
('Bryan', 'Smith' , 'bryan@devmtn.com'
);
INSERT INTO balances(balance)
VALUES (0);
