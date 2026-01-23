export default function TermsPage() {
    return (
        <div className="container-custom py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: [Date]</p>

            <div className="prose prose-blue max-w-none text-gray-700">
                <h2>1. Agreement to Terms</h2>
                <p>
                    These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Premium Construction UK.
                </p>

                <h2>2. Renovation Services</h2>
                <p>
                    All renovation works are subject to a specific project contract which will outline the scope of work, timeline, and payment schedule.
                    In the event of a conflict between these website terms and your project contract, the project contract shall prevail.
                </p>

                <h2>3. Payments & Klarna</h2>
                <p>
                    We offer financing options through Klarna and other providers. Payments made via the Client Portal are secured by standard encryption.
                    Late payments may incur interest as specified in your project contract or as per the Late Payment of Commercial Debts (Interest) Act 1998.
                </p>

                <h2>4. Liability</h2>
                <p>
                    We carry full public liability insurance. However, we are not liable for:
                </p>
                <ul>
                    <li>Pre-existing structural defects in your property.</li>
                    <li>Delays caused by force majeure events or supply chain disruptions beyond our control.</li>
                </ul>

                <h2>5. Governing Law</h2>
                <p>
                    These terms shall be governed by and defined following the laws of England and Wales.
                    Premium Construction UK and yourself irrevocably consent that the courts of England and Wales shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
            </div>
        </div>
    );
}
