import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.controller';
import { FspDistrictXrefService } from './fsp-district-xref.service';
import { FspDistrictXref } from './entities/fsp-district-xref.entity';
import { CreateFspDistrictXrefDto } from './dto/create-fsp-district-xref.dto';
import { UpdateFspDistrictXrefDto } from './dto/update-fsp-district-xref.dto';

@Controller('fsp-district-xref')
export class FspDistrictXrefController extends BaseController<
  FspDistrictXref,
  CreateFspDistrictXrefDto,
  CreateFspDistrictXrefDto
> {
  constructor(protected readonly service: FspDistrictXrefService) {
    super(service);
  }
}
