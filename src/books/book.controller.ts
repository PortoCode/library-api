import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './entities/book.entity';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async readAll(): Promise<Book[]> {
    return await this.bookService.readAll();
  }

  @Get(':id')
  async readById(@Param() params): Promise<Book> {
    return await this.bookService.readById(params.id);
  }

  @Post()
  async create(@Body() book: Book) {
    await this.bookService.create(book);
  }

  @Put()
  async update(@Body() book: Book): Promise<Book> {
    return await this.bookService.update(book);
  }

  @Delete(':id')
  async delete(@Param() params) {
    await this.bookService.delete(params.id);
  }
}
