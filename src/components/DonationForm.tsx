import React, { useState } from 'react';
import { Heart, CheckCircle, AlertCircle } from 'lucide-react';
import { donationAPI } from '../services/api';

interface DonationFormData {
  name: string;
  email: string;
  phone: string;
  amount: number;
  message: string;
  isAnonymous: boolean;
}

const DonationForm: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    name: '',
    email: '',
    phone: '',
    amount: 100000,
    message: '',
    isAnonymous: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const predefinedAmounts = [50000, 100000, 250000, 500000, 1000000];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (error) setError('');
  };

  const handleAmountClick = (amount: number) => {
    setFormData((prev) => ({ ...prev, amount }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await donationAPI.create(formData);
      setTransactionId(response.data.transactionId);
      setIsSuccess(true);
    } catch (err) {
      setError('Gagal membuat donasi. Silakan coba lagi.');
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
        <h3 className="text-2xl font-bold text-forest-deep mb-4">Donasi Berhasil Dibuat!</h3>
        <p className="text-gray-600 mb-2">
          ID Transaksi: <span className="font-mono font-semibold">{transactionId}</span>
        </p>
        <p className="text-gray-600 mb-6">
          Silakan lanjutkan ke halaman pembayaran untuk menyelesaikan donasi Anda.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-forest-green font-semibold hover:text-forest-mid transition-colors"
        >
          Buat donasi lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <label className="text-sm font-medium text-gray-700">Pilih Jumlah Donasi *</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountClick(amount)}
              className={`p-3 rounded-lg font-semibold transition-all ${
                formData.amount === amount
                  ? 'bg-forest-green text-white ring-2 ring-forest-green ring-offset-2'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rp {(amount / 1000).toFixed(0)}K
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="amount" className="text-sm font-medium text-gray-700">
          Jumlah Donasi Kustom (Rp) *
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          min="10000"
          step="10000"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all"
          placeholder="Masukkan jumlah donasi"
        />
        <p className="text-sm text-gray-500">
          Total: <span className="font-semibold text-forest-green">Rp {formData.amount.toLocaleString('id-ID')}</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={formData.isAnonymous}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all"
            placeholder="Masukkan email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          No. Telepon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all"
          placeholder="Opsional: Masukkan nomor telepon"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Pesan (Opsional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all resize-none"
          placeholder="Tulis pesan atau doa Anda..."
        />
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="isAnonymous"
          name="isAnonymous"
          checked={formData.isAnonymous}
          onChange={handleChange}
          className="w-4 h-4 rounded border-gray-300 text-forest-green focus:ring-forest-green"
        />
        <label htmlFor="isAnonymous" className="text-sm text-gray-700">
          Saya ingin donasi secara anonim
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-forest-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-forest-mid transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="animate-pulse">Memproses...</span>
        ) : (
          <>
            <Heart className="h-5 w-5" />
            <span>Lanjutkan ke Pembayaran</span>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Donasi Anda aman dan terenkripsi. Kami tidak akan pernah membagikan informasi pribadi Anda.
      </p>
    </form>
  );
};

export default DonationForm;
