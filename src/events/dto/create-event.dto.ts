import { User } from "src/users/entities/user.entity";

export class CreateEventDto {
    title: string;
    event_date: Date;
    location: string;
    description: string;
    created_by: User;
}
