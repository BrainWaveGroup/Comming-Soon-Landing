import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Policy() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Privacy Policy for Smart Assistant Chatbot</p>
      </div>

      <div className={styles.maincontent}>
        <p>
          <br />
          The Smart Assistant chatbot is a product created by Brain Wave Group,
          designed to support small retailers` clients by chat channels such as
          WhatsApp and Telegram. Brain Wave Group is committed to protecting the
          privacy of our users and their personal information. This privacy
          policy outlines how we collect, use, and protect the information
          collected by the Smart Assistant chatbot.
        </p>
        <h2>Information We Collect</h2>
        <p>
          The Smart Assistant chatbot collects the following information from
          users:
        </p>
        <ul>
          <li>
            Name and contact information, such as phone number and email address
          </li>
          <li>
            Order information, such as order history and delivery information
          </li>
          <li>Chat history with the Smart Assistant chatbot</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>
          We use the information collected by the Smart Assistant chatbot for
          the following purposes:
        </p>
        <ul>
          <li>To provide customer support and assistance with orders</li>
          <li>To improve the chatbots performance and user experience</li>
          <li>
            To send promotional offers and marketing messages, if the user has
            opted in to receive them
          </li>
        </ul>
        <p>
          We do not sell or share your personal information with third parties,
          except as required by law or with your explicit consent.
        </p>
        <h2>Data Security</h2>
        <p>
          We take the security of your personal information seriously and have
          implemented measures to protect it from unauthorized access or use.
          These measures include encryption of data in transit and at rest,
          access controls, and regular security audits.
        </p>
        <h2>Retention of Data</h2>
        <p>
          We retain your personal information for as long as necessary to
          provide the services requested and to comply with legal and regulatory
          requirements.
        </p>
        <h2>Your Rights</h2>
        <p>
          You have the right to access and request the deletion of your personal
          information collected by the Smart Assistant chatbot. You may also
          request a copy of the information we have collected about you. To
          exercise these rights, please contact us using the information
          provided below.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy or the
          Smart Assistant chatbot, please contact us at:
        </p>
        <p>
          Brain Wave Group
          <br />
          Email: privacy@brainwave.group
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes
          in our practices or legal requirements. We encourage you to review
          this policy periodically to stay informed of our privacy practices.
        </p>
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}
