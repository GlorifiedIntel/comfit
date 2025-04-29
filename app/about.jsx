'use client';

import Image from 'next/image';
import styles from '../app/styles/About.module.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      {/* About Section */}
      <section className={styles.aboutSection}>
        <h1 className={styles.title}>About Comfit Eyeglasses Store</h1>
        <p>
          Welcome to Comfit Eyeglasses, where we believe that vision and style should go hand in hand. We are a team of passionate eyewear enthusiasts dedicated to offering the highest quality glasses that combine comfort, durability, and modern style. With our carefully curated selection of frames, we aim to provide eyewear solutions for every face and lifestyle.
        </p>
        <p>
          At Comfit, we focus on personalized service, ensuring that each pair of glasses is tailored to fit your unique needs. Whether you need prescription glasses, sunglasses, or want to try out a trendy new frame, we’ve got you covered.
        </p>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.subtitle}>Meet Our Team</h2>
        <p>
          Our team is made up of experienced eyewear professionals, designers, and customer service experts, all working together to make sure you find your perfect pair of glasses.
        </p>

        {/* Team Members */}
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <Image
              src="/images/team/john.jpg"
              alt="John Doe"
              width={150}
              height={150}
              className={styles.teamPhoto}
            />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>With over 15 years of experience in the eyewear industry, John is passionate about bringing high-quality, stylish eyewear to everyone. His vision for Comfit is to create a brand that combines fashion with function.</p>
          </div>

          <div className={styles.teamMember}>
            <Image
              src="/images/team/jane.jpg"
              alt="Jane Smith"
              width={150}
              height={150}
              className={styles.teamPhoto}
            />
            <h3>Jane Smith</h3>
            <p>Head of Design</p>
            <p>Jane leads our design team, ensuring that all of our frames are not only stylish but also comfortable and durable. She brings creativity and innovation to the eyewear industry, making sure every piece is on the cutting edge of fashion.</p>
          </div>

          <div className={styles.teamMember}>
            <Image
              src="/images/team/mike.jpg"
              alt="Mike Lee"
              width={150}
              height={150}
              className={styles.teamPhoto}
            />
            <h3>Mike Lee</h3>
            <p>Customer Experience Manager</p>
            <p>Mike is the heart of our customer service. His goal is to ensure that every customer has a seamless and enjoyable experience from start to finish. He is always available to help with frame fitting, prescription inquiries, and styling advice.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
