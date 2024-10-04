import { IsString } from 'class-validator';

export default class SaveTaskDto {

    @IsString()
    name: string;

}
