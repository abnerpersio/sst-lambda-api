import { HealthUseCase } from '@/domain/use-cases/health-use-case';
import { httpAdapt } from '@/infra/adapters/http';

export const handler = httpAdapt(new HealthUseCase());
