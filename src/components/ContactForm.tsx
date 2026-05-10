import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactAPI } from '../services/api';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await contactAPI.submit(formData);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch {
      setError(t('contactForm.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-forest-deep mb-4">{t('contactForm.successTitle')}</h3>
        <p className="text-gray-600 mb-6">
          {t('contactForm.successMessage')}
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-forest-green font-semibold hover:text-forest-mid transition-colors"
        >
          {t('contactForm.sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            {t('contactForm.nameLabel')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all"
            placeholder={t('contactForm.namePlaceholder')}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            {t('contactForm.emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all"
            placeholder={t('contactForm.emailPlaceholder')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          {t('contactForm.phoneLabel')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all"
          placeholder={t('contactForm.phonePlaceholder')}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          {t('contactForm.subjectLabel')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all"
          placeholder={t('contactForm.subjectPlaceholder')}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          {t('contactForm.messageLabel')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all resize-none"
          placeholder={t('contactForm.messagePlaceholder')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-forest-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-forest-mid transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="animate-pulse">{t('contactForm.sending')}</span>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>{t('contactForm.submitButton')}</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
