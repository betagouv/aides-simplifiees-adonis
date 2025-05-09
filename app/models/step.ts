import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import type { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Question from './question.js'
import Simulateur from './simulateur.js'

export default class Step extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare slug: string

  @column()
  declare title: string

  @column({ columnName: 'simulateur_id' })
  declare simulateurId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Simulateur)
  declare simulateur: BelongsTo<typeof Simulateur>

  @hasMany(() => Question)
  declare questions: HasMany<typeof Question>
}
