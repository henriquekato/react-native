export const INSERT_SESSION = `
INSERT INTO session (id, played_at, total)
VALUES ($id, $playedAt, $total);
`
