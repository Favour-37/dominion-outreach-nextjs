"use client";
"use client";
import { motion, Variants } from "framer-motion";

const VIDEO_URL =
  "https://res.cloudinary.com/dxiefklmt/video/upload/v1774101926/Cloud_Oppening_evboyf.mp4";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};
const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22c-1.612 0-3.19-.435-4.567-1.259l-.328-.194-3.398.891.906-3.309-.213-.34a9.9 9.9 0 01-1.518-5.293c.001-5.462 4.447-9.909 9.921-9.909 2.65 0 5.14 1.034 7.014 2.912a9.85 9.85 0 012.906 7.001c-.002 5.462-4.448 9.9-9.923 9.9zm8.413-18.29A11.815 11.815 0 0012.05 0C5.495 0 .16 5.334.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.87 11.87 0 005.681 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 00-3.478-8.191z";

const INSTAGRAM_PATH =
  "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.35 1.26.4 2.43.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.35-2.43.4-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.6 1.8c.46-.16 1.26-.35 2.43-.4C9.28 1.34 9.68 1.33 12 1.33zm0 1.8c-3.15 0-3.52 0-4.76.07-.96.04-1.48.2-1.82.34a3.1 3.1 0 00-1.15.75c-.35.34-.57.68-.75 1.15-.14.34-.3.86-.34 1.82C3.11 8.48 3.1 8.85 3.1 12s0 3.52.07 4.76c.04.96.2 1.48.34 1.82.18.47.4.81.75 1.15.34.35.68.57 1.15.75.34.14.86.3 1.82.34 1.24.06 1.61.07 4.76.07s3.52 0 4.76-.07c.96-.04 1.48-.2 1.82-.34.47-.18.81-.4 1.15-.75.35-.34.57-.68.75-1.15.14-.34.3-.86.34-1.82.06-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.04-.96-.2-1.48-.34-1.82a3.1 3.1 0 00-.75-1.15 3.1 3.1 0 00-1.15-.75c-.34-.14-.86-.3-1.82-.34C15.52 3.11 15.15 3.1 12 3.1zm0 3.16a5.74 5.74 0 110 11.48 5.74 5.74 0 010-11.48zm0 1.8a3.94 3.94 0 100 7.88 3.94 3.94 0 000-7.88zm6-2.02a1.34 1.34 0 11-2.68 0 1.34 1.34 0 012.68 0z";

