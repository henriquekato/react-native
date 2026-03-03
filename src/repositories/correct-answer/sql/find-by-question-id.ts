export const FIND_BY_QUESTION_ID = `
SELECT
  ca.id,
  ca.question_id,
  ca.text
FROM
  correct_answer ca
WHERE
  ca.question_id = $questionId;
`
