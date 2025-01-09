import { HttpException, Injectable } from '@nestjs/common';
import { CreatePlanetInput } from './dto/create-planet.input';
import { UpdatePlanetInput } from './dto/update-planet.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from './entities/planet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlanetsService {
  constructor(@InjectRepository(Planet) private planetRepository: Repository<Planet>) { }
  async create(createPlanetInput: CreatePlanetInput) {
    const planetData = await this.planetRepository.save(createPlanetInput);
    return this.planetRepository.save(planetData)
  }

 async findAll() {
    return await this.planetRepository.find();
  }

  async findOne(id: number) {
    const planetData = await this.planetRepository.findOneBy({ id });
    if(!planetData) throw new HttpException('Planet not found', 404)
    return planetData
  }

  async update(id: number, updatePlanetInput: UpdatePlanetInput) {
    const existingPlanet = await this.planetRepository.findOneBy({id})
    if(!existingPlanet) throw new HttpException('Planet not found', 404)

    const planetData = this.planetRepository.merge(existingPlanet, updatePlanetInput)
    return await this.planetRepository.save(planetData);
  }

  async remove(id: number) {
    const planetData = await this.planetRepository.findOneBy({id})
    if(!planetData) throw new HttpException('Planet not found', 404)

    return await this.planetRepository.remove(planetData);
  }
}
