import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';
@Controller('api/v1/players')
class PlayersController {
  constructor(private readonly playersService: PlayersService) {}
  @Post()
  async createPlayers(@Body() createPlayerDto: CreatePlayerDto) {
    await this.playersService.createPlayer(createPlayerDto);
  }

  @Get()
  async filterPlayers() {
    return this.playersService.filterAllPlayers();
  }
}

export { PlayersController };
