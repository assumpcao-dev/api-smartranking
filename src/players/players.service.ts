import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';
import { v1 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];
  private readonly logger = new Logger(PlayersService.name);
  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    const { email } = createPlayerDto;

    const emailExists = this.players.find((player) => player.email === email);

    if (emailExists) {
      return this.update(emailExists, createPlayerDto);
    } else {
      this.create(createPlayerDto);
    }
  }

  async filterAllPlayers(): Promise<Player[]> {
    return this.players;
  }
  private create(createPlayerDto: CreatePlayerDto): void {
    const { name, phoneNumber, email } = createPlayerDto;

    const player: Player = {
      _id: uuid(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      positionRanking: 1,
      avatar: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`createPlayerDto: ${JSON.stringify(createPlayerDto)}`);
    this.players.push(player);
  }
  async update(emailExists: Player, createPlayerDto: CreatePlayerDto) {
    const { name } = createPlayerDto;

    emailExists.name = name;
  }
}
