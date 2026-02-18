import AnimatedHeading from "../components/animatedHeading";

const Disclaimer = () => {
  return (
    <div className="bg-white pt-5 pb-24">
      <div className="max-w-6xl mx-auto px-6 text-black space-y-6 text-base leading-relaxed">

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center pt-6 md:pt-0">
          <AnimatedHeading
            as="h1"
            delay={0}
            className="text-[20px] md:text-[38px] font-medium leading-tight text-black"
          >
            Disclaimer
          </AnimatedHeading>
        </div>

        <p>
          For all intents and purposes hereinafter, the term “website” shall refer to all websites and/or microsites in
          the domain <strong> www.shreyasinfra.com</strong>, but not third-party websites. This website is the sole
          property of <strong>Shreyas Infra </strong>. The contents of this website, including but not limited to
          the text, content, information, graphics, logos, software, trademarks, plans, drawings, amenities, images,
          renders, specifications, photography, etc., are the sole and exclusive property of
          <strong> Shreyas Infra </strong> and protected by law. They should not be copied, reproduced, published,
          republished, posted, transmitted, or distributed in any way without express, advance, and written consent
          from <strong>Shreyas Infra </strong>.
        </p>

        <p>
          All the information and material provided on this website are solely illustrations and are not intended to
          and shall not be deemed to create any business, contractual obligation, or employment relationship with
          <strong> Shreyas Infra </strong>. <strong>Shreyas Infra </strong> does not guarantee the timeliness,
          completeness, or performance of this website or any of its contents. While we strive to ensure that all
          content featured on this website is correct at the time of publication, we accept no responsibility for any
          errors, omissions, or inaccurate content on the website. <strong>Shreyas Infra </strong> will not be
          liable for any loss or damage, financial or otherwise, including but not limited to actual, consequential,
          direct, exemplary, incidental, indirect, punitive, or special damages as a result of using the information
          herein. We do not guarantee the suitability or quality of any products or services featured on the website.
        </p>

        <p>
          <strong>Shreyas Infra </strong> expressly disclaims all warranties of any kind, whether express or
          implied, including the warranties of merchantability and fitness for a particular purpose. We reserve the
          right, without any obligation whatsoever, to review, correct, remove, or modify all or any content submitted
          herein. All plans, drawings, amenities, features, specifications, and other information mentioned herein are
          indicative and/or suggestive of the kind of development proposed to be undertaken and are subject to the
          approval of the respective competent authority. All plans, renders, and models displayed herein are artist’s
          perceptions and must not be considered as actual buildings, flats, apartments, etc.
        </p>

      </div>
    </div>
  );
};

export default Disclaimer;
