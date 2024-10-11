// app/api/send-email/route.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(req) {
    const body = await req.json();
    const { kidName, phoneNumber, kidAge, parentEmail, inquiries } = body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        logger: true, // Enable logging
        debug: true,
    });

    const mailOptions = {
        from: parentEmail,
        to: 'joembatiadev@gmail.com, gabriel.nganga.njogu@gmail.com',
        subject: `CodeQuest Inquiry from ${parentEmail}`,
        text: `
            Dear Tutor,
                        
            ${parentEmail} has just inquired about:  ${inquiries}  
                            
            and the details of their kid are as follows :
                                Kid's Name: ${kidName}
                                Kid's Age: ${kidAge} 
                                The parents phone number is ${phoneNumber}
            regards,
            CodeQuest Admin.
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
    }
}
