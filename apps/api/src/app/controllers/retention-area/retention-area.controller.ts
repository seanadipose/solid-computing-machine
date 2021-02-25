import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.controller';
import { RetentionAreaService } from './retention-area.service';
import { RetentionArea } from './entities/retention-area.entity';
import { CreateRetentionAreaDto } from './dto/create-retention-area.dto';
import { UpdateRetentionAreaDto } from './dto/update-retention-area.dto';

@Controller('retention-area')
export class RetentionAreaController extends BaseController<
  RetentionArea,
  CreateRetentionAreaDto,
  UpdateRetentionAreaDto
> {
  constructor(protected readonly service: RetentionAreaService) {
    super(service);
  }
}
