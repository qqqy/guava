SELECT firstname , lastname , email , balance FROM users
JOIN balances ON users.user_id = balances.balance_id
WHERE user_id = ${id}