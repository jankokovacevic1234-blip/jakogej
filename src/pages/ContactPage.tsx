import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for any questions or support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h3>
            <p className="text-gray-600 mb-6">
              Send us an email and we'll get back to you as soon as possible
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="text-lg font-medium text-gray-900">damjan@detemarketinga.site</p>
            </div>
            <a
              href="mailto:damjan@detemarketinga.site"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>

          {/* Telegram Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Telegram Support</h3>
            <p className="text-gray-600 mb-6">
              Contact us on Telegram for instant support and order assistance
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="text-lg font-medium text-gray-900">@koh0o</p>
            </div>
            <a
              href="https://t.me/koh0o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open Telegram</span>
            </a>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Order Support</h3>
          <p className="text-blue-800">
            After completing your order, please contact us on Telegram with your order code for quick processing and delivery of your products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;