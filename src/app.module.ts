/* eslint-disable prettier/prettier */
import { config } from 'dotenv';
config();

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express'; // Importa MulterModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeasesModule } from './leases/leases.module';
import { RentModule } from './rent/rent.module';
import { OfertModule } from './ofert/ofert.module';
import { StratumModule } from './stratum/stratum.module';
import { PropertyTypeModule } from './property-type/property-type.module';
import { AntiquityModule } from './antiquity/antiquity.module';
import { RoomModule } from './room/room.module';
import { RestroomModule } from './restroom/restroom.module';
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { ServiceTypeModule } from './service-type/service-type.module';
import { SpecialityModule } from './speciality/speciality.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import * as path from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/demo'),
    MulterModule.register({
      dest: path.join(__dirname, '..', 'uploads'),
    }),
    LeasesModule,
    RentModule,
    OfertModule,
    StratumModule,
    PropertyTypeModule,
    AntiquityModule,
    RoomModule,
    RestroomModule,
    AdvertisementsModule,
    ServiceTypeModule,
    SpecialityModule,
    AuthModule,
    UsersModule,
    SalesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}