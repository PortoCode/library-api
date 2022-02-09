import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {
    this.syncDataBase();
  }

  async syncDataBase() {
    await this.sequelize.sync();
  }
}
