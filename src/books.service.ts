import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  async readAll(): Promise<Book[]> {
    return await this.bookModel.findAll();
  }

  async readById(id: number): Promise<Book> {
    return await this.bookModel.findByPk(id);
  }

  async create(book: Book) {
    await this.bookModel.create(book);
  }

  async update(book: Book): Promise<[number, Book[]]> {
    return await this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  async delete(id: number) {
    const book: Book = await this.readById(id);
    book.destroy();
  }
}
