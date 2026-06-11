import React from 'react';
import { Shield, FileText, Smartphone, Mail, MapPin, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20" style={{ fontFamily: 'Montserrat' }}>
      {/* Header Section */}
      <section className="py-16 bg-[#192B59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-200">
              {/* Effective Date: June 10, 2026? */}
            </p>
            <p className="mt-4 text-gray-300 text-sm">
              Silicon Recruit (“we,” “our,” or “us”) values your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website and use our services. By using our website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Policy Details */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#192B59] mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" /> 1. Information We Collect
              </h2>
              <div className="pl-8 space-y-3">
                <p>
                  <strong className="text-gray-900">1.1 Personal Information:</strong> We may collect personal information that you voluntarily provide to us, including but not limited to your name, email address, phone number, and employment details.
                </p>
                <p>
                  <strong className="text-gray-900">1.2 Usage Data:</strong> We collect information about how you use our website, including your IP address, browser type, pages visited, and the date and time of your visit.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#192B59] mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" /> 2. How We Use Your Information
              </h2>
              <ul className="pl-8 list-disc space-y-2">
                <li><strong className="text-gray-900">2.1 To Provide Services:</strong> We use your personal information to provide you with our staffing solutions and related services.</li>
                <li><strong className="text-gray-900">2.2 To Improve Our Website:</strong> We use usage data to analyze how our website is accessed and used, to improve its functionality and user experience.</li>
                <li><strong className="text-gray-900">2.3 To Communicate with You:</strong> We may use your contact information to send you updates, newsletters, marketing materials, and other information that may be of interest to you. You can opt-out of these communications at any time.</li>
                <li><strong className="text-gray-900">2.4 To Comply with Legal Obligations:</strong> We may use your information to comply with applicable laws, regulations, and legal processes.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#192B59] mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" /> 3. Information Sharing and Disclosure
              </h2>
              <div className="pl-8 space-y-4">
                <p>
                  <strong className="text-gray-900">3.1 Third Party:</strong> We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
                  <p className="text-sm text-blue-900 font-medium">
                    All of the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. No mobile information will be sold or shared with third parties for promotional or marketing purposes.
                  </p>
                </div>
                <p>
                  <strong className="text-gray-900">3.2 Legal Requirements:</strong> We may disclose your personal information if required by law or in response to valid requests by public authorities.
                </p>
                <p>
                  <strong className="text-gray-900">3.3 Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the new owner.
                </p>
              </div>
            </div>

            {/* Section 4 & 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#192B59] mb-3">4. Data Security</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#192B59] mb-3">5. Your Rights</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  <strong className="text-gray-900">5.1 Access and Correction:</strong> You have the right to access and correct your personal information held by us.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-900">5.2 Opt-Out:</strong> You can opt-out of receiving marketing communications from us by following the unsubscribe instructions or by contacting us directly.
                </p>
              </div>
            </div>

            {/* Section 6 & 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-8">
              <div>
                <h2 className="text-2xl font-bold text-[#192B59] mb-3">6. Third-Party Links</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#192B59] mb-3">7. Cookies</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use cookies to enhance your experience on our website. Cookies are small data files stored on your device that help us recognize you and understand how you use our site. You can disable cookies through your browser settings.
                </p>
              </div>
            </div>

            {/* Section 8 & 9 (SMS Compliance Focus) */}
            <div className="border-t pt-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#192B59] mb-4 flex items-center">
                <Smartphone className="h-6 w-6 mr-2 text-blue-600" /> 8 & 9. SMS Messaging Terms & Consent
              </h2>
              <p className="text-gray-700 mb-4">
                By opting into our messaging service on the “Contact Us” page, you agree that message and data rates may apply. You can opt out of receiving SMS messages at any time by replying <span className="font-bold">“STOP”</span>. For support, reply <span className="font-bold">“HELP”</span>.
              </p>
              
              <div className="bg-white p-4 rounded border shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div><strong>Brand Name:</strong> Silicon Recruit</div>
                <div><strong>Message Frequency:</strong> May vary based on interaction</div>
                <div><strong>Fees:</strong> Message & Data Rates may apply</div>
                <div><strong>Opt-out:</strong> Text STOP to stop receiving messages</div>
                <div className="sm:col-span-2">
                  <strong>Types of Messages:</strong> Users can expect conversational messages related to account updates, service notifications, and relevant communications.
                </div>
                <div className="sm:col-span-2">
                  <strong>Customer Support:</strong> Text HELP or email <a href="mailto:info@siliconrecruit.com" className="text-blue-600 underline">info@siliconrecruit.com</a>
                </div>
              </div>
            </div>

            {/* Section 10 & 11 */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-[#192B59] mb-3">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website after changes constitute your acceptance of the new Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-[#192B59] mb-4">11. Contact Us</h2>
              <div className="bg-[#192B59] text-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-sm text-gray-300">
                      #930 San Pableo, Suite B, Pinole, CA 94564
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Mobile</h4>
                    <p className="text-sm text-gray-300">+1 (415) 404-3999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-sm text-gray-300">
                      <a href="mailto:info@siliconrecruit.com" className="hover:underline text-blue-300">
                        info@siliconrecruit.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;