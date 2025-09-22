import { ContactService } from '../../services/contact/contact.service';
import { DtoFromContactUsCreateSend } from '../../dto/contactUs/send/dto_from_contact_us_create_send';
import { DtoFromContactUsCreateReceive } from '../../dto/contactUs/receive/dto_from_contact_us_create_receive';

export class ContactUseCase {
  private contactService: ContactService;

  constructor() {
    this.contactService = new ContactService();
  }

  async createContact(data: DtoFromContactUsCreateSend): Promise<DtoFromContactUsCreateReceive> {
    try {
      // Validaciones básicas
      if (!data.name || !data.email || !data.subject || !data.message) {
        throw new Error('All fields are required');
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

      if (data.subject.trim().length < 3) {
        throw new Error('Subject must have at least 3 characters');
      }

      if (data.message.trim().length < 10) {
        throw new Error('Message must have at least 10 characters');
      }

      const result = await this.contactService.createContact(data);
      return result;
    } catch (error) {
      console.error('Error in ContactUseCase.createContact:', error);
      throw error;
    }
  }
}
