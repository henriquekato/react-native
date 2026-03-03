export const FIND_RANDOMS_QUESTION = `
SELECT
  q.id,
  q.title
FROM
  question q
ORDER BY
  RANDOM()
LIMIT $quantity;
`
