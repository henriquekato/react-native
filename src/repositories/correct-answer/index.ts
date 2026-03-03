import { ICorrectAnswer } from "@dtos/correct-answer"

export function CorrectAnswerRepository() {
  async function getByQuestionId(questionId: string): Promise<ICorrectAnswer> {
    // TODO: query

    return {} as ICorrectAnswer
  }

  return { getByQuestionId }
}
