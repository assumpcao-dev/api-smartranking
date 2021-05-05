import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('api/v1/players')
class PlayersController {
  @Post()
  async createPlayers(@Body() createPlayerDto: CreatePlayerDto) {
    const { email } = createPlayerDto;
    return JSON.stringify(`{
        "email": ${email}
      }`);
  }
}

export { PlayersController };
