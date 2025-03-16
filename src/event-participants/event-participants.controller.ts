import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventParticipantsService } from './event-participants.service';
import { CreateEventParticipantDto } from './dto/create-event-participant.dto';
import { UpdateEventParticipantDto } from './dto/update-event-participant.dto';

@Controller('event-participants')
export class EventParticipantsController {
  constructor(private readonly eventParticipantsService: EventParticipantsService) {}

  /*@Post()
  create(@Body() createEventParticipantDto: CreateEventParticipantDto) {
    return this.eventParticipantsService.createEventP(createEventParticipantDto);
  }*/

  @Get()
  findAll() {
    return this.eventParticipantsService.findEventpAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventParticipantsService.findEventpOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventParticipantDto: UpdateEventParticipantDto) {
    return this.eventParticipantsService.update(+id, updateEventParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventParticipantsService.remove(+id);
  }
}
