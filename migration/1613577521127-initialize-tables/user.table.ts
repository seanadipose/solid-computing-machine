import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export async function createTable(queryRunner: QueryRunner) {
  await queryRunner.createTable(new Table({
    name: 'user',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true
      },
      {
        name: 'username',
        type: 'varchar'
      },
      {
        name: 'first_name',
        type: 'varchar'
      },
      {
        name: 'last_name',
        type: 'varchar'
      },
      {
        name: 'email',
        type: 'varchar'
      }
    ]
  }), true);
}

export async function dropTable(queryRunner: QueryRunner) {
  await queryRunner.dropTable('user');
}
