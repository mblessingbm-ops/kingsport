'use server'
import nodemailer from 'nodemailer';

// Define proper type for items
interface QuoteItem {
    name: string;
    quantity: number;
    id: number | string;
}

export async function sendQuote(formData: FormData, items: QuoteItem[]) {
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const contact = formData.get('contact') as string;
    const instructions = formData.get('instructions') as string;

    // 1. Configure the transporter
    // NOTE: In production, these should be environment variables.
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER || 'user@example.com',
            pass: process.env.SMTP_PASS || 'password',
        },
    });

    // 2. Format the items list for the email body
    const itemsHtml = items.map(item => `
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">ID: ${item.id}</td>
        </tr>
    `).join('');

    // 3. Construct email content
    const mailOptions = {
        from: `"Kingsport Website" <${process.env.SMTP_FROM || 'website@kingsport.co.zw'}>`,
        to: 'sales@kingsport.co.zw',
        subject: `New Quote Request from ${contact} (${company || 'Individual'})`,
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #000; text-transform: uppercase;">New Quote Request</h2>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                    <p><strong>Contact Name:</strong> ${contact}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
                
                <h3>Requested Items:</h3>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="background: #000; color: #fff;">
                            <th style="padding: 10px;">Item Name</th>
                            <th style="padding: 10px;">Quantity</th>
                            <th style="padding: 10px;">Product ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>

                ${instructions ? `
                <div style="margin-top: 20px; border-top: 2px solid #eee; padding-top: 20px;">
                    <h3 style="margin-bottom: 5px;">Additional Instructions / Codes:</h3>
                    <p style="white-space: pre-wrap; background: #fffbe6; padding: 10px; border: 1px solid #ffe58f;">${instructions}</p>
                </div>
                ` : ''}

                <p style="font-size: 12px; color: #999; margin-top: 30px;">This email was sent from the Kingsport Manufacturing website form.</p>
            </div>
        `,
    };

    try {
        // 4. Send the email
        // Only attempt to send if environment variables are vaguely present, otherwise simulate for dev to avoid crashes
        if (process.env.SMTP_HOST) {
            await transporter.sendMail(mailOptions);
            console.log("✅ Email sent successfully to sales@kingsport.co.zw");
        } else {
            console.warn("⚠️ SMTP_HOST not defined. Email simulation mode.");
            console.log("Would have sent to: sales@kingsport.co.zw");
            console.log("Subject:", mailOptions.subject);
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        return { success: true };
    } catch (error) {
        console.error("❌ Error sending email:", error);
        // We generally return success to the UI even if email fails, 
        // to prevent users from spamming the button, but log the error on server.
        // In a strict app, you might return { success: false, error: '...' }
        return { success: false };
    }
}
