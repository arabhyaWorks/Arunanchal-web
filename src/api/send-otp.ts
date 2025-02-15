import { Resend } from 'resend';
import { EmailTemplate } from '../components/EmailTemplate';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function POST(req: Request) {  // Changed to named export POST
  try {
    const body = await req.json();
    console.log('Received request body:', body);
    const { email, name } = body;

    if (!email || typeof email !== 'string') {
      console.log('Invalid email in request');
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Use fixed OTP for specific email
    const otp = email.toLowerCase() === 'animesh11062005@gmail.com' ? 'DIA123' : Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated OTP:', otp, 'for email:', email);

    const { data, error } = await resend.emails.send({
      from: 'send@vlai.in',
      to: email,
      subject: 'Verify your email - Department of Indigenous Affairs',
      react: EmailTemplate({ validationCode: otp }),
    });

    if (error) {
      console.error('Resend API error:', error);
      return Response.json(
        { error: error.message },
        { status: 400 }
      );
    }

    console.log('Email sent successfully');
    return Response.json(
      { 
        success: true, 
        otp,
        message: 'OTP sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending OTP:', error);
    return Response.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}