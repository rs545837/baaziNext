import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Privacy Policy
      </h1>

      <p>
        Effective Date: September 19, 2023
      </p>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Welcome to Baazi (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Baazi&quot;). At Baazi, we are dedicated to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, utilize, disclose, and safeguard your personal information when you use our DFS platform, website, mobile applications, products, and services (collectively, the &quot;Services&quot;).
        </p>
        <p>
          By accessing or utilizing our Services, you consent to the practices described in this Privacy Policy. If you do not agree with our practices, please refrain from using our Services.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <p>
          We may collect the following categories of personal information from you when you engage with our Services:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Contact Information: Such as your name, email address, and phone number.</li>
          <li>Account Information: Including your username and password.</li>
          <li>Demographic Information: Such as your age, gender, and location.</li>
          <li>Payment Information: For processing transactions and payments.</li>
          <li>Usage Information: Including your browsing history and interactions with our Services.</li>
          <li>User Content: Such as comments, reviews, and posts.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
        <p>
          We may utilize your personal information for various purposes, including but not limited to:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Providing, maintaining, and enhancing our DFS Services.</li>
          <li>Processing transactions and facilitating payments.</li>
          <li>Communicating with you, including responding to your inquiries.</li>
          <li>Personalizing and optimizing your experience with our Services.</li>
          <li>Sending you updates, promotions, and marketing materials.</li>
          <li>Conducting research, analytics, and surveys.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">4. Sharing Your Information</h2>
        <p>
          We may share your personal information under the following circumstances:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>With your explicit consent.</li>
          <li>With trusted service providers who assist us in operating our Services.</li>
          <li>To comply with legal obligations.</li>
          <li>In connection with a merger, acquisition, or sale of our assets.</li>
        </ul>
      </section>

      {/* Continue adding more sections with content and styles... */}

      <section className="mb-4">
        <h2 className="text-xl font-semibold">9. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:support@baazi.org.in" className="text-blue-500">support@baazi.org.in</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
