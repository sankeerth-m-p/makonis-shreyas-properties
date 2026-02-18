import AnimatedHeading from "../components/animatedHeading";

const TermsOfUse = () => {
  return (
    <div className="bg-white pt-5 pb-24">
      <div className="max-w-6xl mx-auto px-6 text-black space-y-6 text-base leading-relaxed">

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center pt-6 md:pt-0">
          <AnimatedHeading
            as="h1"
            delay={0}
            className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8"
          >
            Terms Of Use
          </AnimatedHeading>
        </div>

        <p><strong>Effective Date:</strong> January 5, 2026</p>
        <p><strong>Last Updated:</strong> January 5, 2026</p>

        <p>
          Welcome to the official website of <strong>Shreyas Infra </strong>. This website
          (<strong> www.shreyasinfra.com</strong>) is owned and operated by <strong>Shreyas Infra </strong>.
          By visiting our website and accessing the information, resources, services, products, and tools we provide,
          you understand and agree to accept and adhere to the following terms and conditions (hereafter referred to as
          ‘User Agreement’), along with the terms and conditions as stated in our Privacy Policy (please refer to the
          Privacy section on our website for more information).
        </p>

        <h3 className="font-semiboldx text-[20px]">1. Changes to the User Agreement</h3>
        <p>
          This agreement is in effect as of <strong>January 5, 2026</strong>. We reserve the right to change this User
          Agreement from time to time without notice. You acknowledge and agree that it is your responsibility to
          review this User Agreement periodically to familiarize yourself with any modifications. Your continued use
          of this site after such modifications will constitute acknowledgment and agreement to the modified terms
          and conditions.
        </p>

        <h3 className="font-semiboldx text-[20px]">2. Viewing the Website</h3>
        <p>
          This site is optimized for the latest versions of modern web browsers and best viewed at a
          <strong> 1024 x 768 </strong> screen resolution or higher.
        </p>

        <h3 className="font-semiboldx text-[20px]">3. Responsible Use and Conduct</h3>
        <p>
          By visiting our website and accessing the information, resources, services, products, and tools we provide
          for you, either directly or indirectly (hereafter referred to as ‘Resources’), you agree to use these
          Resources only for the purposes intended.
        </p>

        <h3 className="font-semiboldx text-[20px]">5. Privacy</h3>
        <p>
          Your privacy is very important to us. Please refer to our <strong>Privacy Policy</strong> to understand how we
          collect, manage, process, secure, and store your private information.
        </p>

        <h3 className="font-semiboldx text-[20px]">6. Limitation of Warranties</h3>
        <p>
          By using our website, you understand and agree that all Resources we provide are “as is” and “as available.”
          We do not warrant that:
        </p>
        <p>The use of our Resources will meet your needs.</p>
        <p>The use of our Resources will be uninterrupted, timely, secure, or error-free.</p>
        <p>Any information obtained by using our Resources will be accurate or reliable.</p>

        <h3 className="font-semiboldx text-[20px]">7. Limitation of Liability</h3>
        <p>
          You expressly understand and agree that <strong>Shreyas Infra </strong> shall not be liable for any direct,
          indirect, incidental, consequential, or exemplary damages incurred by you as a result of using our Resources.
        </p>

        <h3 className="font-semiboldx text-[20px]">8. Copyrights/Trademarks</h3>
        <p>
          All content and materials available on  www.shreyasinfra.com, including but not limited to text, graphics,
          website name, code, images, and logos, are the intellectual property of <strong>Shreyas Infra </strong> and
          are protected by applicable copyright and trademark laws. Unauthorized use, reproduction, or distribution of
          any content is strictly prohibited unless explicitly authorized in writing.
        </p>

        <h3 className="font-semiboldx text-[20px]">9. Termination of Use</h3>
        <p>
          We reserve the right to suspend or terminate your access to all or part of our website without notice for any
          violation of this User Agreement. Any suspected illegal, fraudulent, or abusive activity may be referred to
          law enforcement authorities.
        </p>

        <h3 className="font-semiboldx text-[20px]">10. Governing Law</h3>
        <p>
          This website is controlled by <strong>Shreyas Infra </strong> from our offices located in
          <strong> Bengaluru, Karnataka, India</strong>. By accessing our website, you agree that the statutes and laws
          of <strong>Karnataka, India</strong> will apply to all matters relating to the use of this website.
        </p>

        <h3 className="font-semiboldx text-[20px]">11. Contact Information</h3>
        <p>
          If you have any questions regarding our Terms of Use, please contact us:
        </p>

        <p>
          Shreyas Infra , 3rd Floor, Chourasia Shreyas Arcade,
3rd Main Cross Rd, Aswath Nagar, Marathahalli, Bengaluru - 560037
        </p>

        <p>
          <strong>Email:</strong> info@shreyasinfra.com<br />
          <strong>Phone:</strong> +91 81518 84545
        </p>

      </div>
    </div>
  );
};

export default TermsOfUse;
