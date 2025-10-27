// app/api/contact/route.js (si usas Next.js App Router)
import { Resend } from 'resend';

// Reemplaza con tu clave de entorno
const resend = new Resend(process.env.RESEND_API_KEY); 

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Contacto desde Web <onboarding@ferthomas.dev>', // Debe ser un dominio verificado en Resend
      to: 'fernandoth.20@gmail.com', // Tu correo personal
      reply_to: email, // Para responder directamente al cliente
      subject: `Consulta de ${name}`,
      html: `
        <p><strong>De:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}