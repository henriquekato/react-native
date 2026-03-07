export const FIND_CORRECT_ANSWER_BY_QUESTION_ID = `
SELECT
  id,
  question_id,
  value
FROM
  correct_answer
WHERE
  question_id = $questionId;
`