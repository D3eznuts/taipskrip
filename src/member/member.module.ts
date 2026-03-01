import { Module } from '@nestjs/common';
import { MembersService } from './member.service';
import { MemberController } from './member.controller';

@Module({
  controllers: [MemberController],
  providers: [MembersService],
})
export class MemberModule {}
