import { Sequelize } from 'sequelize-typescript';
import { Channel } from 'src/channel/channel.entity';
import { Message } from 'src/message/message.entity';
import { User } from 'src/user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'dpg-d1jt66q4d50c738gt0v0-a',
        port: 5432,
        username: 'username',
        password: 'gDsMgrLZeeEKMgg0RQ0b98Kk8p4sVO2Z',
        database: 'chat_app_p5bs'
      });
      sequelize.addModels([User, Message, Channel]);
      await sequelize.sync();
      return sequelize;
    }
  }
];