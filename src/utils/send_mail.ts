import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.GMAIL_KEY
    }
})

export const send_mail = async (to: string, url: string) => {
    try {
        const mailOptions = {
            from: process.env.MAIL,
            to: to,
            subject: 'Email Verification',
            text: url
        }
        let info = await transporter.sendMail(mailOptions)
        return info
    } catch (error) {
        throw new Error("failed to send mail")
    }
}