export default function Home() {
  return (
    <>
      <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)" }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-8 mt-24">
          <motion.h1 initial="hidden" animate="show" variants={zoomIn} className="hero-title mb-6">
            It&apos;s All About Jesus
          </motion.h1>
          <motion.p
            initial="hidden" animate="show" variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="hero-tagline mb-10 max-w-3xl mx-auto"
          >
            And this is life eternal, that they might know thee the only true God, and Jesus Christ,
            whom thou hast sent. John 17:3
          </motion.p>
          <motion.a
            href="#mission"
            initial="hidden" animate="show" variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="hero-cta"
          >
            Discover Our Mission &amp; Vision
          </motion.a>
        </div>
      </section>

      <section id="mission" className="content-section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-title">
          <span className="title-text">Our Mission</span>
          <span className="title-underline" />
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-copy">
          Helping you, a step at a time in Partnership with the Holy Spirit, Leading you to Intimacy with the Father.
        </motion.p>

        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-title">
          <span className="title-text">Our Vision</span>
          <span className="title-underline" />
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-copy">
          To raise a generation of them that seek the face of the Father and to witness Jesus enthroned in the hearts of His Children.
        </motion.p>
      </section>

      <section id="about" className="content-section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeLeft} className="section-title">
          <span className="title-text">Why We Exist</span>
          <span className="title-underline" />
        </motion.h2>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeRight}
          className="flex items-center justify-center gap-5 my-3 mb-8 max-w-3xl mx-auto"
        >
          <h3 className="question-text">After saying &ldquo;Yes&rdquo; to Jesus, what next?</h3>
        </motion.div>

        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-copy">
          Saying yes to Jesus is not the destination, but just the beginning. Living for Jesus is the wonderful adventure we are all called to explore. But how can you embark on an adventure if you do not have a guide and friends to tag along with you?
        </motion.p>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-copy">
          Knowing and Living for Jesus is not easy, especially if you are doing it alone. Dominion Outreach exists to help bridge this gap, by providing Free Discipleship Platforms, to Help young, growing and already established believers, Know The Saviour of their lives and making this adventure Fun along the way!
        </motion.p>
      </section>

      <section id="services" className="content-section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeRight} className="section-title">
          <span className="title-text">We are Here For You</span>
          <span className="title-underline" />
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-copy mb-4">
          We provide daily teachings inspired by the Holy Spirit, to Help strengthen your walk with God, growing in Intimacy.
        </motion.p>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-copy mb-4">
          This is tailored to ensure that you become and remain strong and healthy in your Spiritual life.
        </motion.p>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="section-copy">
          Join Our WhatsApp Channel and be part of our online community, growing together with fellow brethren
        </motion.p>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={zoomIn}
          className="relative inline-flex items-center justify-center mt-6"
        >
          <span className="pulse-ring ring-1" />
          <span className="pulse-ring ring-2" />
          <span className="pulse-ring ring-3" />
          <a href="https://whatsapp.com/channel/0029Vb7dH5k0wajp7QiO6A2m" target="_blank" rel="noopener noreferrer" className="whatsapp-button relative z-20">
            <span className="button-particle p1" />
            <span className="button-particle p2" />
            <span className="button-particle p3" />
            <span className="button-particle p4" />
            <div className="button-content">
              <div className="button-icon-wrapper relative">
                <svg className="w-8 h-8 whatsapp-icon-pulse relative z-10" fill="#fff" viewBox="0 0 24 24">
                  <path d={WHATSAPP_PATH} />
                </svg>
                <span className="icon-glow" />
              </div>
              <div className="text-left flex-1">
                <span className="button-main-text block">Connect on WhatsApp</span>
                <span className="button-sub-text block">Join our spiritual community</span>
              </div>
              <div className="button-arrow">
                <svg className="w-5 h-5" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            <span className="button-hover-layer" />
          </a>
        </motion.div>
      </section>

      <section id="contact" className="content-section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeLeft} className="section-title">
          <span className="title-text">We Are Only a Click of a Button Away</span>
          <span className="title-underline" />
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="contact-message">
          Every journey of faith begins with a single step — or a simple message. Whether you&apos;re seeking answers, encouragement, or a community to belong, we&apos;re here for you. No question is too small, no suggestion unsound, no prayer too big.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-10 max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeLeft} className="contact-orb orb-email">
            <div className="orb-icon" style={{ background: "linear-gradient(135deg, #3498db, #9b59b6)", boxShadow: "0 10px 30px rgba(52,152,219,0.3)" }}>
              <svg className="w-8 h-8" fill="none" stroke="#fff" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Email Us</h3>
            <div className="flex flex-col gap-4 mb-6">
              <a href="mailto:dominionoutreachofficial@gmail.com" className="orb-link">dominionoutreachofficial@gmail.com</a>
            </div>
            <span className="orb-badge">We reply within 24hrs</span>
            <span className="orb-glow" />
            <span className="orb-particle" style={{ top: "10%", right: "10%", background: "#3498db", animationDelay: "0s" }} />
            <span className="orb-particle" style={{ bottom: "20%", left: "5%", background: "#9b59b6", animationDelay: "2s" }} />
            <span className="orb-particle" style={{ top: "30%", left: "15%", background: "#2ecc71", animationDelay: "4s" }} />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="contact-orb orb-whatsapp">
            <div className="orb-icon" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 10px 30px rgba(37,211,102,0.3)" }}>
              <svg className="w-8 h-8" fill="#fff" viewBox="0 0 24 24">
                <path d={WHATSAPP_PATH} />
              </svg>
            </div>
            <h3>WhatsApp Channel</h3>
            <a href="https://whatsapp.com/channel/0029Vb7dH5k0wajp7QiO6A2m" target="_blank" rel="noopener noreferrer" className="channel-btn">
              <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                <path d={WHATSAPP_PATH} />
              </svg>
              Join Our Channel
              <svg className="w-4 h-4" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="orb-glow" />
            <span className="orb-particle" style={{ top: "15%", right: "15%", background: "#25D366", animationDelay: "1s" }} />
            <span className="orb-particle" style={{ bottom: "25%", right: "20%", background: "#128C7E", animationDelay: "3s" }} />
            <span className="orb-particle" style={{ top: "40%", left: "10%", background: "#3498db", animationDelay: "5s" }} />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeRight} className="contact-orb orb-instagram">
            <div className="orb-icon" style={{ background: "radial-gradient(circle at 30% 30%, #fdf497, #fd5949, #d6249f, #285AEB)", boxShadow: "0 10px 30px rgba(193,53,132,0.3)" }}>
              <svg className="w-8 h-8" fill="#fff" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d={INSTAGRAM_PATH} />
              </svg>
            </div>
            <h3>Follow Us</h3>
            <a href="https://www.instagram.com/dominion_outreach/?hl=en" target="_blank" rel="noopener noreferrer" className="orb-link instagram-link">@dominion_outreach</a>
            <span className="orb-glow" />
            <span className="orb-particle" style={{ top: "8%", left: "8%", background: "#fdf497", animationDelay: "0.5s" }} />
            <span className="orb-particle" style={{ bottom: "20%", right: "10%", background: "#fd5949", animationDelay: "2s" }} />
            <span className="orb-particle" style={{ top: "35%", right: "12%", background: "#d6249f", animationDelay: "3.5s" }} />
            <span className="orb-particle" style={{ bottom: "12%", left: "12%", background: "#285AEB", animationDelay: "5s" }} />
          </motion.div>
        </div>
      </section>
    </>
  );
}