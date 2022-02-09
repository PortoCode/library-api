import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async readAll(): Promise<Book[]> {
    return await this.booksService.readAll();
  }

  @Get(':id')
  async readById(@Param() params): Promise<Book> {
    return await this.booksService.readById(params.id);
  }

  @Post()
  async create(@Body() book: Book) {
    await this.booksService.create(book);
  }

  @Put()
  async update(@Body() book: Book): Promise<[number, Book[]]> {
    return await this.booksService.update(book);
  }

  @Delete(':id')
  async delete(@Param() params) {
    await this.booksService.delete(params.id);
  }
}
