import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
// import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './schemas/media.schema';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async create(@Body() createMediaDto: CreateMediaDto): Promise<Media> {
    return await this.mediaService.create(createMediaDto);
  }

  @Get()
  async findAll(@Query() query: any): Promise<Media[]> {
    return await this.mediaService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Media> {
    return await this.mediaService.findOne(id);
  }

  /**   OUT OF REQUIREMENT ... ... ...
   * 
   * 
   * 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }  


  */
}
