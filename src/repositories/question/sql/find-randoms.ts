export const FIND_RANDOM_QUESTIONS = `
SELECT
  q.id,
  q.title,
  q.type
FROM
  question q
ORDER BY
  RANDOM()
LIMIT $quantity;
`
