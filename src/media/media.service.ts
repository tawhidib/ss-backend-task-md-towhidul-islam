import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Media, MediaDocument } from './schemas/media.schema';
import { Model } from 'mongoose';
import { queryModifier } from '../constants/queryModifier';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media.name) private mediaModel: Model<MediaDocument>,
  ) {}

  async create(createMediaDto: CreateMediaDto) {
    const createMedia = new this.mediaModel(createMediaDto);
    try {
      return await createMedia.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll(query: any): Promise<Media[]> {
    const { limit, skip, sort } = queryModifier(query);

    const media: Media[] = await this.mediaModel
      .find(query)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    try {
      return media;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
