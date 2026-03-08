export const FIND_OPTIONS_BY_QUESTION_ID = `
SELECT
  id,
  label,
  value
FROM
  question_option
WHERE
  question_id = $questionId;
`
