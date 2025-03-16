import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { EventParticipantsModule } from './event-participants/event-participants.module';

@Module({
  imports: [UsersModule, EventsModule, EventParticipantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
