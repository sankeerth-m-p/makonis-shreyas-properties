import React from "react";
import AnimatedHeading from "../components/animatedHeading";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white pt-5 pb-24 px-4">
      <div className="max-w-[1120px] mx-auto px-0">

{/* Content */}
<div className="relative z-10 mx-auto max-w-5xl text-center px-4 md:px-6 [20px]:px-8 pt-6 md:pt-0">
  <AnimatedHeading
    as="h1"
    delay={0}
    className="text-[20px] md:text-[38px] font-medium leading-tight"
  >
  Privacy Policy
  </AnimatedHeading>


</div>


{/* Content */}
<div className="text-gray-700 space-y-6 md:text-[20px] text-sm leading-relaxed px-2 md:px-0">



          <p>
            Your privacy is important to us. It is Siddanth Developers’ policy to respect your privacy regarding any information we may collect from you across our website,
            <span className="font-semibold"> www.siddanthdevelopers.com</span>, and other sites we own and operate.
          </p>

          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
            We also let you know why we’re collecting it and how it will be used.
          </p>

          <p>
            We only retain collected information for as long as necessary to provide you with your requested service.
            Any data we store will be protected within commercially acceptable means to prevent loss, theft, unauthorised access, disclosure, copying, use, or modification.
          </p>

          <p>
            We do not share any personally identifiable information publicly or with third parties, except when required by law.
          </p>

          <p>
            Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites
            and cannot accept responsibility or liability for their respective privacy policies.
          </p>

          <p>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with certain services.
          </p>

          <p>
            Your continued use of our website will be regarded as acceptance of our practices regarding privacy and personal information.
            If you have any questions about how we handle user data and personal information, feel free to contact us at:
          </p>

          <div className="pt-4">
            <p className="font-semibold">Office Address</p>
            <p>
              Siddanth Developers, #305, 3rd Floor, Brigade Business Suites, Ashoka Pillar Road, Jayanagar 2nd Block, Bengaluru, Karnataka 560011
            </p>

            <p className="mt-2">
              <span className="font-semibold">Email:</span> info@siddanthdevelopers.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 73377 80808
            </p>
          </div>

          <p className="pt-4 font-medium">
            This policy is effective as of April 5, 2025.
          </p>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
