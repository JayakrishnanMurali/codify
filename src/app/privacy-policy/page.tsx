"use client";

import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  const emailAddress = "ghostkoderr@gmail.com";

  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="space-y-4">
      <h1>Privacy Policy</h1>
      <p>
        At Codify, we are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy explains how
        we collect, use, and disclose your personal data when you use our app.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect certain personal information, such as your name, email
        address, and usage data, when you interact with our app. This
        information is used to provide and improve our services and to
        communicate with you.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to personalize your experience,
        improve our app, and communicate with you about updates and new
        features. We may also use your information for analytics purposes to
        understand how our app is being used and make improvements.
      </p>
      <h2>Sharing Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to third parties without your consent. However, we may share your
        information with trusted third-party service providers who assist us in
        operating our app and providing our services.
      </p>
      <h2>Security</h2>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, please be aware that
        no method of transmission over the internet or electronic storage is
        100% secure.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and the revised version will be effective when it
        is posted.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at{" "}
        <span className="text-secondary-foreground underline">
          <Link href="#" passHref onClick={handleEmailClick}>
            {emailAddress}
          </Link>
        </span>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
