import { HttpResponse, UseCase } from '@/types/http';

export class HealthUseCase implements UseCase {
  async execute(): Promise<HttpResponse> {
    return { status: 200, message: 'OK' };
  }
}
