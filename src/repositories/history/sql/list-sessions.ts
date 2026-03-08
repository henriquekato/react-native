export const LIST_SESSIONS = `
SELECT
  s.id,
  s.played_at,
  s.total,
 SUM(
  CASE 
    WHEN a.value IS NOT NULL AND LOWER(a.value) = LOWER(ca.value) THEN 1 
    ELSE 0 
  END
) AS correct
FROM
  session s
  LEFT JOIN answer a ON a.session_id = s.id
  LEFT JOIN correct_answer ca ON ca.question_id = a.question_id
GROUP BY
  s.id
ORDER BY
  s.played_at DESC;
`
