export default function PrivacyPage() {
    return (
        <div className="container-custom py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 29, 2026</p>

            <div className="prose prose-blue max-w-none text-gray-700">
                <h2>1. Introduction</h2>
                <p>
                    Premium Construction UK ("we", "our", or "us") is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website or use our services.
                </p>

                <h2>2. Data We Collect</h2>
                <p>We may collect the following information:</p>
                <ul>
                    <li>Personal identification information (Name, email address, phone number, etc.)</li>
                    <li>Property details relevant to renovation enquiries.</li>
                    <li>Payment information processing (handled securely via third-party providers like Klarna).</li>
                </ul>

                <h2>3. Klarna Payments</h2>
                <p>
                    In order to offer you Klarna’s payment methods, we might in the checkout pass your personal data in the form of contact and order details to Klarna,
                    in order for Klarna to assess whether you qualify for their payment methods and to tailor those payment methods for you.
                    Your personal data transferred is processed in line with <a href="https://www.klarna.com/international/privacy-policy/" target="_blank" rel="nofollow" className="text-secondary underline">Klarna’s own privacy notice</a>.
                </p>

                <h2>4. Your GDPR Rights</h2>
                <p>Under the UK General Data Protection Regulation (UK GDPR), you have rights including:</p>
                <ul>
                    <li><strong>Your right of access</strong> - You have the right to ask us for copies of your personal information.</li>
                    <li><strong>Your right to rectification</strong> - You have the right to ask us to rectify personal information you think is inaccurate.</li>
                    <li><strong>Your right to erasure</strong> - You have the right to ask us to erase your personal information in certain circumstances.</li>
                </ul>

                <h2>5. Contact Us</h2>
                <p>
                    For any questions about this privacy policy, please contact us at:<br />
                    Email: Contact@PremiumConstruction.uk<br />
                    Phone: +44 07453 969777<br />
                    Address: 69 Roundhedge Way, Enfield, EN2 8LD
                </p>
            </div>
        </div>
    );
}
