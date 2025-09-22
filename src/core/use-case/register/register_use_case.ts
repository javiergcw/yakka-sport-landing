import { RegisterService } from '../../services/register/register.service';
import { DtoSendRegisterCreate } from '../../dto/register/send/dto_send_register_create';
import { DtoReceiveRegisterCreate } from '../../dto/register/receive/dto_receive_register_create';

export class RegisterUseCase {
  private registerService: RegisterService;

  constructor() {
    this.registerService = new RegisterService();
  }

  async createRegister(data: DtoSendRegisterCreate): Promise<DtoReceiveRegisterCreate> {
    try {
      // Validaciones básicas
      if (!data.name || !data.email || !data.phone || !data.role) {
        throw new Error('All required fields must be provided');
      }

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format');
      }

      // Validar que el flavor sea válido
      if (!data.flavor || data.flavor <= 0) {
        throw new Error('Flavor must be a valid number');
      }

      // Validar longitud mínima de los campos
      if (data.name.trim().length < 2) {
        throw new Error('Name must have at least 2 characters');
      }

      if (data.phone.trim().length < 7) {
        throw new Error('Phone must have at least 7 characters');
      }

      // Validar que el rol sea válido
      const validRoles = ['builder', 'employee'];
      if (!validRoles.includes(data.role)) {
        throw new Error('Role must be either "builder" or "employee"');
      }

      const result = await this.registerService.createRegister(data);
      return result;
    } catch (error) {
      console.error('Error in RegisterUseCase.createRegister:', error);
      throw error;
    }
  }
}
