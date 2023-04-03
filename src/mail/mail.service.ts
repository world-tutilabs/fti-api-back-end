import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation() {
    await this.mailerService.sendMail({
      to: 'asd',
      from: '"Support Team" <support@example.com>',
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './templates/test.pug',
      context: {
        name: 'asd',
      },
    });
  }
}
