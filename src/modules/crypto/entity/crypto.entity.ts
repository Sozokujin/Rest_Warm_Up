import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Crypto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  currentPrice: number;
}
