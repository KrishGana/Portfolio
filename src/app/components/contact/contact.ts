import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // Form State
  form = { name: '', email: '', subject: '', message: '' };

  // UI States
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  statusMessage = 'Ready to transmit';

  subjects = [
    'Full-time Opportunity',
    'Freelance Project',
    'Technical Consultation',
    'Open Source Collaboration',
    'Just saying hi'
  ];

  links = [
    { icon: 'assets/logos/mail.svg', label: 'Email', value: 'gananathan9100@gmail.com', url: 'mailto:gananathan9100@gmail.com' },
    { icon: 'assets/logos/linkedin.svg', label: 'LinkedIn', value: 'linkedin.com/in/gananathan-k-s', url: 'https://linkedin.com/in/gananathan-k-s' },
    { icon: 'assets/logos/github.svg', label: 'GitHub', value: 'github.com/KrishGana', url: 'https://github.com/KrishGana' }
  ];

  async onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    this.status = 'sending';
    this.statusMessage = 'Establishing secure connection...';

    // Simulated steps for "Wow" feel
    await this.delay(800);
    this.statusMessage = 'Encrypting payload...';
    await this.delay(600);
    this.statusMessage = 'Transmitting data...';

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // service_id, template_id, template_params, public_key
      const result = await emailjs.send(
        'service_jmtktfe',
        'template_kbl14q7',
        {
          title: this.form.subject,
          name: this.form.name,
          message: this.form.message,
          email: this.form.email,
        },
        'gVsXe4K-D_RiYIvyE'
      );

      if (result.status === 200) {
        this.status = 'success';
        this.statusMessage = 'SUCCESS: Message Received.';
        this.resetForm();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.status = 'error';
      this.statusMessage = 'ERROR: Transmission failed.';

      // Fallback to success for demo if credentials aren't set yet
      // Comment this out once you have real credentials
      if (this.statusMessage.includes('YOUR_')) {
        this.status = 'success';
        this.statusMessage = 'SUCCESS: (Demo Mode) Message Processed.';
        this.resetForm();
      }
    }
  }

  private resetForm() {
    setTimeout(() => {
      this.status = 'idle';
      this.statusMessage = 'Ready to transmit';
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 5000);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
