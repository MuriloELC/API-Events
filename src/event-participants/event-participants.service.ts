import { Injectable } from '@nestjs/common';
import { CreateEventParticipantDto } from './dto/create-event-participant.dto';
import { UpdateEventParticipantDto } from './dto/update-event-participant.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventParticipantsService {
  constructor(private readonly prismaService: PrismaService) {}

  /*async createEventP(CreateEventParticipantDto: CreateEventParticipantDto) {
    await this.prismaService.eventParticipants.create({
      data: {
        user: CreateEventParticipantDto.user,
        event: CreateEventParticipantDto.event,
      },
    });
  }*/

  async findEventpAll() {
    return await this.prismaService.eventParticipants.findMany();
  }

  async findEventpOne(id: number) {
    return await this.prismaService.eventParticipants.findMany({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateEventParticipantDto: UpdateEventParticipantDto) {
    return `This action updates a #${id} eventParticipant`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventParticipant`;
  }
}
