import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createEvent(CreateEventDto: CreateEventDto,) {
    await this.prismaService.event.create({
      data: {
        title: CreateEventDto.title,
        description: CreateEventDto.description,
        location: CreateEventDto.location,
        event_date: CreateEventDto.event_date,
        created_by: CreateEventDto.created_by,
      },
    });
  }

  async findEventAll() {
    return await this.prismaService.event.findMany();
  }

  async findEventOne(id: number) {
    return await this.prismaService.event.findMany({
      where: {
        id: id,
      }
    });
  }
  
  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
