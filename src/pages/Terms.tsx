import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Terms of Service
              </h1>
              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground text-lg mb-8">
                  Last updated: January 2026
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using TutorConnect, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. User Accounts</h2>
                  <p className="text-muted-foreground mb-4">
                    When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Maintaining the security of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized access</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Teacher Verification</h2>
                  <p className="text-muted-foreground">
                    Teachers must complete our verification process before offering services. This includes providing valid identification and relevant qualifications. We reserve the right to reject or remove any teacher who does not meet our standards or violates our policies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payments and Fees</h2>
                  <p className="text-muted-foreground mb-4">
                    All payments are processed through our secure payment system. By using our platform:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Students agree to pay the rates set by teachers</li>
                    <li>Teachers agree to our commission structure (40% first month, 15% thereafter)</li>
                    <li>Refunds are subject to our refund policy</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Code of Conduct</h2>
                  <p className="text-muted-foreground mb-4">
                    All users must:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Treat others with respect and professionalism</li>
                    <li>Not engage in any form of harassment or discrimination</li>
                    <li>Not share false or misleading information</li>
                    <li>Not attempt to circumvent our platform for direct payments</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    The TutorConnect platform, including its design, features, and content, is protected by copyright and other intellectual property laws. Users retain ownership of content they create but grant us a license to use it for platform purposes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    TutorConnect is a platform connecting students and teachers. We are not responsible for the quality of instruction provided, scheduling conflicts, or disputes between users. Our liability is limited to the amount you have paid to us in the past 12 months.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                  <p className="text-muted-foreground">
                    We may terminate or suspend your account at any time for violations of these terms. Upon termination, your right to use the platform will cease immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. We will notify users of significant changes via email or platform notification. Continued use after changes constitutes acceptance of new terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at legal@tutorconnect.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
