import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async readAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async readById(id: number): Promise<Book> {
    return await this.bookRepository.findOne(id);
  }

  async create(book: Book) {
    const newBook = this.bookRepository.create(book);
    await this.bookRepository.save(newBook);
  }

  async update(book: Book): Promise<Book> {
    const { id } = book;
    await this.bookRepository.update({ id }, book);
    return this.readById(id);
  }

  async delete(id: number) {
    this.bookRepository.delete(id);
  }
}
