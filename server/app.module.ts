import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })
  ]
})
export class ApplicationModule {}
