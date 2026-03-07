export interface QuestionOption {
  id: string
  label: string
  value: string
}

export interface Question {
  id: string
  title: string
  type: 'text' | 'select'
  options?: QuestionOption[]
}