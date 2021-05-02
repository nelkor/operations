export enum OperationType {
  PLOWING,
  BOWLING,
  FERTILIZATION,
  WATERING,
  RIGGING,
  HARVESTING,
}

export enum Assessment {
  EXCELLENT,
  SATISFACTORILY,
  BADLY,
}

export type Operation = {
  id: string
  type: OperationType
  date: number
  area: number
  comment?: string
  assessment?: Assessment
}

export type RenderOperation = {
  id: string
  date: string
  name: string
  hasAssessment: boolean
  assessment: string
  assessmentColor: string
}
