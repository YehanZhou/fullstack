import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.mode';

const models = TypegooseModule.forFeature([User, Course, Episode])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/fullstack', 
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
