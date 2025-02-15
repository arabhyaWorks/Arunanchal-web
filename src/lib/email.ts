import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendOTPEmail = async (email: string, name: string, otp: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'send@vlai.in',
      to: email,
      subject: 'Verify your email - Department of Indigenous Affairs',
      react: EmailTemplate({
        validationCode: otp,
      }),
    });

    if (error) {
      console.error('Error sending email:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};