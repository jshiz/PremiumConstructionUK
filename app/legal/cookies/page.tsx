export default function CookiesPage() {
    return (
        <div className="container-custom py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

            <div className="prose prose-blue max-w-none text-gray-700">
                <h2>What are cookies?</h2>
                <p>
                    Cookies are small text files that are placed on your computer by websites that you visit.
                    They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>

                <h2>How we use cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul>
                    <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., security, network management).</li>
                    <li><strong>Analytics Cookies:</strong> To help us understand how visitors interact with our website (e.g., Google Analytics).</li>
                    <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
                </ul>
            </div>
        </div>
    );
}
