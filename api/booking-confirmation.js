import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      preferredTimes, 
      paymentDetails, 
      amount, 
      currency 
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !preferredTimes || !paymentDetails) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Send confirmation email to client
    const { data: clientEmail, error: clientError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@yourdomain.com',
      to: [email],
      subject: 'Consultation Booking Confirmed - Wolfewise Pathfinder',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e74c3c; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            🎉 Consultation Booking Confirmed!
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #e74c3c; margin-top: 0;">Booking Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Preferred Times:</strong> ${preferredTimes}</p>
            <p><strong>Amount Paid:</strong> ${currency} ${amount}</p>
            <p><strong>Payment ID:</strong> ${paymentDetails.id}</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d5a2d; margin-top: 0;">What's Next?</h3>
            <p>Thank you for booking your consultation! I'll review your preferred times and send you a calendar invitation within 24 hours.</p>
            <p>If you have any questions or need to reschedule, please don't hesitate to reach out.</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px;">
            <p style="margin: 0; color: #856404; font-size: 14px;">
              <strong>Note:</strong> This is an automated confirmation. Please keep this email for your records.
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to business owner
    const { data: ownerEmail, error: ownerError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@yourdomain.com',
      to: [process.env.TO_EMAIL || 'wolfewiseconsulting@gmail.com'],
      subject: `New Consultation Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e74c3c; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            New Consultation Booking
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #e74c3c; margin-top: 0;">Client Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Preferred Times:</strong> ${preferredTimes}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Payment Details</h3>
            <p><strong>Amount:</strong> ${currency} ${amount}</p>
            <p><strong>Payment ID:</strong> ${paymentDetails.id}</p>
            <p><strong>Status:</strong> ${paymentDetails.status}</p>
            <p><strong>Payment Method:</strong> PayPal</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #d1ecf1; border-radius: 8px;">
            <p style="margin: 0; color: #0c5460; font-size: 14px;">
              <strong>Action Required:</strong> Please contact the client to confirm the final appointment time and send calendar invitation.
            </p>
          </div>
        </div>
      `,
    });

    if (clientError || ownerError) {
      console.error('Email errors:', { clientError, ownerError });
      return res.status(500).json({ 
        error: 'Failed to send confirmation emails' 
      });
    }

    console.log('Booking confirmation emails sent:', { clientEmail, ownerEmail });
    res.json({ 
      success: true, 
      message: 'Booking confirmed and emails sent',
      clientEmailId: clientEmail?.id,
      ownerEmailId: ownerEmail?.id
    });

  } catch (error) {
    console.error('Booking confirmation error:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}
