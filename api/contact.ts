// Fonction serverless Vercel — jamais exécutée dans le navigateur.
// Les identifiants turboSMTP restent côté serveur (variables d'environnement
// Vercel), donc invisibles dans le code source livré au client.
import nodemailer from "nodemailer";

type Req = { method?: string; body: unknown };
type Res = {
  status: (code: number) => Res;
  json: (data: unknown) => void;
};

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = (req.body ?? {}) as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Champs requis manquants." });
    return;
  }

  const SMTP_USER = process.env.SMTP_USER; // Consumer Key turboSMTP
  const SMTP_PASS = process.env.SMTP_PASS; // Consumer Secret turboSMTP
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL; // adresse de destination

  if (!SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    console.error("Variables d'environnement SMTP manquantes.");
    res.status(500).json({ error: "Configuration serveur incomplète." });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "pro.turbo-smtp.com",
      port: 587,
      secure: false, // false pour 587/25/2525 (STARTTLS) — true uniquement pour 465/25025
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio — ${name}" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: subject ? `Contact portfolio — ${subject}` : `Contact portfolio — ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    res.status(500).json({ error: "Échec de l'envoi. Réessayez plus tard." });
  }
}
