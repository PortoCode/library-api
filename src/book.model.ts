import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'books' })
export class Book extends Model<Book> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DOUBLE(),
    allowNull: false,
  })
  price: number;
}
