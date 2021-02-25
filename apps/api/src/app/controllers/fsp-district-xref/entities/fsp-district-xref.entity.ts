import { ApiBaseEntity } from '../../../../core/entities/base.entity';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('fsp_district_xref')
export class FspDistrictXref extends ApiBaseEntity<FspDistrictXref> {
  constructor(fspDistrictXref?: Partial<FspDistrictXref>) {
    super(fspDistrictXref);
  }
}
