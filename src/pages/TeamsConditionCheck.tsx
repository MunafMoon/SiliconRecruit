import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  number: string;
  message?: string;
  acceptTerms: boolean;
};

const inputClassName = [
  'mt-6',
  'w-full',
  'rounded-lg',
  'bg-white',
  'px-5',
  'py-3',
  'placeholder-gray-400',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-blue-500',
  'border',
  'border-gray-300',
  'text-gray-800',
].join(' ');

const submitEndpoint = ['https://api', 'web3forms', 'com/submit'].join('.');
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? '';

const TeamsConditionCheck = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    if (!accessKey) {
      setStatus('error');
      setFeedback('Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to continue.');
      return;
    }

    setStatus('loading');
    setFeedback(null);

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('subject', 'New Contact Form Submission from Your Website');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message ?? '');
    formData.append('number', data.number);
    formData.append('accept_terms', String(data.acceptTerms));

    try {
      const response = await fetch(submitEndpoint, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFeedback('Your message has been sent successfully!');
        reset();
        return;
      }

      setStatus('error');
      setFeedback(result.message || 'Failed to send message. Please try again.');
      console.error('Contact form submission error:', result);
    } catch (error) {
      setStatus('error');
      setFeedback('An unexpected error occurred. Please try again later.');
      console.error('Contact form request failed:', error);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-xl md:p-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Get in Touch</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              className={inputClassName}
              type="text"
              placeholder="* Name"
              {...register('name', { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
              </p>
            )}
          </div>

          <div>
            <input
              className={inputClassName}
              type="email"
              placeholder="* Email"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}
          </div>

          <div>
            <input
              className={inputClassName}
              type="number"
              placeholder="* Number"
              {...register('number', { required: true, maxLength: 100 })}
            />
            {errors.number && (
              <p className="mt-1 text-sm text-red-500">
                {errors.number.type === 'required' && 'This field is required.'}
                {errors.number.type === 'maxLength' && 'Max length is 100 characters.'}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <div>
              <input
                id="acceptTerms"
                type="checkbox"
                className="h-5 w-5"
                {...register('acceptTerms', { required: true })}
              />
              {'\u00A0'}
              <label htmlFor="acceptTerms" className="cursor-pointer select-none">
                By checking this box, you agree to receive SMS messages from (Silicon Recruit) related to Conversational SMS. Reply STOP to opt out at any time. Reply HELP for customer care contact information. Message and data rates may apply. Message frequency may vary. Carriers are not liable for delayed or undelivered messages. Read our{' '}
                <Link to="/terms-conditions" className="text-red-600 hover:underline">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-sm text-red-500">
                Please accept the terms and conditions to proceed.
              </p>
            )}
          </div>

          <div>
            <textarea
              className={inputClassName}
              placeholder="MESSAGE"
              rows={4}
              {...register('message', { maxLength: 2000 })}
            />
            {errors.message?.type === 'maxLength' && (
              <p className="mt-1 text-sm text-red-500">Max length is 2000 characters.</p>
            )}
          </div>

          {status === 'loading' && (
            <p className="mt-4 text-center font-semibold text-blue-600">Submitting...</p>
          )}
          {status === 'success' && (
            <p className="mt-4 text-center font-semibold text-green-600">{feedback}</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center font-semibold text-red-600">{feedback}</p>
          )}

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-blue-600 px-20 py-3 font-semibold text-white transition duration-500 hover:scale-105 hover:bg-blue-700"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default TeamsConditionCheck;
