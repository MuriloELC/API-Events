import { Module } from '@nestjs/common';
import { EventParticipantsService } from './event-participants.service';
import { EventParticipantsController } from './event-participants.controller';
import { PrismaModule } from 'src/datavase/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EventParticipantsController],
  providers: [EventParticipantsService],
})
export class EventParticipantsModule {}
