export const GET_SESSION_ENTRIES = `
SELECT
  q.id AS question_id,
  q.title AS question_title,
  a.value AS answer,
  ca.value AS correct_answer,
  CASE WHEN LOWER(TRIM(a.value)) = LOWER(TRIM(ca.value)) THEN 1 ELSE 0 END AS is_correct
FROM
  answer a
  JOIN question q ON q.id = a.question_id
  JOIN correct_answer ca ON ca.question_id = a.question_id
WHERE
  a.session_id = $sessionId
ORDER BY
  a.id ASC;
`
