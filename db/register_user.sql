INSERT INTO user_login (username , password)
VALUES (
  ${username},
  ${password}
)
RETURNING username, password;

INSERT INTO users (firstname , lastname , email)
VALUES (
  ${firstname},
  ${lastname},
  ${email}
);

INSERT INTO balances (balance)
VALUES (
  0
) RETURNING balance id;