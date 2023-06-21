import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateMediaDto {
  @IsNotEmpty({ message: 'Provide Media name' })
  name: string;

  @IsNotEmpty({ message: 'Provide Media release date' })
  @IsDateString({}, { message: 'Provide date in ISO string formate' })
  releaseDate: Date;

  @IsNumber({}, { message: 'Provide runtime of this media' })
  runtime: number;

  @IsArray({ message: 'Provide actors in correct formate' })
  @ArrayNotEmpty({ message: 'Actors should not empty' })
  @IsString({ each: true, message: 'Actor name should be string' })
  actors: string[];

  @IsNotEmpty({ message: 'Provide director name' })
  @IsString({ message: 'Director name should be string' })
  director: string;

  @IsNotEmpty({ message: 'Provide producer name' })
  @IsString({ message: 'Producer name should be string' })
  producer: string;
}
